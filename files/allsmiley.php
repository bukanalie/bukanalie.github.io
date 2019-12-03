<?php

set_time_limit (0);
ob_end_clean();
ob_start();
echo "START  " . date("Y-m-d H:i:s") . "<br/>";
ob_flush();
flush();		
		

$url = "http://www.allsmileys.com/";
$dom_xpath = "";
$dom = "";

function _loadHTML( $url ){
	$html = file_get_contents($url); 
	$dom = new DOMDocument();
	$dom->preserveWhiteSpace = false;
	libxml_use_internal_errors(TRUE); //disable libxml errors
	$dom->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'));
	libxml_clear_errors(); //remove errors for yucky html
	$dom_xpath = new DOMXPath($dom);
	return $dom_xpath;
}


	
	function _getRowsPage($dom_xpath,$results){
		$imgs = $dom_xpath->query('//div[@class="thumbnail"]/img');
		foreach ($imgs as $img) {
			$src = $dom_xpath->query('@src',$img);
			$results[] = $src->item(0)->nodeValue;
		}
		
		return $results;
	}

	$main_page = _loadHTML ( $url );
	
	$links = $main_page->query('//div[@class="thumbnail_div"]');
	
	
	
	$IMAGES = array();
	foreach($links as $k => $kotak){
		$RESULTS = array();
		$pageno 	= 1;
	
		//$folder = $dom_xpath->query('div[@class="msg_info_bar"]',$kotak);
		//$folder = $folder->item(0)->nodeValue;
		
		$url = $main_page->query('div[@class="msg_info_bar"]/a/@href',$kotak);
		$url = $url->item(0)->nodeValue;
		
		echo date("Y-m-d H:i:s") ." URL ". $url ."<br>";
		ob_flush();
	    flush();
			
		$folder = explode("/",$url);
		$folder = str_replace(".php","", $folder[count($folder)-1] );
		if( isset($IMAGES[$folder]) ) continue;
			
		$dom_xpath 	= _loadHTML ( $url );
		$RESULTS 	= _getRowsPage($dom_xpath,$RESULTS);  //page 1
		$next = $dom_xpath->query("//a[@class='link_header' and text()='Next']");
		
		while ( $next->length > 0 ){
			$pageno ++;
			
			$urlpage = $url . "?page=". $pageno;
			
			echo date("Y-m-d H:i:s") ." URL ". $urlpage ."<br>";
			ob_flush();
			flush();
			
			$dom_xpath 	= _loadHTML ( $urlpage );
			$RESULTS 	= _getRowsPage($dom_xpath,$RESULTS);
			$next = $dom_xpath->query("//a[@class='link_header' and text()='Next']");
			
		}
		
		$IMAGES[$folder] = $RESULTS;
		
		
	}
	
	foreach($IMAGES as $folder => $imgs){
		$_path_folder =  str_replace("\\", "/", realpath(dirname(__FILE__))  ."/allsmileys/".$folder );
		@mkdir($_path_folder,0755,true);
		foreach($imgs as $i => $img){
			$fname = explode("/",$img);
			$fname = $fname[count($fname)-1];
			$filepath = $_path_folder . "/". $fname; 
			file_put_contents($filepath, fopen($img, 'r'));
		}
	}
	
	
	
	echo "END ". date("Y-m-d H:i:s") .  "<br>";
	ob_flush();
	flush();
			

?>