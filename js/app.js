var Observable = function(val){
	this.val = val;
	var listener = [];	
	this.value = function(val){
		if(val){
			this.val = val;
			var l = listener.length;
			for(var i=0;i<l;i++){
				listener[i](this.val);
			}
			return this;
		}else{
			return this.val;
		}
	}	
	this.bind = function(handler){
		listener.push(handler);
		return this;
	}
}

var a = new Observable('faa');
var b = new Observable('Boo');

a.bind(function(val){
	console.log('Es el '+val);
});
a.bind(function(val){
	console.log('Y este el de '+val);
}).value('Otra');

b.value('Gaseosa');

setTimeout(function(){
	a.value('Planisferio');
},5000);




