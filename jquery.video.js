/**
* @license jQuery Video v1.0.0.0
* Copyright 2013 Kristopher Alexander
* Released under the MIT license
**/
(function($){
	$.video = {
		modules : [],
	};

	$.fn.video = function(options) {
		var elem = $(this);
		$.each($.video.modules, function(index, mod) {
			mod(elem, options);
		});
	}

	$.video.modules.push(function(elem, options) {
		return elem.append(getHtml(
			options.videos || options,
			options.preload || true,
			options.controls || getDefaultControls
		));		
	});

	function getHtml(width, height, video, preload, controls) {
		var html = '<div class="jquery-video container">';
		
		if ($.isFunction(controls)) { html += controls(); }

		html += '<video class="jquery-video player"';

		if (controls == 'browser') { html += ' controls'; }

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

	function getDefaultControls() {
		var controlHtml = 	'<div class="video-controls">';
		controlHtml += 			'<a class="video-play-pause play"></a>';
	    controlHtml += 			'<div class="video-seek">';
	    controlHtml += 				'<div class="video-seek-item thumb"></div>';
	    controlHtml += 				'<div class="video-seek-item timetip"></div>';
	    controlHtml += 				'<div class="video-seek-item track"></div>';
	    controlHtml += 				'<div class="video-seek-item progress"></div>';
	    controlHtml += 			'</div>';
		controlHtml += 		'</div>';
		return controlHtml;
	}
}(jQuery))