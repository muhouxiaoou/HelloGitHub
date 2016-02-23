
var PageLoader = function(url,readImage,isDebug){
	    this.isDebug = isDebug==null?false:true;
		this.readImage = readImage==null?true:false;
		this.currentIndex = 0;
		this.count = 0;
		this.id = "pageloader_"+$.uuid();
		this.url = url;
		this.content="";
		this.noscriptContent="";
		this.scripts=[];
		this.readImage=true;
		this.process = 0;
		
	 
			
		var _self = this;
		
		
		this.executeScript = function(){
			for(var i=0;i<_self.scripts.length;i++){
				  //console.log(_self.scripts[i]);
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
								
								_self.scripts = $.getScriptext(msg)
								
								
							   /* if(_self.ready!=null){
									  _self.ready();
								   }*/
								
								_self.dispatchEvent( { type: PageLoader.DocumentLoad, data: _self } );
								   
								if(!_self.readImage){
									  _self.dispatchEvent( { type: PageLoader.Complete, data: _self } );
									}
								 
								if(_self.readImage){    
										//$('body').append('<div id="'+_self.id+'" style="display:none"></div>'); 
										
										var dom =   document.createElement("div"); 
											$(dom).html(_self.noscriptContent)
 
										
										//$("#"+_self.id).html( _self.content );
										$("#"+_self.id).html( _self.noscriptContent );
										var imgs = $(dom).find("img");
										_self.count = imgs.length;
								 
										if(_self.count==0){
												 _self.dispatchEvent( { type: PageLoader.ImageLoading, data:_self });
												 _self.dispatchEvent( { type: PageLoader.Complete, data: _self } );
											}else{					
												 _self.dispatchEvent( { type: PageLoader.ImageLoading, data:_self });
												 imgs.each(function(){
												   $(this).imagesLoaded(function(){
														  _self.currentIndex ++;
														  _self.dispatchEvent( { type: PageLoader.ImageLoading, data: _self } );
														  
														  
														  _self.process = parseInt(_self.currentIndex/_self.count*100)
														  if(_self.isDebug){
															  console.log(_self.currentIndex+"---"+_self.count)
															  }
														  if(_self.currentIndex==_self.count){
																 $("#"+_self.id).remove(); 
																 _self.dispatchEvent( { type: PageLoader.ImageLoading, data:_self });
																 setTimeout(function(){ 
																	 _self.dispatchEvent( { type: PageLoader.Complete, data: _self } );
																 },1000);
															  }
															
													})
												}) 
									}
									
								}
								
						   }
						});
			 
		
  
	    
	}

PageLoader.DocumentLoad = "pageloader.documentLoad";
PageLoader.ImageLoading = "pageloader.imageloading";
PageLoader.Complete = "pageloader.complete";
EventDispatcher.prototype.apply( PageLoader.prototype );	
 
 