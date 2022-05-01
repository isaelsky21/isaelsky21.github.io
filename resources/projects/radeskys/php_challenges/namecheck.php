<?php
	
	$names = array("Jose", "Juan", "Mario");

	$name = $_POST['name'];

	$knows = false;

	foreach ($names as $value) {
		if ($name == $value) {
			echo "Hello, ".$name."<br>";
			$knows = true;
		}
	}

	if ($knows == false) {
		echo "I don't know ".$name."<br>";
	}
?>

<form method="post">
	<br>
	Name Comparing
	<br>
	<input name="name" type="text">
	<br>
	<input type="submit" value="Check">
</form>