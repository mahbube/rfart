$(function(){
	var lmenu = $("div.lmenu");
	var rmenu = $("div.rmenu");
	var top_menu = $("div.top_menu");
	var imgr = $("div.lmenu img");
	var th = $("div.thumbs");

	imgr.click(function(){
		lmenu.css({
			'width':'20px',
		});
		rmenu.css({
			'width':'925px',
		});
		top_menu.css({
			'margin-left':'83px',
		});
		imgr.css({
			'margin':'270px 0px 0px -4px',
		});

	});
});