$(function(){

	var cover = $("div.cover");
	var pages = $("div.pages");
	var lola = $("div.lola");

	cover.click(function(){
		cover.css({
			'-webkit-transform':'rotateY(540deg) translateX(-540px)',

		});

//PAPER

		//lola.css({
		//	'background-image':'url(images/vasati.png)',

		//});

	});

	cover.dblclick(function(){
		cover.css({
			'-webkit-transform':'rotateY(0deg) ',
		});
		
	});

		
});		