<?php
require('conn.php');

// สั่ง Query ข้อมูล
$sql = "SELECT offering_id, offering_name FROM cat_rtc_offer_manage.main_offering WHERE status IN (1, 2)";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

// ส่งข้อมูลออกในรูปแบบ JSON
echo json_encode($data);
?>
