$(document.body).scroll(function(){
if(document.body.scrollTop()>=50)
	navbar.className="navbar"+" navbar-fixed-top"+" opaque-navbar"+" navbar-default";
else
	navbar.className="navbar"+" navbar-fixed-top"+" opaque-navbar";
});

