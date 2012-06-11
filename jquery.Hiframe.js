/*!
 * jQuery Hiframe Plugin
 * http://labs.meqia.fr/plugins-jquery/hiframe/
 *
 * Copyright 2012, Jonathan Sahm
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://labs.meqia.fr/license
 *
 * @author Jonathan Sahm
 * @version 1.0
 * @requires jQuery v1.2.x or later
 *
 * Date: 2012-03-29
 */
(function($){
	$.fn.Hiframe = function(options){
		options = $.extend({
			'scrolling'	: false,
			'bindCss'	: true
		}, options);		
		function resize($this){
			$($this).css({
				'height'		: $($this).contents().find('body').outerHeight(true)
			});
		}
		return this.each(function(){
			var $this = this;
			if(!options.scrolling){
				$($this).css({
					'overflow-x'	: 'hidden',
					'overflow-y'	: 'hidden',				
					'overflow'		: 'hidden'
				});
				$($this).attr({
					'scrolling'		: 'no'
				});	
			}
			$($this).bind('load resize', function(){
				resize($this);
				if(options.bindCss && jQuery.isFunction(jQuery.fn.bindCss)){
					$($this).contents().find('body').bindCss('outerHeight(true)', function(){
						resize($this);
					});
				}
			});
		});	
	};	
})(jQuery);