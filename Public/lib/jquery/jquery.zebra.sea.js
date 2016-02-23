define(function(require, exports, module)   { 
//DOM extended
$.fn.extend({
			　setAlpha:function(alpha){
				  if(alpha==null||alpha==""|| alpha=="undefined"){alpha=0};
					var _alpha;
					this.each(function() { 
						_alpha=$.ie?this.style.filter="alpha(Opacity="+alpha+")":this.style.opacity=alpha/100;
				   });		
			 },
			 getMaxZ : function(){
				return Math.max.apply(null, jQuery(this).map(function(){
					var z;
					return isNaN(z = parseInt(jQuery(this).css("z-index"), 10)) ? 0 : z;
				}));
			},			 
			columnSwipePager:function(_config){
				   var config = {
							itemWidth:_config.itemWidth!=null?_config.itemWidth:50,
							itemHeight:_config.itemHeight!=null?_config.itemHeight:50,
							top:_config.top!=null?_config.top:0,
							left:_config.left!=null?_config.left:0,
							bottom:_config.bottom!=null?_config.bottom:0,
							count:_config.count!=null?_config.count:2,
							background:_config.background!=null?_config.background:"none",
							data:_config.data!=null?_config.data:[]
					   }
				   
				   var index = 0;	
				   var element =""; 
				   var page =Math.ceil(config.data.length/config.count);
				   while(config.data.length>0)
				   {
					   if(index==0) element="<div>";
					   var record = config.data.shift();
					   index++;
						   
					   element +='<div style="width:{0}px;height:{1}px;padding:0;margin:0;margin-top:{2}px;margin-left:{3}px;margin-bottom:{4}px;background:{5};" >'.format(config.itemWidth,config.itemHeight,config.top,config.left,config.bottom,config.background);
					   element += record;
					   element +='</div>';
					   
					   if(index == config.count){
								  index = 0;
								  element +="</div>";
								  this.each(function() { 
										$(this).append(element);
								  });
						   }else if(config.data.length==0){
								  element +="</div>";
								  this.each(function() { 
										$(this).append(element);
								  });
					   }  
				   }
				   
				   return page;
				  
			}
	
	})


//static extended
$.extend({
	 developer:function(){return "raymondzhong  www.zebramedia.cn  QQ:54079920"},
	 getMaxZindex : function(){
		var maxZ = Math.max.apply(null, $.map($('body > *'), function (e, n) {
            //if ($(e).css('position') == 'absolute' ||)
                return parseInt($(e).css('z-index')) || 0;
            })
        );
        return maxZ;
	 },
	 removeScript:function(scripttext){
		    var reg = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
	        return scripttext.replace(reg, "");			 
		 },
	 getScriptext:function(scripttext){
		    var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;		
			var match;
			while (match = re.exec(scripttext)) {
			  console.log(match[1]);  //输出每段script 中的代码
			}
		 },
	  getbody:function(scripttext){
		    var re = /<body\b[^>]*>([\s\S]*?)<\/body>/gm;		
			var match;
			var bodyhtml=""
			while (match = re.exec(scripttext)) {
			  bodyhtml += match[1];  //输出每段script 中的代码
			}
			return bodyhtml;
		 },
	 getType:function (o)
        {
          var _t; 
          return ((_t = typeof(o)) == "object" ? o==null && "null" || Object.prototype.toString.call(o).slice(8,-1):_t).toLowerCase();
          /*
                    getType("abc")：string
                    getType(true)：boolean
                    getType(123)：number
                    getType([])：array
                    getType({})：object
                    getType(function(){})：function
                    getType(new Date())：date
                    getType(/\d/)：regexp
                    getType(null)：null
          */
        },
	random:function(num){
	 	var _randomstr,d_, s_,d, t_,s='';
		if(num==null){
		var MinMilli = 1000 * 60;
	    var HrMilli = MinMilli * 60;
	    var DyMilli = HrMilli * 24;
	    d_ = new Date();
	    t_ = d_.getTime();
	    s_ =t_;
	    
	    d = new Date();
	    s += (d.getMonth() + 1) + "_";
	    s += d.getDate() + "_";
	    s += d.getFullYear();
	    _randomstr=s_+"_"+s+"_"+parseInt(Math.random()*100)*parseInt(Math.random()*10)+"_";
		}else{
		_randomstr= parseInt(Math.random()*num);
		};
		return _randomstr;
      },
	randomColor:function(){
		  var color=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
          var dbcolor='#';
		  for(var i=0;i<6;i++){
			  dbcolor+=color[$.random(color.length)];
			  };
			return dbcolor;
		  },
	randomNum:function (Min,Max)
			{   
				var Range = Max - Min;   
				var Rand = Math.random();   
				return(Min + Math.round(Rand * Range));   
			},
	wait:function(fn,time,arg){
				    setTimeout(function(){
						fn();
						},time,arg);
			},  
	write:function(t){
		document.write(t);
		},
	setCookie:function(key,value,t){
			if(key==null){return false;};
			var expires = new Date();
			var time;
			if(t==null){time=30;}else{time=t;};
			expires.setTime(expires.getTime() + time *24 * 60 * 60 * 1000);
			document.cookie=key+"="+value+";expires="+ expires.toGMTString();
		},
	getCookie:function(key){
			var _str,cookiearray=[];cookiearray=document.cookie.split(";");
			for(var i=0;i<cookiearray.length;i++){
				if(cookiearray[i].indexOf(key)!=-1){
					_str=cookiearray[i].replace(key+"=","");
					};
				};
			return unescape(_str);
		},
	removeCookie:function(key){
			$.setCookie(key,null,0);
			},
	isMobile:function(){
				var mobile = {  
						Android: function() {  
							return navigator.userAgent.match(/Android/i) ? true : false;  
						},  
						BlackBerry: function() {  
							return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
						},  
						iOS: function() {  
							return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
						},  
						Windows: function() {  
							return navigator.userAgent.match(/IEMobile/i) ? true : false;  
						},  
						any: function() {  
							return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Windows());  
						}  
					}; 
				return mobile.any();
		 	},
	 uuid:function (len, radix) {
				var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
				var uuid = [], i;
				radix = radix || chars.length;
			
				if (len) {
				  // Compact form
				  for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
				} else {
				  // rfc4122, version 4 form
				  var r;
			
				  // rfc4122 requires these characters
				  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
				  uuid[14] = '4';
			
				  // Fill in random data.  At i==19 set the high bits of clock sequence as
				  // per rfc4122, sec. 4.1.5
				  for (i = 0; i < 36; i++) {
					if (!uuid[i]) {
					  r = 0 | Math.random()*16;
					  uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
					}
				  }
				}
			
				return uuid.join('');
			}
				
				
});


});


/*********************String prototype*************************************/
String.prototype.format = function(args) {
	if (arguments.length > 0) {
		var result = this;
		if (arguments.length == 1 && typeof(args) == "object") {
			for (var key in args) {
				var reg = new RegExp("({" + key + "})", "g");
				result = result.replace(reg, args[key]);
			}
		} else {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] == undefined) {
					return "";
				} else {
					var reg = new RegExp("({[" + i + "]})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
		return result;
	} else {
		return this;
	}
}