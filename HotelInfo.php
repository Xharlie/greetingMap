<?php
/**
 * Created by PhpStorm.
 * User: charlie
 * Date: 9/25/15
 * Time: 7:00 PM
 */
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "kongzi33";
$dbname = "GuestRoom";

//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);

//Select Database
mysql_select_db($dbname) or die(mysql_error());

// Retrieve data from Query String
$ID = $_POST['ID'];

// Escape User Input to help prevent SQL Injection
$ID = mysql_real_escape_string($ID);

//build query
$query = "SELECT * FROM Hotel_Info WHERE HTL_ID = '$ID';";


//Execute query
mysql_query("set names utf8;");
$qry_result = mysql_query($query) or die(mysql_error());
//$qry_result = mysql_query($query) or die(mysql_error());

echo json_encode(mysql_fetch_array($qry_result));
