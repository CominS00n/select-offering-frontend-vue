<?php
require('connectDB.php');

try {
    $sql_mysql = "SELECT offering_id, offering_name FROM cat_rtc_offer_manage.main_offering WHERE status IN (1, 2) ORDER BY offering_id";
    $stmt_mysql = $con_mysql->query($sql_mysql);
    $stmt_mysql->execute();
    $result_mysql = $stmt_mysql->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result_mysql);
} catch (PDOException $e) {
    echo json_encode(array("error" => $e->getMessage()));
} catch (Exception $e) {
    echo json_encode(array("error" => $e->getMessage()));
}

?>