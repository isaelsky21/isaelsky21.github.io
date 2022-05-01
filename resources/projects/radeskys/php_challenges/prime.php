<?php
	
	$prime = $_GET['number'];
	$quotientCount = 0;
	
	if(is_numeric($prime) && $prime > 0 && $prime == round($prime, 0)){
		for ($n = 2; $n < $prime; $n++) {
			if ($prime % $n == 0) {
				$quotientCount++;
			}
		}

		if ($quotientCount > 1) {
			echo "The number ".$_GET['number']." is not prime.";
		} else {
			echo "The number ".$_GET['number']." is prime.";
		}
	} else {
		echo "Please enter a positive whole number.";
	}
?>

<form>
	<br>
	Prime Number Tester
	<br>
	<input name="number" type="number">
	<br>
	<input type="submit" value="Check">
</form>