<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Breakthrough Test Page</title>
<link rel="stylesheet" type="text/css" href="main.css">
<link rel="shortcut icon" href="favicon.ico">
</head>

<body>
<div id="wrapper">
<div id="grid-container">
<div id="grid-header">
<h1>Breakout</h1>
</div><!-- grid-header -->
<div id="grid-content">
</div>
<div id="grid-footer">
<?php
$month_year =  date('F, Y');
$year = date('Y');
echo "Copyright &copy; Stephen Martin Thomas " . $month_year  . ".\n";
?>
</div>
</div>
</div>
<script src="js/p5.min.js"></script>
<script src="js/brick.js"></script>
<script src="js/wall.js"></script>
<script src="js/ball.js"></script>
<script src="js/bt.js"></script>
</body>
</html>