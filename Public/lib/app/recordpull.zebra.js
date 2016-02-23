// JavaScript Document


var RecordPull = function(data,pageItemCount){
	     this.isTrigger=false;
		 this.pageIndex = 0;
 		 this.record=data;
		 this.pageItemCount=5;
		 this.offsetY=50;
		 if(pageItemCount!=null){this.pageItemCount=pageItemCount;}
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
					 this.dispatchEvent( { type: RecordPull.PageEnd, data:null } );
				     //拉到底添加数据
					 this.parseData();
					 
				 } 
			  } 
			
		 this.parseData=function(){
			      if(_self.record.length>0){
					  var value=[];
					  var len = this.pageItemCount<=_self.record.length? this.pageItemCount:_self.record.length;
					  for(var i=0;i<len;i++){
						  value.push(_self.record.shift());
					  }
					  _self.dispatchEvent( { type: RecordPull.ParseData, data:value } );
					  
					  if(_self.pageIndex>0){
						    $(window).scrollTop($(window).scrollTop()+_self.offsetY);
						  }
					  
					  _self.pageIndex++;
					  
				  }
				  setTimeout(function(){_self.isTrigger=false},500);
			}
			  
 
		 
		this.stop=function(){
			  _isStop = true;
			}
		
		this.start = function(){
			   _isStop = false;
			}
		 
	  }
 
RecordPull.ParseData="RecordPull.parseData";
RecordPull.PageEnd="RecordPull.pageend";
 
EventDispatcher.prototype.apply( RecordPull.prototype );	 	  

