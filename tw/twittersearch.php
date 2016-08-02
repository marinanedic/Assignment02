<?php
header('Content-Type: application/javascript');
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library

$query = $_GET['q'];
$count = (isset($_GET['count'])) ? $_GET['count'] : 10;

if (isset($_GET['result_type']) && ($_GET['result_type'] == "popular" || $_GET['result_type'] == "recent"))
	$result = $_GET['result_type'];
else
	$result = "mixed";
	
require_once("authenticate.php");

function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
	$connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
	return $connection;
}
  
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
$tweets = $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=".$query."&count=".$count."&result_type=".$result);

$tweets = json_encode($tweets);
if (isset($_GET['callback'])) 
	$tweets =  $_GET['callback'] . "(" . $tweets . ")";

echo $tweets;
?>