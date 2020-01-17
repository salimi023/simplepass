<?php
$tokenType = $_POST['type'];
$tokenLength = $_POST['length'];
$tokenArr = [];

$letters = 'aAbBcCdDeEfFgGhHiIjJkKLmMnNoOpqQPrRsStTuUvVzZxXyY';
$numbers = '1234567890';

switch ($tokenType) {
    
    case 'letters':
        $string = $letters;
    break;

    case 'numbers':
        $string = $numbers;
    break;

    case 'mix':
        $string = $letters . $numbers;        
    break;
}

$stringLength = strlen($string);

for ($i = 1; $i <= $tokenLength; $i++) {
    
    if($tokenType === 'mix') {
        $charPos = $i % 2 == 0 ? rand($stringLength - 10, $stringLength) : rand(1, $stringLength);
    }
    else {
        $charPos = rand(1, $stringLength);
    }

    $tokenChar = substr($string, ($charPos - 1), 1);
    array_push($tokenArr, $tokenChar);
}

$token = implode('', $tokenArr);
echo $token;
