

var Screen = function(){
	    this.ori = 0;  // 0 竖屏 1 横屏	
		var _self = this; 	 

		var SHAKE_THRESHOLD = 3000;

			if(navigator.userAgent.indexOf('iPhone')>-1)
			{
				  SHAKE_THRESHOLD =2000;
			}
			else
			{
				if(navigator.userAgent.indexOf('QQ')>-1)
				{
					  SHAKE_THRESHOLD =1000;
				}
				else
				{
					  SHAKE_THRESHOLD =2000;
				}
			}
	 
    
    
    
                 
                 
         var last_update = 0;
         var x = y = z = last_x = last_y = last_z = 0;
		 var _isShark=true;
		 
		 
		 var Motion_last_update = 0;
         var Motion_x = Motion_y = Motion_z = Motion_last_x = Motion_last_y = Motion_last_z = 0;
		 var _isMotion=true;
 
		 setInterval(function(){
			   if ((window.orientation == 90 || window.orientation == -90) && _self.ori==0  ) {
						_self.ori = 1;	
						_self.dispatchEvent( { type: Screen.ChangeOR, data: _self.ori } );		
					}
					else if ( (window.orientation == 0 || window.orientation == 180)&& _self.ori==1 ) { 
						_self.ori = 0;	
						_self.dispatchEvent( { type: Screen.ChangeOR, data: _self.ori } );					
					} 
		      
			 },300);
		 
		 setTimeout(function(){
                         if(window.orientation == 90 || window.orientation == -90){
                             _self.ori = 1;	
                         }else if(window.orientation == 0 || window.orientation == 180){
                             _self.ori = 0;	
                         }
                         _self.dispatchEvent( { type: Screen.ChangeOR, data:  _self.ori } );
			 },1);
		 
		 this.toggle = function(){
			  if(_self.ori==0){
				    _self.ori = 1;	
				  }else{
					_self.ori = 0;	  
				  }
			       _self.dispatchEvent( { type: Screen.ChangeOR, data: _self.ori } );			
			 
		 }
		 
		/************************************************************/
		this.startShark=function(){
				if (window.DeviceMotionEvent) {
					window.addEventListener('devicemotion', _sharkHandler, false);
				} else {
					alert('not support mobile event');
				}
			}
		this.pauseShark=function(){
			  _isShark = !_isShark;
			}
			
		
		this.stateShark=function(state){
			  _isShark = state;
			}
		
		this.stopShark=function(){
				window.removeEventListener('devicemotion', _sharkHandler);
			}
		
        function _sharkHandler(eventData) {
			if(_isShark){
				var acceleration = eventData.accelerationIncludingGravity;
				var curTime = new Date().getTime();
				if ((curTime - last_update) > 100) {
					var diffTime = curTime - last_update;
					last_update = curTime;
					x = acceleration.x;
					y = acceleration.y;
					z = acceleration.z;
					var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
					if (speed > SHAKE_THRESHOLD) {
						 _self.dispatchEvent( { type: Screen.Shark, data:true } );			
					}
					last_x = x;
					last_y = y;
					last_z = z;
				}
			}
        }
		/************************************************************/ 
		 
		this.startMotion=function(eventData){
				if (window.DeviceMotionEvent) {
					window.addEventListener('devicemotion', _motionHandler, false);
				} else {
					alert('not support mobile event');
				}
			} 
			
		
		this.pauseMotion=function(){
			  _isMotion = !_isMotion;
			}
			
		this.stateMotion=function(state){
			  _isShark = state;
			}
			
		this.stopMotion=function(){
				window.removeEventListener('devicemotion', _motionHandler);
			}	
		 
		function _motionHandler(eventData) {
			 if(_isMotion){
				var acceleration = eventData.accelerationIncludingGravity;
				var curTime = new Date().getTime();
				if ((curTime - Motion_last_update) > 100) {
					var diffTime = curTime - Motion_last_update;
					Motion_last_update = curTime;
					Motion_x = acceleration.x;
					Motion_y = acceleration.y;
					Motion_z = acceleration.z;
					_self.dispatchEvent( { type: Screen.Motion, data:{x:Motion_x,y:Motion_y,z:Motion_z} } );		
				}
			} 
        } 
		 
	  } 

Screen.ChangeOR="screen.orientationchange";
Screen.Shark="screen.shark";
Screen.Motion="screen.motion";
EventDispatcher.prototype.apply( Screen.prototype );	 	  



