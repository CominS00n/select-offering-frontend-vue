<?php
require ('conn2.php');

// สั่ง Query ข้อมูล
$sql = "SELECT
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
    TO_CHAR (
        INST.EFF_DATE + 7 / 24,
        'YYYY-MM-DD HH24:MI:SS'
    ) AS OFFER_EFFECT_DATE,
    TO_CHAR (
        INST.EXP_DATE + 7 / 24,
        'YYYY-MM-DD HH24:MI:SS'
    ) AS OFFER_EXP_DATE
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
    AND INST.O_ID IN ('51005338', '51005346')
    AND SUB.STATUS IN (1, 2, 3, 4)";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

// ส่งข้อมูลออกในรูปแบบ JSON
echo json_encode($data);
?>