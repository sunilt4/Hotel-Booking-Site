<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "final_project";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
// When the submit button is press do this

$sql = "INSERT INTO MyGuests (firstname, lastname, email, addres, adress_2, country, province, postal_code, name_on_card, card_number, expire, cvv) VALUES (
    '{$conn->real_escape_string($_POST['firstName'])}',
    '{$conn->real_escape_string($_POST['lastName'])}',
    '{$conn->real_escape_string($_POST['autocomplete'])}',
    '{$conn->real_escape_string($_POST['address2'])}',
    '{$conn->real_escape_string($_POST['email'])}',
    '{$conn->real_escape_string($_POST['country'])}',
    '{$conn->real_escape_string($_POST['province'])}',
    '{$conn->real_escape_string($_POST['postal'])}',
    '{$conn->real_escape_string($_POST['cc-name'])}',
    '{$conn->real_escape_string($_POST['cc-number'])}',
    '{$conn->real_escape_string($_POST['expire'])}',
    '{$conn->real_escape_string($_POST['cc-cvv'])}')";
    

    if ($conn->query($sql) === true) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>
