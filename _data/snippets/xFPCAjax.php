id: 67
name: xFPCAjax
description: 'xFPC Dynamic AJAX call snippet'
category: xFPC
properties: null

-----

/**
 * xFPC
 *
 * Copyright 2012-13 by SCHERP Ontwikkeling <info@scherpontwikkeling.nl>
 *
 * This file is part of xFPC.
 *
 * xFPC is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * xFPC is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * xFPC; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package xFPC
 * @author Patrick Nijkamp <patrick@scherpontwikkeling.nl>
 */

// Generate a random number for this specific request
$id = 'xpfc-'.uniqid();

// Get scriptProperties
$resource = $modx->getOption('resource', $scriptProperties, false);
$url = $modx->getOption('url', $scriptProperties, false);
$showStaticContent = (int) $modx->getOption('showStaticContent', $scriptProperties, 1);

// Register xFPC Ajax function to the <head>
if (!isset($modx->xfpcajax)) {
	$modx->xfpcajax = true;
	$script = '<script type="text/javascript">function xFPCgetXMLHttp(){var e;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){alert("Your browser does not support AJAX!");return false}}}return e}function xFPCMakeRequest(e,t){var n=xFPCgetXMLHttp();n.onreadystatechange=function(){var e=t;if(n.readyState==4){xFPCHandleResponse(n.responseText,e)}};n.open("POST",e,true);n.send(null)}function xFPCHandleResponse(e,t){document.getElementById(t).innerHTML=e}var xFPCObjectContainer={}</script>';
	$modx->regClientStartupHTMLBlock($script);
}

// Make URL if resource if chosen instead of URL
if ($resource != false) {
	$url = $modx->makeUrl((int) $resource);
	$fullUrl = $modx->makeUrl((int) $resource, '', '', 'full');
} else {
	$fullUrl = $url;
}

$staticContent = '';
if ($showStaticContent == 1) {
	// Get the static content for non-javascript browsers
	$staticContent = file_get_contents($fullUrl);
}

// Create the request
if ($url != false) {
	return '<span id="'.$id.'">'.$staticContent.'</span><script type="text/javascript">
		xFPCMakeRequest(\''.$url.'\', \''.$id.'\');
	</script>';
}