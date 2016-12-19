<?php
//$data = ($_POST['student']);
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    //$data = '{"name":"David","email":"dmssargent@yahoo.com","studentsParent":{"name":"Kevin","email":"kmssargent@sbcglobal.net"}}';
    http_response_code(400);
    die();
}
var_dump($data);
$json = $data; //json_decode($data, true);
echo json_encode($json);
$parent = $json["studentsParent"];
if (!($json["name"] && $json["email"])) {
    http_response_code(400);
    die("Invalid student");
}

if (!($parent["name"] && $parent["email"])) {
    http_response_code(400);
    die("Invalid parent");
}
//
//var_dump($json);
//var_dump($parent);

// Database login
$username = "mhs_rbtsignup";
$password = "UVQ*4jiqJN*k6s1v";
$db_name = "mhs_rbtsignup";
$hostname = "localhost";

$dbh = mysqli_connect($hostname, $username, $password, $db_name);

// Escape special chars
$json["name"] = mysqli_real_escape_string($dbh, $json["name"]);
$json["email"] = mysqli_real_escape_string($dbh, $json["email"]);
$parent["name"] = mysqli_real_escape_string($dbh, $parent["name"]);
$parent["email"] = mysqli_real_escape_string($dbh, $parent["email"]);

if (!$dbh) {
    http_response_code(503);
    echo "Error: Unable to connect to database." . PHP_EOL;
    //echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    //echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} else {

    $sql = "INSERT INTO students (name, email, parentname, parentemail)
VALUES ('" . $json["name"] . "', '" . $json["email"] . "', '" .  $parent["name"] . "', '" . $parent["email"]."')";

    if (mysqli_query($dbh, $sql)) {
        // echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($dbh);
    }

}

// Close connection
mysqli_close($dbh);

echo json_encode($json);
?>