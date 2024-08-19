<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$servername = "10.100.137.191";
$username = "ms_admin";
$password = "msadmin1234";
$dbname = "";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}
?>