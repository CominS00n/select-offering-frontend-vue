<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ข้อมูลการเชื่อมต่อฐานข้อมูล
$servername = "10.100.137.191";
$username = "ms_admin";
$password = "msadmin1234";
$dbname = "";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}
?>