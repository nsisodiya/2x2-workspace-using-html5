(function ($) {
	// VERTICALLY ALIGN FUNCTION
	$.fn.vAlign = function() {
		return this.each(function(i){
		var ah = $(this).height();
		var ph = $(this).parent().height();
		var mh = Math.ceil((ph-ah) * 0.4 );
		//console.log(ah + " "+ ph + " "  + mh);
		$(this).css('margin-top', mh);
		});
	};
})(jQuery);
