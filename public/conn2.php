<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dsn = 'oci:dbname=10.100.1.22:1550/ora12c';
$user = 'USR_175';
$password = 'Usr_0001';

try {
    $con_oci = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
echo "Connected successfully";
?>