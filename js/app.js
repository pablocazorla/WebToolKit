$('document').ready(function(){
	//Main Tabs
	$('#mainTabs').tabs({content : '#mainTabsContent'});
	//Style Tabs
	$('#styleTabs').tabs({content : '#styleTabsContent'});
	
	
	
	$('#width-ctrl').slider({
		max : 400,
		observable : styler.style.width
	});
	$('#height-ctrl').slider({
		max : 400,
		observable : styler.style.height
	});
	

	
	
	
	
	
	
});

