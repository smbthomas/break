<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Breakout</title>
<link rel="stylesheet" type="text/css" href="main.css">
<link rel="shortcut icon" href="favicon.ico">
</head>

<body>
<div id="wrapper">
<div id="grid-container">
<div id="grid-header">
<h1>Breakout</h1>
<p>The game of 'Breakout' using the <a href="https://p5js.org">p5<sub>*</sub>js</a> JavaScript library. Still under development.</p>
</div><!-- grid-header -->
<div id="grid-content">
</div>
<div id="grid-info">
<div id="x">x = 0</div>
<div id="y">y = 0</div>
<div id="xs">xs = 0</div>
<div id="ys">ys = 0</div>
<div id="xpos">xpos = 0</div>
<div id="ypos">ypos = 0</div>
</div>
<div id="grid-footer">
<?php
$month_year =  date('F, Y');
$year = date('Y');
echo "Copyright &copy; Stephen Martin Beynon Thomas " . $month_year  . ".\n";
?>
</div>
</div>
</div>
<script src="js/p5.min.js"></script>
<script src="js/brick.js"></script>
<script src="js/wall.js"></script>
<script src="js/bat.js"></script>
<script src="js/ball.js"></script>
<script src="js/break.js"></script>
</body>
<!--
 Breakout game using JavaScript classes
 Copyright (c) Stephen Martin Beynon Thomas, May 2023
-->
</html>