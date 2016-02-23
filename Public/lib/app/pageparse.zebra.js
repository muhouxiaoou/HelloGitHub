
var PageParse = function(url){

		var _self = this; 
		this.url = url;
		this.content="";
		this.noscriptContent="";
		this.scripts=[];
		this.css=[]
		this.images = [];

 	
		this.executeScript = function(){
			for(var i=0;i<_self.scripts.length;i++){
				  eval(_self.scripts[i]);
				}
		}
	 
	
	 	
	    this.start = function(){
						
				$.ajax({
					   url: _self.url,
					   success: function(msg){
							_self.content = msg;
							_self.noscriptContent = $.removeScript(msg);
							//_self.noscriptContent = $.removeStyle(_self.noscriptContent);
							_self.scripts = $.getScripText(msg);
							_self.css = $.getStyleText(msg);					
						 
							//console.table(_self.css)
							var dom =   document.createElement("div"); 
								$(dom).html(_self.noscriptContent)
							 
								$(dom).find("img").each(function(index, element) {
									_self.images.push($(this).attr("src"));
								});
						 
								
							 _self.dispatchEvent( { type: PageParse.Complete, data: _self } );
					   }
					});
		}
 
	}
 
PageParse.Complete = "PageParse.complete";
EventDispatcher.prototype.apply(PageParse.prototype );	
 
 