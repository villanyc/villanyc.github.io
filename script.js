console.log($('body'))

$("#top").click(fuction (){
	$('html, body').animate({
		scrolltop: $("#bottom").offset().top
	}, 2000);
});