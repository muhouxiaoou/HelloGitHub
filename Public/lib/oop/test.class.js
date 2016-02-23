// JavaScript Document

 

var TestClass = function(){
	     this.name = "TestClass";  // 实例变量
	 	 this.f(); 
	  }

TestClass.prototype = {
		  constructor: TestClass, 
		  f:function(){alert('f')},
		  start:function () {
		           this.dispatchEvent( { type: 'start', message: {value:"message start"} } );
           }
	
	  }
//静态变量和方法		
TestClass.xxx='xxxx';
TestClass.ff=function(){alert(1111)}
EventDispatcher.prototype.apply(TestClass.prototype );	 	  
	  
	  
 