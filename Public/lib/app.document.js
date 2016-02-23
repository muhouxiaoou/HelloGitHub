var requirejsConfig={
/*	map: {
      '*': {
       		 'css': './loader/require.css.min'
	       }
      },*/
    paths: {
				'jquery': './jquery/jquery.min',
				'jquery.zebra':'./jquery/jquery.zebra',
				'json2':'./core/json2',
				'jquery.imagesloaded':'./jquery/plus/jquery.imagesloaded.min',
				'jquery.wookmark':'./jquery/plus/wookmark/jquery.wookmark',
				'jquery.transit':'./jquery/plus/jquery.transit',
				'jquery.event.drop':'./jquery/plus/jquery.event.drop-2.2',
				'jquery.event.drop.live':'./jquery/plus/jquery.event.drop.live-2.2',
				'jquery.event.drag':'./jquery/plus/jquery.event.drag-2.2',
				'jquery.event.drag.live':'./jquery/plus/jquery.event.drag.live-2.2',	
				'jQueryRotate':'./jquery/plus/jQueryRotateCompressed',			
				'jquery.easing':'./jquery/plus/jquery.easing.min',
                'jquery.storageapi':'./jquery/plus/jquery.storageapi.min', 
				'jquery.base64':"./jquery/plus/jquery.base64",
                'jquery.hammer':"./jquery/plus/jquery.hammer",
                'jquery.mCustomScrollbar':'./jquery/plus/jquery.mCustomScrollbar.concat.min',

				/*******backbone*********/
				'underscore':'./backbone/underscore-min',
				'backbone':'./backbone/backbone-min',	
				
				/*******pxlaoder**********/
				'PxLoader':'./loader/pxloader/PxLoader',
				'PxLoaderImage':'./loader/pxloader/PxLoaderImage',
				'PxLoaderSound':'./loader/pxloader/PxLoaderSound',
				
				/*******app.zebra**********/			
				'app.zebra':'./app/app.zebra',
				'pageloader.zebra':'./app/pageloader.zebra',
				'pagepull.zebra':'./app/pagepull.zebra',
				'pageparse.zebra':'./app/pageparse.zebra',
				'recordpull.zebra':'./app/recordpull.zebra',
				'screen.zebra':'./app/screen.zebra',
				'canvas.zebra':'./app/canvas.zebra',
				
				/*******touch*********/
				'iscroll':'./touch/iscroll/iscroll',
				'hammerjs': './touch/hammer.min',
				'swipe': './touch/swipe',
				'swiper':'./touch/idangerous.swiper.min',
				'touchbox':'./touch/touchbox.min',				
				'jquery.hammer':'./touch/jquery.hammer',
				'jquery.touchSwipe':'./touch/jquery.touchSwipe.min',
				'jquery.swiper':'./touch/swiper.jquery.min',
				
				/*******task*********/
				'async':'./task/async',
				
				/***********effect**************/
				'rainyday':'./effect/rainyday.min',
				'flutter':'./effect/flutter',
				
				/*************************/
				'myclass':'./oop/my.class',
				'TweenMax':'./greensock/TweenMax.min',
				'TimelineMax':'./greensock/TimelineMax.min',
				'EventDispatcher':'./core/EventDispatcher',
				'weixin':'http://res.wx.qq.com/open/js/jweixin-1.0.0',
                                'zebra.weixin':'./platform/zebra.weixin',
				'holder':'./other/holder.min', 
				/*************data**********************/
				'tableExport':'./tableExport/tableExport.min',
				'fileSaver':'./tableExport/FileSaver/FileSaver.min',
				'html2canvas':'./tableExport/html2canvas/html2canvas.min',
				'jspdf':'./tableExport/jsPDF/jspdf.min',
				/***********createJS*************/
				'easeljs':'./createJS/easeljs-0.8.0.min',
				
				/********util***********/
                'DateTimeHelper':'./util/datetimehelper',
                'wScratchPad':'./util/wScratchPad.min',
                'easeljs-NEXT':'./util/easeljs-NEXT.min',
				/***project***/
                'pngPlayer':'./effect/pngPlayer'
      	    },
	shim: {	
		   'jquery': {
			deps: ['json2','EventDispatcher'],
			exports: '$'
		   },		
		   'jquery.imagesloaded':['jquery'],
		   'jQueryRotate':['jquery'],
		   'jquery.zebra':['jquery'],
		   'jquery.wookmark':['jquery'],
		   'jquery.transit':['jquery'],
		   'jquery.easing':['jquery'],
                   'jquery.storageapi':['jquery'],
		   'jquery.hammer':['jquery','hammerjs'],
		   'jquery.event.drag':['jquery'],
		   'jquery.event.drag.live':['jquery.event.drag'],
		   'jquery.event.drop':['jquery.event.drag.live'],
		   'jquery.event.drop.live':['jquery.event.drop'],
		   'PxLoaderImage':['PxLoader'],
		   'PxLoaderSound':['PxLoader'],
		   'jquery.swiper':['jquery'],
           'jquery.mCustomScrollbar':['jquery'],
		   'tableExport':['jquery','fileSaver','html2canvas','jspdf'],
           'hammerjs':{exports:'Hammer'},
		   'swiper':{
	　　　　　　　　deps: ['jquery'],
	　　　　　　　　exports: 'Swiper'
	　　　　　　 },
	　　　　　　 'TweenMax':{
	　　　　　　　　exports: 'TweenMax'
	　　　　　   },
	　　　　　　 'async':{
	　　　　　　　　exports: 'async'
	　　　　　   },
	　　　　　 　'underscore':{
	　　　　　　　　exports: '_'
	　　　　　 　},
	　　　　　 　'backbone': {
	　　　　　　　　deps: ['jquery','underscore'],
	　　　　　　　　exports: 'Backbone'
	　　　　　　 },	
                   'zebra.weixin':{
	　　　　　　　　deps: ['weixin']
                   },
		   'pagepull.zebra':['jquery.zebra'],
		   'pageparse.zebra':['jquery.zebra'],
		   'pageloader.zebra':['jquery.imagesloaded','PxLoaderImage','pageparse.zebra','jquery.zebra'],
		   'screen.zebra':['jquery.zebra'],
 		   'recordpull.zebra':['jquery.zebra'],
            'wScratchPad':['jquery'],
		   'app.zebra':{
			   deps: [
						  //base
						  'jquery.zebra','async','backbone',
						  //view
						  'pageloader.zebra','screen.zebra',
						  //animation
						  'TweenMax',
						  //touch
						  'jquery.touchSwipe','jquery.swiper',
						  //util
						  'DateTimeHelper','iscroll','pngPlayer'

				  ],
			   exports: "app"
		   }
 
	     }
	}
                
requirejs.config(requirejsConfig);
require(['hammerjs','app.zebra'],
function(Hammer)
	   {
            window.Hammer = Hammer;
            if(__hasLib__('canvas.zebra')){app.canvas = new Canvas();}
			if(__hasLib__('screen.zebra')){app.screen = new Screen();}
			if(__hasLib__('backbone')){app.model = new Backbone.Model();}
			app.init(640,1008,0);
			if(pageInitialize)pageInitialize();
		
	   }
);

function __hasLib__(libName){
       return requirejsConfig.shim["app.zebra"].deps.indexOf(libName)!=-1;
	}




