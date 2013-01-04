var observable = function(v,prop,el){
	this.v = '';
	var listener = [];	
	this.val = function(v){
		if(v){
			this.v = v;		
			
			var l = listener.length;
			for(var i=0;i<l;i++){
				listener[i](this.v);
			}
			if(v==undefined||v==null)v='';
			el.css(prop,v);
			return this;
		}else{
			return this.v;
		}
	}	
	this.onChange = function(handler){
		listener.push(handler);
		return this;
	}
	this.val(v);
}


