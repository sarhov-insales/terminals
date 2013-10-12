jQuery(document).ready(function($) {

	// open the search
	var sBox = $('#search-box');
	var opensBox = $('#open-search');
	sBox.hide();
	opensBox.click(function() {
		sBox.slideToggle('fast');
		return false;
	});	
	
});