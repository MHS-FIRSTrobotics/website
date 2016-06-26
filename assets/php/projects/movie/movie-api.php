<?php
$request = file_get_contents('php://input');
if (!$request) {
	die();
}

$parsed = json_decode($request);
$api_key = 'PFVWe8pmzShvvHnduXarYRiYymGBF9OnIr5jeOg0W4QWRu/yJKT0WFXpyh88pAB2EZ+QYoLFyRMl7H8dMoHgSA==';
//echo $api_key;

$ch = curl_init('https://ussouthcentral.services.azureml.net/workspaces/871ae6db0cd8494b8d519208b4f94f0c/services/33336e2a93df47ac939b8426f8a64693/execute?api-version=2.0');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($request),
    'Authorization: Bearer ' . $api_key,
    'Accept: application/json'
));
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
echo $response;
?>