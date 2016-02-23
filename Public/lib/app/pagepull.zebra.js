
var PagePull = function(url){
	     this.isTrigger=false;
		 this.pageIndex = 0;
	 	 this.url = url;
		 this.offsetY=50;
		 var _self= this;
		 var _isStop = false;
		
		 $(window).scroll(function(){
			     if(!_isStop){
			 		_self.onScroll();
				 }
			 });
		 
		 
		 this.onScroll=function(){
				 var winHeight = window.innerHeight ? window.innerHeight : $(window).height(), // iphone fix
					 closeToBottom = ($(window).scrollTop() + winHeight >= $(document).height());
				 if (closeToBottom && !this.isTrigger) {
					 this.isTrigger = true;					 
					 this.dispatchEvent( { type: PagePull.PageEnd, data:null } );
				     //拉到底添加数据
					 this.loadData();	 
				 } 
			  } 
			  
		 this.loadData=function(){
			      var hasParam = _self.url.indexOf("?")>0;
				  var _url ="";
				  if(hasParam){
					  _url =_self.url+"&page="+_self.pageIndex;
					  }else{
					  _url =_self.url+"?page="+_self.pageIndex;
					  }
				  
		          $.ajax({
						 type: "GET",			
						 url: _url,			
						 dataType: "json",
						 success: function(record){		
									  _self.dispatchEvent( { type: PagePull.AjaxData, data:record } );
									  if(_self.pageIndex>0){
										 $(window).scrollTop($(window).scrollTop()+_self.offsetY);
									    }
									  _self.pageIndex++;
									  setTimeout(function(){_self.isTrigger=false},500);
								  }			
					 }); 
		      }
		 
		this.stop=function(){
			  _isStop = true;
			}
		
		this.start = function(){
			   _isStop = false;
			}
		 
	  }
 
PagePull.AjaxData="pagepull.ajaxData";
PagePull.PageEnd="pagepull.pageend";
 
EventDispatcher.prototype.apply( PagePull.prototype );	 	  

