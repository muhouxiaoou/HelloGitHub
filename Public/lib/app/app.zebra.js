

var AppZebra = function(){
	    this.window = $(window);
	    this.author="raymondzhong - www.zebramedia.cn - QQ:54079920";
		this.viewport={width:640,height:1008,mode:0,scale:1};
		this.device={width:0,height:0,android:false,ios:false,wx:false,isIphoneOs:false,isIphon4:false};
		this.screen = null;
		this.weixin=null;
		this.model= null;
		this.data={}; 
	}


AppZebra.prototype = {
	   constructor: AppZebra,
	   init:function(w,h,mode){
		        this.viewport.width=w;
		        this.viewport.height=h;
				var contentArray = $("meta[name='viewport']").attr('content').split(',')
				for( var i=0; i<contentArray.length;i++){
					if(contentArray[i].indexOf("width")!=-1){
								this.viewport.width = $.getNumber(contentArray[i])
						}	
				} 
				this.viewport.scale = this.device.width / this.viewport.width;
				this.initDeviceInfo();
				this.initDevice();
				this.setViewPortMode(mode);
		   },	    
	   initDevice:function(){
		   	var DEFAULT_WIDTH = this.viewport.width, // 页面的默认宽度
				ua = navigator.userAgent.toLowerCase(), // 根据 user agent 的信息获取浏览器信息
				deviceWidth = window.screen.width, // 设备的宽度
				devicePixelRatio = window.devicePixelRatio || 1, // 物理像素和设备独立像素的比例，默认为1
				targetDensitydpi;
								
				// Android4.0以下手机不支持viewport的width，需要设置target-densitydpi
				if (ua.indexOf("android") !== -1 && parseFloat(ua.slice(ua.indexOf("android")+8)) < 4) {
					targetDensitydpi = DEFAULT_WIDTH / deviceWidth * devicePixelRatio * 160;
					$('meta[name="viewport"]').attr('content', 'target-densitydpi=' + targetDensitydpi +
							', width=device-width, user-scalable=no');
				}
		   },
		initDeviceInfo:function(){
				var id= $.uuid();
				var html = "<div id="+id+" style='position:absolute;width:100%;height:100%'></div>";
				$("body").append(html);
				this.device.width = $("#"+id).width();
				this.device.height = $("#"+id).height();
				$("#"+id).remove();
				this.device.android = navigator.userAgent.match(/Android/i) ? true : false;
				this.device.ios = navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
				this.device.wx = navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger";
				this.device.wx = navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger";
				this.device.isIphoneOs = navigator.userAgent.toLowerCase().match(/iphone os/i) == "iphone os";
				this.device.isIphone4 = window.screen.width == 320 && window.screen.height == 480;
				this.device.isIphone5 = window.screen.width == 320 && window.screen.height == 568;
				this.device.isIphone6 = window.screen.width == 375 && window.screen.height == 667;
				this.device.isIphone6Plus = window.screen.width == 414 && window.screen.height == 736;
			},
		setViewPortMode:function(value){
				switch(value){
					case 0: //原始模式
					  this.viewport.mode = value;
					break;
					case 1:  //所有设备一屏幕显示
					  this.viewport.mode = value;
					  TweenMax.set(this.role(),{scaleX:this.device.width/this.viewport.width,
										   scaleY:app.device.height/this.viewport.height,
										   transformOrigin:"top center"})
					break;
					case 2:  //iphone4 适配
					    this.viewport.mode = value;
						if(this.device.isIphone4){
							TweenMax.set(this.role(),{scaleX:this.device.height/this.viewport.height,
													  scaleY:this.device.height/this.viewport.height,
													  transformOrigin:"top center"})
							}
					break;
				}
			},
		setContainer:function(element,offsetW,offsetH){
			   if(offsetW==null)offsetW=0;
			   if(offsetH==null)offsetH=0;
			   element.width(this.device.width+offsetW)
			   element.height(this.device.height+offsetH)
			},
		setScreenContainer:function(element){
			   element.css("width","100%");
			   element.css("height","100%");
			},
		setFullContainer:function(element,is_attr,offsetW,offsetH){
			   if(offsetW==null)offsetW=0;
			   if(offsetH==null)offsetH=0;
			   if(is_attr==null)is_attr= false;
			   if(is_attr){
				    element.attr("width",$(document).width()+offsetW)
					element.attr("height",$(document).height() +offsetH) 
				   }else{
					element.width($(document).width()+offsetW)
					element.height($(document).height() +offsetH)
				}
			},
		role:function(name){
			if(name==null){
				  return $("*[role^='app-']");
				}
			return $("*[role='"+name+"']");
		 },
       	toFooter:function(element){
			    element.css({"position":"fixed","bottom":"0", "z-index":9999999})	
			},
		fixedSelcect:function(_scale){
			var uuid= $.uuid();
			var uuidName='#'+uuid;
			var scale = 1;
			if($.isMobile()){scale=0.7;}	
			//scale = app.viewport.scale; 
			if(_scale!=null)scale = _scale;
			 $('body').append('<span id="{0}"  style="visibility:hidden;"></span>'.format(uuid))
			 $('option').each(function(){
				$(uuidName).html($(this).text());
				while($(uuidName).width()<$('select').width()*scale){
					$(uuidName).html('&nbsp'+$(uuidName).text()+'&nbsp');
				}
				$(this).html($(uuidName).text());
			 });
			 $(uuidName).remove();	 
		},
		selcectCenter:function(_scale){
			var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
			if(this.device.ios || isChrome){
				var uuid= $.uuid();
				var uuidName='#'+uuid;
				var scale = 1;
				if($.isMobile()){scale=0.4;}
				if(isChrome){scale=0.5;}	
				//scale = app.viewport.scale; 
				if(_scale!=null)scale = _scale;
				 $('body').append('<span id="{0}"  style="visibility:hidden;"></span>'.format(uuid))
				 $('option').each(function(){
					$(uuidName).html($(this).text());
					while($(uuidName).width()<$('select').width()*scale){
						$(uuidName).html('&nbsp'+$(uuidName).text()+'&nbsp');
					}
					$(this).html($(uuidName).text());
				 });
				 $(uuidName).remove();	
			}
		},
		autoImage:function(element){
			element.find('img').css({"width":"100%","height":"auto"});
		},
		getRealValue:function(value){
		    return value*this.viewport.scale;
		},
		getImageMeta:function(file, callback) {
				var r = new FileReader;
				var err = null;
				var meta = null;
				r.onload = function (event) {
					if (file.type === "image/jpeg") {
						try {
							meta = new JpegMeta.JpegFile(event.target.result, file.name)
						} catch (ex) {
							err = ex
						}
					}
					callback(err, meta)
				};
				r.onerror = function (event) {
					callback(event.target.error, meta)
				};
				r.readAsBinaryString(file)
		},
		compress:function(file, picParam, callback) {
				var mpImg = new MegaPixImage(file);
				var isAndroid = this.device.android;
				// defautl config
				var param = $.extend({
					type: "image/jpeg",
					maxHeight: 800,
					maxWidth: 600,
					quality: .8
				}, picParam);
		
				this.getImageMeta(file, function (err, meta) {
		
					// if file is a jpeg image,
					// using exif messagees
					// to transform the iamge at right orientation

					if (meta && meta.tiff && meta.tiff.Orientation) {
						param = $.extend({orientation: meta.tiff.Orientation.value}, param);
					}else{
						param = $.extend({orientation: 1}, param);
					}					
		
					var canvas = document.createElement('canvas');
		
					mpImg.onrender = function () {
						var base64Str = "";
						if (isAndroid && param.type == "image/jpeg") {
							// using jpegEncoder to fix android machine does not support jpeg
							var ctx = canvas.getContext('2d');
							var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
							var encoder = new JPEGEncoder(param.quality * 100);
							base64Str = encoder.encode(imgData);
							encoder = null
						} else {
							base64Str = canvas.toDataURL(picParam.type, picParam.quality);
						}
						callback(base64Str,param);
					};
		
					mpImg.render(canvas, param);
 
					
				});

	}
	/*,compressReset:function(file, picParam, callback) {
				var mpImg = new MegaPixImage(file);
				var isAndroid = this.device.android;
				// defautl config
				var param = $.extend({
					type: "image/jpeg",
					maxHeight: 800,
					maxWidth: 600,
					quality: .8
				}, picParam);
		
		        picParam.orientation = 7
		        param.orientation = 7
		         
				this.getImageMeta(file, function (err, meta) {
	
					var canvas = document.createElement('canvas');
		
					mpImg.onrender = function () {
						var base64Str = "";
						if (isAndroid && param.type == "image/jpeg") {
							// using jpegEncoder to fix android machine does not support jpeg
							var ctx = canvas.getContext('2d');
							var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
							var encoder = new JPEGEncoder(param.quality * 100);
							base64Str = encoder.encode(imgData);
							encoder = null
						} else {
							base64Str = canvas.toDataURL(picParam.type, picParam.quality);
						}
						callback(base64Str,param);
					};
					mpImg.render(canvas, param);
				});
			  } */
		
}


	  
window.app = new AppZebra();
		 
	
