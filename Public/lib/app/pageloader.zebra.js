
var PageLoader = function(url,imgArr,readImage){
	    var _self = this;
		var pageparse;
		var _imgArr =imgArr==null?[]:imgArr;
		
		this.readImage = readImage==null?true:false;
		this.currentIndex = 0;
		this.count = 0;
		this.process = 0;
		
		this.url = url;
		this.noscriptContent="";
		this.content="";
		this.css="";
		this.scripts=[];
		this.images=[];
		
		this.executeScript = function(){
			for(var i=0;i<_self.scripts.length;i++){
				  //console.log(_self.scripts[i]);
				  eval(_self.scripts[i]);
				}
			
		}
		
	 
		 this.start=function(){ 
				 
				 
				 pageparse = new PageParse(_self.url);
			     pageparse.addEventListener(PageParse.Complete,function(e){
				  	 	_self.noscriptContent = pageparse.noscriptContent;
						_self.content = pageparse.content;
						_self.scripts = pageparse.scripts;
						_self.css = pageparse.css;
						
						
						for( var i=0;i<_imgArr.length;i++){
									pageparse.images.push(_imgArr[i]);
								}  
						_self.images = pageparse.images;
						
						 if(_self.readImage && pageparse.images.length>0){
								var loader = new PxLoader(); 
									for(i=0; i < pageparse.images.length; i++) {
										var pxImage = new PxLoaderImage( pageparse.images[i]); 
											pxImage.imageNumber = i + 1; 
											loader.add(pxImage); 
									} 
									loader.addProgressListener(function(e) {
										_self.currentIndex = e.completedCount;
										_self.count = e.totalCount;
										_self.process = parseInt(e.completedCount/e.totalCount*100);
										_self.dispatchEvent( { type: PageLoader.ImageLoading, data: _self } );
										if(e.completedCount == e.totalCount){
												  setTimeout(function(){
																_self.dispatchEvent( { type: PageLoader.Complete, data: _self } );
															  },200);
											}
									});
									loader.start();							
							}else{
								_self.process = 100;
								_self.dispatchEvent( { type: PageLoader.ImageLoading, data: _self } );
								_self.dispatchEvent( { type: PageLoader.Complete, data: _self } );
							}
						
			 
				   
				    }) 
				 pageparse.start();
				 
				 
			 }
	 
	 
			 
		
  
	    
	}

PageLoader.DocumentLoad = "pageloader.documentLoad";
PageLoader.ImageLoading = "pageloader.imageloading";
PageLoader.Complete = "pageloader.complete";
EventDispatcher.prototype.apply( PageLoader.prototype );	
 
 