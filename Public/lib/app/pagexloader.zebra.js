
var PagexLoader = function(url,filelist){
	    this.isDebug = isDebug==null?false:true;
		this.readImage = readImage==null?true:false;
		this.currentIndex = 0;
		this.count = 0;
		this.id = "PagexLoader_"+$.uuid();
		this.url = url;
		this.content="";
		this.noscriptContent="";
		this.scripts=[];
		this.css=[]
		this.readImage=true;
		this.process = 0;
		
	 
			
		var _self = this;
		
		
		this.executeScript = function(){
			for(var i=0;i<_self.scripts.length;i++){
				  eval(_self.scripts[i]);
				}
		}
		

		$.ajax({
			   url: _self.url,
			   error:function(msg){
				   console.log(msg)
				   },
			   success: function(msg){
					_self.content = msg;
					_self.noscriptContent = $.removeScript(msg);
					_self.noscriptContent = $.removeStyle(msg);
					_self.scripts = $.getScripText(msg);
					
					
					
					_self.dispatchEvent( { type: PagexLoader.DocumentLoad, data: _self } );
					   
					if(!_self.readImage){
						  _self.dispatchEvent( { type: PagexLoader.Complete, data: _self } );
						}
					
					
					
			   }
			});
 

  
	    
	}

PagexLoader.DocumentLoad = "PagexLoader.documentLoad";
PagexLoader.ImageLoading = "PagexLoader.imageloading";
PagexLoader.Complete = "PagexLoader.complete";
EventDispatcher.prototype.apply( PagexLoader.prototype );	
 
 