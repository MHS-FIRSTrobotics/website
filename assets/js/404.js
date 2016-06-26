function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// window.onload = function() {
  //     window.alert(getRandomInt(0, 4));
    //} -->
var random=getRandomInt(0, 4);
//window.alert(random);
switch (random) {
	case 0: 
	document.getElementById('error-header').innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
	document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/useless.jpg\" id=\"error-image\"></img><br><cite>-xkcd</cite></blockquote>";
	break;
 
	case 1:
	document.getElementById('error-header').innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
	document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/egg_drop_failure.png\" id=\"error-image\"><br></img><cite>-xkcd</cite></blockquote>";
	break;

	case 2: 
	document.getElementById('error-header').innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
	document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/reset.png\" id=\"error-image\"></img><br><cite>-xkcd</cite></blockquote>";
	break;
 
	case 3: 
	document.getElementById('error-header').innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
	document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/success.png\" id=\"error-image\"></img><br /><cite>-xkcd</cite></blockquote>";
	break;
 
	case 4: 
	document.getElementById('error-header').innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
	document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/installing.png\" id=\"error-image\"><br /></img><cite>-xkcd</cite></blockquote>";
	break;
}