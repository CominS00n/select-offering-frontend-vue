<html>

<head>
    <title>Oracle demo</title>
</head>

<body>
    <?php
    if (in_array('oci8', get_loaded_extensions())) {
        echo "OCI8 extension is enabled.";
    } else {
        echo "OCI8 extension is not enabled.";
    }

    $conn = oci_connect('hr', 'hr', 'localhost:1521/xe');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    
    ?>

</body>

</html>