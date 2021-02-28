<?php 
//echo "test Response. Successful submission "+ 
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
//echo $contentType; 
if ($contentType === "application/json;charset=UTF-8") {
  //Receive the RAW post data.
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content, true);
	
  //If json_decode failed, the JSON is invalid.
  if(! is_array($decoded)) {
	 echo "There is an  error" ;
  } else {
    // Send error back to user.
	 //echo(sizeof($decoded));
	 var_dump($decoded);
	 
  }
}

 
?>     