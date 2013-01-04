/* Slider */
(function($){
	$.fn.slider = function(custom){		
		//Settings
		var setting = $.extend({
			min : 0,
			max : 100,
			observable : undefined,
			offset : -5,
			units : 'px'
		}, custom || {});	
				
		return this.each(function(){
			var $this = $(this),
				$pin = $('<span class="pin"></span>'),
				$rangeBar = $('<span class="range"></span>'),
				$viewer = $('<span class="viewer"></span>'),
				$viewerInput = $('<input type="text" value="" class="viewer-input"/>'),
				
				width = $this.width(),
				range = setting.max - setting.min,
				
				editing = false,
				dragging = false,
				
				rangeBarDraw = function(){},
				getValue = function(x){
					var val =  ((x - setting.offset)*range/width)+setting.min;
					return Math.round(val)+setting.units;
				},
				getPosition = function(value){
					value = parseInt(value);
					if(value<setting.min) value = setting.min;
					if(value>setting.max) value = setting.max;
					var posX = Math.round((value - setting.min)*width/range);
					return posX;
				},
				
				updateSlider = function(v){
					if(!editing){
						if(v != undefined){
							$pin.css('left',getPosition(v) + setting.offset +'px');
							$rangeBar.width(getPosition(v)+'px')
							$viewer.html(v);
						}else{
							$pin.css('left',setting.offset +'px');
							$rangeBar.width('0px');
							$viewer.html('')
						}
					}
				};
				
			
			
			updateSlider(setting.observable.val());
			setting.observable.onChange(updateSlider);
			
				
			$this.append($pin).append($rangeBar).append($viewer).append($viewerInput);
			
			
			//Events
			var dragDif = 0;
			$pin.mousedown(function (e) {					
                dragDif = e.pageX - $pin.offset().left;
                editing = true;
				dragging = true;
                return false;
            });
			$('html,body').mousemove(function (e) {
				if(dragging){
					var posX = Math.round(e.pageX - $this.offset().left - dragDif);
					if (posX < 0) posX = 0;
					if (posX > width+setting.offset) posX = width;
					$pin.css({
                        'left': posX+setting.offset + 'px'
                    });
                    var obsVal = getValue(posX+setting.offset);
                    $rangeBar.width(posX + 'px');
					$viewer.html(obsVal);
					setting.observable.val(obsVal);
					return false;
				}
			}).mouseup(function () {
                if (dragging) {
                	editing = false;
                	dragging = false;
                  	return false;
                }
            });
			var valueInput = 0;
			$viewer.click(function(){
				$viewerInput.show().val($viewer.html()).focus();
			});
			$viewerInput.change(function(){
				valueInput = parseInt($viewerInput.val());
				if(valueInput<setting.min) valueInput=setting.min;
				if(valueInput>setting.min) valueInput=setting.max;
				setting.observable.val(value+ 'px');
			}).blur(function(){
				valueInput = parseInt($viewerInput.val());
				if(valueInput<setting.min) valueInput=setting.min;
				if(valueInput>setting.min) valueInput=setting.max;
				$viewer.html(valueInput+ 'px');
				$viewerInput.hide()
			})
		});
	};
})(jQuery);

