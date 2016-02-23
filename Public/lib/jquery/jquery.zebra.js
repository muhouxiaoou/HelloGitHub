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
            postCanvas: function(){
                var image    = $(this)[0].toDataURL("image/png");
                var b64 = image.substring( 22 );
                var _param = { canvas_image : b64};

                switch (arguments.length){
                    case 1:
                        $.post(arguments[0],_param);
                    break;
                    case 2:
                        if(typeof arguments[1] =="function"){
                            __callback=arguments[1];
                            $.post(arguments[0],_param,function(data){__callback(data)});
                        }else{
                            $.extend(_param,arguments[1]);
                            $.post(arguments[0],_param);
                        }
                    break;
                    case 3:
                        $.extend(_param,arguments[1]);
                        __callback=arguments[2];
                        $.post(arguments[0], _param, function(data){__callback(data)});
                    break;
                }


            }
	
	})


//static extended
$.extend({
	 developer:function(){return "raymondzhong  www.zebramedia.cn  QQ:54079920"},
	 role:function(name){
		if(name==null){
			  return $("*[role^='app-']")
			}
		return $("*[role='"+name+"']");
	 },
	 domReverse:function(obj){
		     var arr=[];
			 obj.each(function(){
				 arr.push($(this))
				 })
				 arr = arr.reverse();
		     return $(arr);
		 },
	 urlParam:function(name){
		 var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
　　			 return results[1] || 0;
		 },
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
	 removeStyle:function(scripttext){
		    var reg = /<style\b[^>]*>([\s\S]*?)<\/style>/gm;
	        return scripttext.replace(reg,'');			 
		 },
	 getStyleText:function(scripttext,hasTag){
	         var re = /<style\b[^>]*>([\s\S]*?)<\/style>/gm;		
			return $.getTagText(scripttext,re,hasTag);		 
		 },
	 getScripText:function(scripttext,hasTag){
		    var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;		
			return $.getTagText(scripttext,re,hasTag);	
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
	  getTagText:function(text,re,hasTag){ 	
				var _hasTag = false;
				if(hasTag!=null) {_hasTag = true}		
				var match;
				var arr=[]
				while (match = re.exec(text)) {
					if(_hasTag){
						arr.push(match[0])
					}else{
						arr.push(match[1])
					}
				   //console.log(match[0]);
				   //console.log(match[1]);  //输出每段style 中的代码
				   //console.log("===============styleText===============")
				}
				return arr;		  
		  },
     getCanvasData:function(canvas){
         var image    = canvas.toDataURL("image/png");
         //删除字符串前的提示信息 "data:image/png;base64,"
         var b64 = image.substring( 22 );
         //POST到服务器上，生成图片
         return { data : b64};
     },
     getNumber:function(text){
		  return text.replace(/[^0-9]/ig,"");
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
        pngImage:function(){
            var png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMy8xMC8xNXskEYMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAADUlEQVQImWP4//8/AwAI/AL+hc2rNAAAAABJRU5ErkJggg==";
            return png;
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
        toJsonObject:function(str){
             return JSON.parse(str);
        },
        toJsonString:function(obj){
             return JSON.stringify(obj);
        },
        isEmpty:function(str){
            if(str==null ||  str.length == 0) {return true;}
            return false;
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
			},
        /**
         * 根据条件判断数据
            var filterdata:Object = {
                                //age: { ">=":5, "<=":10 },
                                age:[5,7], 
                                name:{"like":"_"}
                                 // columnName:{"=":1} 
		 }
         */
	filterData:function(resource,filterdata) {
		 	if(resource==null || filterdata==null)return false;
                         
                        var _parse =function(filterdata) {
			var data =[];			
			for ( var  item in filterdata) {
                            if (isArray(filterdata[item])) {	
                                                    data.push([item,filterdata[item]])					
                                                    }else{	
                                          for (var itemChild in filterdata[item]) {
                                                      //[column,>,value]
                                                   data.push([item,itemChild,filterdata[item][itemChild]])
                                              }
                                       } 				
                                    }
                                    return data;
			} 
	 
                      var _ArrayHasValueMethond =function(data, value) {
                                   for (var i = 0; i < data.length; i++) {
                                                  if (data[i] == value) {
                                                          return true;
                                                         }
                                               }
                               return false;
                       }
 
                       var isArray= function (obj) {
                          return obj instanceof Array;
                       };
 
                        var _OperatorMethond =function(data,Operator,value) {
                               var b = true; 
                               if (data == null) { return false; }		 
                               switch (Operator) {
                                        case ">":	
                                               if (!(data > value)) {  b = false; }			 
                                        break;				 
                                        case "<":	
                                               if (!(data < value)) { b = false;}
                                        break;
                                        case ">=":	
                                               if (!(data >= value)) { b = false;}
                                        break;
                                        case "<=":	
                                               if (!(data <= value)) { b = false;}
                                        break;
                                        case "=":	
                                               if (!(data == value)) { b = false;}
                                        break;
                                        case "!=":	
                                               if (!(data != value)) { b = false;}
                                        break;
                                        case "like": //含有
                                                if ((data.toString()).indexOf(value)==-1) { b = false;}
                                        break;
                                        case "^":	 //含有 
                                                if ((data.toString()).indexOf(value)==-1) { b = false;}
                                        break;
                                         case "^=":  //开头等于 
                                                if ((data.toString()).indexOf(value)!=0) { b = false;}
                                        break;				 
                                        }				 
                                 return b;
                               }
                         
			var filterArray = _parse(filterdata);
			  for (var j = 0; j < filterArray.length; j++) {
				
				  if (isArray(filterArray[j][1])) {  
					if (!_ArrayHasValueMethond(filterArray[j][1], resource[filterArray[j][0]])) {
						return false;
						}
					
					}else { 
					//column:{">",value}
				  if (!_OperatorMethond(resource[filterArray[j][0]], filterArray[j][1], filterArray[j][2])) {
							return false;
							}
					}
				}
			return true;
                 },
    urlGet:function()
    {
        var aQuery = window.location.href.split("?");  //取得Get参数
        var aGET = new Array();
        if(aQuery.length > 1)
        {
            var aBuf = aQuery[1].split("&");
            for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
            {
                var aTmp = aBuf[i].split("=");  //分离key与Value
                aGET[aTmp[0]] = aTmp[1];
            }
        }
        return aGET;
    }
				
				
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
/*********************Array prototype*************************************/


