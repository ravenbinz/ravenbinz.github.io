<?php
$type = $_GET['type'];

if ($type == 'crunchyroll') {
    $file = 'crunchyroll.txt';
} else if ($type == 'steam') {
    $file = 'steam.txt';
} else {
    echo 'Invalid type';
    exit;
}

$lines = file($file);

if (count($lines) > 0) {
    $account = array_shift($lines);
    file_put_contents($file, implode("", $lines));
    echo $account;
} else {
    echo 'No accounts available';
}
?>
