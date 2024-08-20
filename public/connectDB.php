<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// การเชื่อมต่อกับฐานข้อมูลแรก (MySQL)
$dsn_mysql = "mysql:host=10.100.137.191";
$username_mysql = "ms_admin";
$password_mysql = "msadmin1234";

// การเชื่อมต่อกับฐานข้อมูลที่สอง (Oracle)
$dsn_oracle = 'oci:dbname=10.100.1.22:1550/ora12c';
$username_oracle = 'USR_175';
$password_oracle = 'Usr_0001';

try {
    $con_mysql = new PDO($dsn_mysql, $username_mysql, $password_mysql);
    $con_mysql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $con_oracle = new PDO($dsn_oracle, $username_oracle, $password_oracle);
    $con_oracle->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(array("error" => "Connection failed: " . $e->getMessage()));
    exit;
}
?>