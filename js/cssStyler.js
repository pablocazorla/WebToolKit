var styler = (function(){	
	var s = function(){
		
		var elem = $('#stylerElement');
		
		
		this.style = {
			width : new observable('100px','width',elem),
			height : new observable('100px','height',elem)
		}
		
		
		
		
		
		
		
	}
	return new s();
})();
