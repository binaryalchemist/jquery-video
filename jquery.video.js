/**
* @license jQuery Video v1.0.0.0
* Copyright 2013 Kristopher Alexander
* Released under the MIT license
**/
(function($){
	$.fn.video = function(options) {
		return $(this).append(getHtml(
			options.videos || options,
			options.preload || true,
			options.controls || 'html'
		));
	}

	function getHtml(width, height, video, preload, controls) {
		var html = '<div class="jquery-video container">';

		if (controls == 'minskin') { html += getStandardControlHtml();	}

		html += '<video class="jquery-video player"';

		if (controls == 'html') { html += ' controls'; }

		html += '>';

		if ($.isArray(video)) {
			$.each(videos, function(index, value){
				html += '<source src="' + value.src + '" type="' + value.type + '" />';
			});
		} else if ($.isPlainObject(video)) { 
			html += '<source src="' + video.src + '" type="' + video.type + '" />'; 
		} else { html += '<source src="' + video + '" />'; }

		html += '</video></div>';

		return html;
	}

	function getStandardControlHtml() {
		var controlHtml = '<div class="video-controls">';
		controlHtml += '<a class="video-play-pause"></a>';
	    controlHtml += '<div class="video-seek">';
	    controlHtml += '<div class="video-timer">00:00</div>';
		controlHtml += '</div>';
		return controlHtml;
	}
}(jQuery))