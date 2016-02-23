// JavaScript Document


var WP = function(){
	    
	  }

WP.prototype = {
		  constructor: WP,
	      pImg:function(){
				   $('img').each(function(){
					   if($(this).parent().parent()[0].tagName=='P'){
						   $(this).parent().parent().css({"text-indent":0})
						}
					})
			} 
	  }