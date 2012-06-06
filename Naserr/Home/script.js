$(function(){
	var lmenu = $("div.lmenu");
	var rmenu = $("div.rmenu");
	var top_menu = $("div.top_menu");
	var imgr = $("div.lmenu img");

	var slider = $("div.rmenu div.slider");
	var li_glass = $("div.thumbs li.glass");
	var li_boy = $("div.thumbs li.boy");
	var li_grass = $("div.thumbs li.grass");
	var li_umberella = $("div.thumbs li.umberella");
	var li_alone = $("div.thumbs li.alone");

	var logo = $("div.lmenu div.logo");



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
		logo.css({
			'display':'none',
		});

	});

	li_glass.click(function(){
		slider.css({
			'background':'url(images/2.jpg)',
		});
	});
	li_boy.click(function(){
		slider.css({
			'background':'url(images/3.jpg)',
		});
	});
	li_grass.click(function(){
		slider.css({
			'background':'url(images/4.jpg)',
		});
	});
	li_umberella.click(function(){
		slider.css({
			'background':'url(images/1.jpg)',
		});
	});
	li_alone.click(function(){
		slider.css({
			'background':'url(images/5.jpg)',
		});
	});

});