<?php
	$url = $_POST['url'];
	    $buttonUrl = sprintf('https://plusone.google.com/u/0/_/+1/fastbutton?url=%s', urlencode($url));
	$htmlData  = file_get_contents($buttonUrl);
	
	@preg_match_all('#{c: (.*?),#si', $htmlData, $matches);
	    $ret = isset($matches[1][0]) && strlen($matches[1][0]) > 0 ? trim($matches[1][0]) : 0;
	    if(0 != $ret) {
	        $ret = str_replace('.0', '', $ret);
	    }
	echo intval($ret);
?>
