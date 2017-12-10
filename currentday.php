<?
header('Access-Control-Allow-Origin: *');
echo json_encode(['currentDay' => (int)date("d")]);