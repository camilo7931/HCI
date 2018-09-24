<?php

	


	function string($v)
	{
	$string = "";
		if((int)$v > 9){
			if ((int)$v == 10) {
				$string = $string.'A';
			}
			elseif ((int)$v == 11) {
				$string = $string.'B';
			}
			elseif ((int)$v == 12) {
				$string = $string.'C';
			}
			elseif ((int)$v == 13) {
				$string = $string.'D';
			}
			elseif ((int)$v == 14) {
				$string = $string.'E';
			}
			elseif ((int)$v == 15) {
				$string = $string.'F';
			}
		}
		else{
			$string = strval(0).strval($v);
		}
	return $string;
	}
	$auxV= "";
	$arr = array(245, 255, 1);
	$i=0;
	foreach ($arr as &$value) {
		if ($value != 0 and $value != 255) {
			#echo "num" .(int)$value. "<br/ >";
			$aux = (int)$value%16;
			#echo "num" . $aux. "<br/ >";
			#(int)$aux = (int)$aux*15;
			#echo "num" .(int)$aux. "<br/ >";
			#(int)$aux = 255-(int)$aux;
			$aux2 = (int)$aux*15;
			$aux2 = 255-(int)$aux2;
			$auxV = $auxV.strval(string($aux)).strval(string($aux2));
			$i = $i + 1;
		}
		elseif ($value <= 0) {
			$auxV = $auxV.strval("00");
		}
		elseif($value >= 255){
			$auxV = $auxV.strval("FF");
		}
		#echo "<br/ >";
	}

	echo "R, G, B = " . strval($auxV);
?>