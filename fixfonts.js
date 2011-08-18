$(function(){

	$("body").css("fontSize", $(window).width() * 0.01 );
	
	$(window).resize(function(){
		$("body").css("fontSize", $(window).width() * 0.01 );
	});
});
