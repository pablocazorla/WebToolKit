(function($){
	$.fn.tabs = function(custom){		
		//Settings
		var setting = $.extend({
			content : '.tabsContent',
			initial : 0
		}, custom || {});		
			
		return this.each(function(){
			var $tabs = $(this).find('> li'),
				$contents = $(setting.content).find('> li'),
				current = setting.initial;
			
				
				$tabs.add($contents).removeClass('current');
				$tabs.eq(current).addClass('current');
				$contents.eq(current).addClass('current');
				
			
			$tabs.each(function(index){
				$(this).click(function(){
					if(index != current){
						$tabs.eq(current).removeClass('current');
						$contents.eq(current).removeClass('current');
						current = index;
						$tabs.eq(current).addClass('current');
						$contents.eq(current).addClass('current');
					}
				});
			});
		});
	};
})(jQuery);