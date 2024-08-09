<?php
$dsn = 'oci:dbname=10.100.1.22:1550/ora12c';
$user = 'USR_175';
$password = 'Usr_0001';

if (in_array('PDO_OCI', PDO::getAvailableDrivers())) {
    echo "PDO OCI extension is enabled.";
} else {
    echo "PDO OCI extension is not enabled.";
}

// try {
//     $con_oci = new PDO($dsn, $user, $password);
// } catch (PDOException $e) {
//     echo 'Connection failed: ' . $e->getMessage();
// }

?>