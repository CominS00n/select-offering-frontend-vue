<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require('connectDB.php');

$o_id_array = isset($_GET['o_id']) ? $_GET['o_id'] : [];
$o_id_list = implode(",", array_map('intval', $o_id_array));

$status_array = isset($_GET['status']) ? $_GET['status'] : [];
$status_list = implode(",", array_map('intval', $status_array));

try {
    // ตรวจสอบการเชื่อมต่อ
    if (!isset($con_mysql) || !isset($con_oracle)) {
        throw new Exception("Database connection not established.");
    }

    // การสืบค้นฐานข้อมูล MySQL
    $sql_mysql = "SELECT offering_id, offering_name FROM cat_rtc_offer_manage.main_offering";
    $stmt_mysql = $con_mysql->query($sql_mysql);
    $stmt_mysql->execute();
    $result_mysql = $stmt_mysql->fetchAll(PDO::FETCH_ASSOC);

    // การสร้างแผนที่ของ offering_id กับ offering_name
    $offer_map = [];
    foreach ($result_mysql as $row) {
        $offer_map[$row['offering_id']] = $row['offering_name'];
    }

    // การสืบค้นฐานข้อมูล Oracle
    $sql_oracle = "SELECT ROW_NUMBER() OVER (ORDER BY IDEN.SUB_IDENTITY) AS RNUM,
                    IDEN.SUB_IDENTITY AS MSISDN,
                    CASE
                        WHEN DEF_ACCT.PAYMENT_MODE = 0 THEN 'Prepaid'
                        WHEN DEF_ACCT.PAYMENT_MODE = 1 THEN 'Postpaid'
                        ELSE DEF_ACCT.PAYMENT_MODE
                    END AS PAYMENT_MODE,
                    CASE
                        WHEN SUB.STATUS = 1 THEN 'Idle'
                        WHEN SUB.STATUS = 2 THEN 'Active'
                        WHEN SUB.STATUS = 3 THEN 'Call Barring'
                        WHEN SUB.STATUS = 4 THEN 'Suspend'
                        WHEN SUB.STATUS = 8 THEN 'Pool'
                        ELSE SUB.STATUS
                    END AS SUBSCRIBER_STATUS,
                    INST.O_ID AS OFFER_ID,
                    INST.PRIMARY_FLAG AS PRIMARY_FLAG,
                    CASE
                        WHEN INST.STATUS = 2 THEN 'Active'
                        WHEN INST.STATUS = 3 THEN 'Call Barring'
                        WHEN INST.STATUS = 4 THEN 'Suspend'
                        ELSE INST.STATUS
                    END AS OFFER_STATUS,
                    TO_CHAR(INST.EFF_DATE + 7 / 24, 'YYYY-MM-DD HH24:MI:SS') AS OFFER_EFFECT_DATE,
                    TO_CHAR(INST.EXP_DATE + 7 / 24, 'YYYY-MM-DD HH24:MI:SS') AS OFFER_EXP_DATE
                FROM
                    BC_SUB_IDEN IDEN,
                    BC_SUBSCRIBER SUB,
                    BC_SUB_DFT_ACCT DEF_ACCT,
                    BC_OFFERING_INST INST
                WHERE
                    IDEN.SUB_ID = SUB.SUB_ID
                    AND SUB.SUB_ID = INST.OWNER_ID
                    AND SUB.SUB_ID = DEF_ACCT.SUB_ID
                    AND SUB.EXP_DATE + 7 / 24 > SYSDATE
                    AND IDEN.EXP_DATE + 7 / 24 > SYSDATE
                    AND INST.EXP_DATE + 7 / 24 > SYSDATE
                    AND DEF_ACCT.EXP_DATE + 7 / 24 > SYSDATE
                    AND IDEN.PRIMARY_FLAG = 1
                    AND INST.O_ID IN ($o_id_list)
                    AND SUB.STATUS IN ($status_list)
                    ORDER BY INST.O_ID";

    $stmt_oracle = $con_oracle->query($sql_oracle);
    $stmt_oracle->execute();
    $result_oracle = $stmt_oracle->fetchAll(PDO::FETCH_ASSOC);

    // รวมผลลัพธ์จากทั้งสองฐานข้อมูล
    foreach ($result_oracle as &$row) {
        $row['OFFER_NAME'] = isset($offer_map[$row['OFFER_ID']]) ? $offer_map[$row['OFFER_ID']] : null;
    }

    echo json_encode($result_oracle);
} catch (PDOException $e) {
    echo json_encode(array("error" => $e->getMessage()));
} catch (Exception $e) {
    echo json_encode(array("error" => $e->getMessage()));
}
?>