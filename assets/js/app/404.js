function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var random=getRandomInt(0, 4);
var errorHeader = document.getElementById('error-header');
try {
    if (errorHeader != null) {
        switch (random) {
            case 0:
                errorHeader.innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
                document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/useless.jpg\" id=\"error-image\"/><br><cite>-xkcd</cite></blockquote>";
                break;

            case 1:
                errorHeader.innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
                document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/egg_drop_failure.png\" id=\"error-image\"><br></img><cite>-xkcd</cite></blockquote>";
                break;

            case 2:
                errorHeader.innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
                document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/reset.png\" id=\"error-image\"/><br><cite>-xkcd</cite></blockquote>";
                break;

            case 3:
                errorHeader.innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
                document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/success.png\" id=\"error-image\"/><br /><cite>-xkcd</cite></blockquote>";
                break;

            case 4:
                errorHeader.innerHTML = "<h1 class=\"error\"><strong>404</strong>. That's an error</h1>";
                document.getElementById('error-image').innerHTML = "<blockquote><img src=\"http://imgs.xkcd.com/comics/installing.png\" id=\"error-image\"><br /></img><cite>-xkcd</cite></blockquote>";
                break;
        }
    }
} catch (ex) {
    console.log(ex);
}