define([],function(){
      
			window.mySwiper = new Swiper('.swiper-container',{
									  direction : 'vertical',
									  //speed:800,
									  onSlideChangeEnd:function(){
											  try{ eval("page"+(mySwiper.activeIndex+1)+"Ready")();}catch(e){}
											  try{ eval("page"+(mySwiper.activeIndex-1)+"Ready")();}catch(e){}
											  try{ eval("page"+(mySwiper.activeIndex)+"Play")();}catch(e){}
											}
								})
								
			page0Ready()
 			page1Ready();
 			page0Play();
});


var intervalIocnTime = 1;
function page0Ready(){ 
			 TweenMax.killAll();	
			 $("#page0>img").hide();
			$("#page0 div.icon>img").each(function(){
			   $(this).css({"opacity":0})
			 })
			 $("#page0-left-word > ul > li > img").css({"opacity":0})
			 $("#page0-right-word > ul > li > img").css({"opacity":0})
			 $("#page0-left-text,#page0-right-text").css({"opacity":0})
		     $("#page0-yuan").css({"left":"0px","top":"700px","opacity":0})
		     $("#page0-fang").css({"left":"295px","top":"-200px","opacity":0})
		     $("#page0-hand0").css({"left":"81px","top":"800px","opacity":1})
		     $("#page0-hand1").css({"left":"351px","top":"-300px","opacity":1})
			 		 
		}

function page0Play(){ 
			 $("#page0-left-word").show();
			 $("#page0-right-word").show();
			 $("#page0-left-text").show();
			 $("#page0-right-text").show();
		 
			 
			 $("#page0-yuan,#page0-fang,#page0-line,#page0-hand0,#page0-hand1").show();			 
			 TweenMax.to($("#page0-yuan"), 2.5, {top:"419px","opacity":1,ease: Sine. easeOut});
			 TweenMax.to($("#page0-fang"), 2.5, {top:"0px","opacity":1,ease: Sine. easeOut}); 
			 TweenMax.to($("#page0-hand0"), 1, {top:"481px","opacity":1,ease: Sine. easeOut});
			 TweenMax.to($("#page0-hand1"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
			 
		 $("#page0 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
		 
			 var page0_leftTitle = new TimelineMax({ delay:2});
			 //$.domReverse()
			     $("#page0-left-word > ul > li > img").each(function() {
                     page0_leftTitle.add( TweenMax.to($(this), 0.3, {"opacity":1}) );
                 });
		 
			 
			 var page0_rightTitle = new TimelineMax({ delay:3.5});
			     $("#page0-right-word > ul > li > img").each(function(index, element) {
                     page0_rightTitle.add( TweenMax.to($(this), 0.3, {"opacity":1}) );
                 });
				 
			 TweenMax.to($("#page0-left-text"), 1, {delay:3,"opacity":1}); 
			 TweenMax.to($("#page0-right-text"), 1, {delay:5,"opacity":1}); 
		}
		
function page1Ready(){
	     TweenMax.killAll();	
	     $(".page1-bg-0").css({"top":"200px","opacity":0});
	     $(".page1-bg-1").css({"top":"-200px","opacity":0});
		 $(".page1-mask-left > img").css({"left":"533px",top:"354px"});
		 $(".page1-mask-right > img").css({"left":"-213px",top:"354px"});
		 $(".page1-text0,.page1-text1").css({"opacity":0})
		 
		 $(".page1-text0,.page1-text1").css({"opacity":0})
		 
		 $("#page1 div.icon>img").each(function(){
			   $(this).css({"opacity":0})
			 })
		 
		 
		 
		 $(".s0").css({left:"-500px"});
		 $(".s1").css({top:"-500px"});
		 $(".s2").css({top:"300px","opacity":0});
		 $(".s3").css({top:"300px","opacity":0});
		 $(".s4").css({"opacity":0});
	}
	
function page1Play(){ 
		 TweenMax.to($(".page1-bg-0"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
		 TweenMax.to($(".page1-bg-1"), 1, {top:"0px","opacity":1,ease: Sine. easeOut}); 
		 TweenMax.to($(".page1-mask-left > img"), 1, {left:"110px",delay:1}); 
		 TweenMax.to($(".page1-mask-right > img"), 1, {left:"0px",delay:1.5});  
		 TweenMax.to($(".page1-text0"), 1, {opacity:1,delay:2}); 
		 TweenMax.to($(".page1-text1"), 1, {opacity:1,delay:2.5}); 
		 
		 
		 $("#page1 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
		 
		 
		 var shi = new TimelineMax({ delay:3});
 			 shi.add( TweenMax.to($(".s0"), 0.5, {left:"0px"}) );
 			 shi.add( TweenMax.to($(".s1"), 0.5, {top:"0px"}) );
 		     shi.add( TweenMax.to($(".s2"), 0.5, {top:"0px","opacity":1}) );
 		     shi.add( TweenMax.to($(".s3"), 0.5, {top:"0px","opacity":1}) );
 		     shi.add( TweenMax.to($(".s4"), 0.5, {"opacity":1}) );
			  
	}	

function page2Ready(){
	   TweenMax.killAll();
	   $(".page2-left-bg").css({top:"-200px","opacity":0})
	   $(".page2-right-bg").css({top:"200px","opacity":0})
	   $(".page2-mask-left > img").css({left:"320px","opacity":0});
	   $(".page2-mask-right > img").css({left:"-640px","opacity":0});
	   $(".page2-text-0,.page2-text-1").css({"opacity":0})
	   
	   $("#page2 div.icon>img").each(function(){
		   $(this).css({"opacity":0})
		 })
			 
	   $(".page2-word-0").css({left:"-640px"});
	   $(".page2-word-1").css({top:"-300px"});
	   $(".page2-word-2").css({top:"300px","opacity":0});
	   $(".page2-word-3").css({top:"200px","opacity":0});
	}
	
function page2Play(){
	   TweenMax.to($(".page2-left-bg"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
	   TweenMax.to($(".page2-right-bg"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
	   TweenMax.to($(".page2-mask-left > img"), 1, {left:"0px","opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page2-mask-right > img"), 1, {left:"-320px","opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page2-text-0"), 1, {delay:1,"opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page2-text-1"), 1, {delay:1.5,"opacity":1,ease: Sine.easeOut});
	   
		 $("#page2 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
		 
	   var jie = new TimelineMax({ delay:2});
		   jie.add( TweenMax.to($(".page2-word-0"), 0.5, {left:"0px"}) );
		   jie.add( TweenMax.to($(".page2-word-1"), 0.5, {top:"0px"}) );
		   jie.add( TweenMax.to($(".page2-word-2"), 0.5, {top:"0px","opacity":1}) );
		   jie.add( TweenMax.to($(".page2-word-3"), 0.5, {top:"0px","opacity":1}) );
	 }
	 
	 

function page3Ready(){
	   TweenMax.killAll();
	   $(".page3-left-bg").css({top:"-200px","opacity":0})
	   $(".page3-right-bg").css({top:"200px","opacity":0})
	   $(".page3-mask-left > img").css({left:"320px","opacity":0});
	   $(".page3-mask-right > img").css({left:"-640px","opacity":0});
	   $(".page3-text-0,.page3-text-1").css({"opacity":0})
	    $("#page3 div.icon>img").each(function(){
		   $(this).css({"opacity":0})
		 })
	   $(".page3-word-0").css({top:"-300px","opacity":0});
	   $(".page3-word-1").css({left:"-640px"});
	   $(".page3-word-2").css({"opacity":0});
	   $(".page3-word-3").css({left:"200px","opacity":0});
	   $(".page3-word-4").css({left:"-520px"});
	   $(".page3-word-5").css({left:"320px"});
	   $(".page3-word-6").css({left:"320px"});
	   $(".page3-word-7").css({top:"320px","opacity":0});
	}
	
function page3Play(){
	   TweenMax.to($(".page3-left-bg"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
	   TweenMax.to($(".page3-right-bg"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
	   TweenMax.to($(".page3-mask-left > img"), 1, {left:"0px","opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page3-mask-right > img"), 1, {left:"-320px","opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page3-text-0"), 1, {delay:1,"opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page3-text-1"), 1, {delay:1.5,"opacity":1,ease: Sine.easeOut});
	   
	   $("#page3 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
		 
	    var mai = new TimelineMax({ delay:2});
		   mai.add( TweenMax.to($(".page3-word-1"), 0.5, {left:"0px"}) );
		   mai.add( TweenMax.to($(".page3-word-0"), 0.5, {top:"0px","opacity":1}) );
		   mai.add( TweenMax.to($(".page3-word-3"), 0.5, {left:"0px","opacity":1}) ); 
		   mai.add( TweenMax.to($(".page3-word-4"), 0.5, {left:"0px"}) ); 
		   mai.add( TweenMax.to($(".page3-word-7"), 0.5, {top:"0px","opacity":1}) ); 
		   mai.add( TweenMax.to($(".page3-word-5"), 0.5, {left:"0px"}) ); 
		   mai.add( TweenMax.to($(".page3-word-6"), 0.5, {left:"0px"}) ); 
		   mai.add( TweenMax.to($(".page3-word-2"), 0.5, {"opacity":1}) );
	 }
	 
	 
	 

function page4Ready(){
	   TweenMax.killAll();
	   $(".page4-left-bg").css({top:"-200px","opacity":0})
	   $(".page4-right-bg").css({top:"200px","opacity":0})
	   $(".page4-mask-left > img").css({left:"320px","opacity":0});
	   $(".page4-mask-right > img").css({left:"-640px","opacity":0});
	   $(".page4-text-0,.page4-text-1,.page4-text-2").css({"opacity":0})
	   $("#page4 div.icon>img").each(function(){
		   $(this).css({"opacity":0})
		 })
	   $(".page4-word-0").css({left:"-300px","opacity":0});
	   $(".page4-word-1").css({top:"-640px"});
	   $(".page4-word-2").css({"opacity":0});
	   $(".page4-word-3").css({left:"200px","opacity":0});
	   $(".page4-word-4").css({left:"-520px"});
	 
	}
	
function page4Play(){
	   TweenMax.to($(".page4-left-bg"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
	   TweenMax.to($(".page4-right-bg"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
	   TweenMax.to($(".page4-mask-left > img"), 1, {left:"0px","opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page4-mask-right > img"), 1, {left:"-320px","opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page4-text-0"), 1, {delay:1,"opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page4-text-1"), 1, {delay:1.5,"opacity":1,ease: Sine.easeOut});
	   TweenMax.to($(".page4-text-2"), 1, {delay:2,"opacity":1,ease: Sine.easeOut});
	    $("#page4 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
	   var jin = new TimelineMax({ delay:2});
		   jin.add( TweenMax.to($(".page4-word-0"), 0.5, {left:"0px","opacity":1}) );
		   jin.add( TweenMax.to($(".page4-word-1"), 0.5, {top:"0px"}) );
		   jin.add( TweenMax.to($(".page4-word-2"), 0.5, {"opacity":1}) ); 
		   jin.add( TweenMax.to($(".page4-word-3"), 0.5, {left:"0px","opacity":1}) ); 
		   jin.add( TweenMax.to($(".page4-word-4"), 0.5, {left:"0px","opacity":1}) ); 
	 }
	 
	 

function page5Ready(){
	   TweenMax.killAll();
	   $(".page5-ren").hide();
	   $(".page5-ren").css({"opacity":0})
	   $(".page5-sun").css({"opacity":0,left:"336px",top:"250px"})
	    $(".page5-text-0,.page5-text-1,.page5-text-2,.page5-text-3").css({"opacity":0})
	    $(".page5-word-0,.page5-word-1,.page5-word-2,.page5-word-3").css({"opacity":0})
	    $(".page5-word-4,.page5-word-5,.page5-word-6").css({"opacity":0})
 		$(".page5-word-0,.page5-word-1").css({top:"-200px","opacity":0})
		$("#page5 div.icon>img").each(function(){
		   $(this).css({"opacity":0})
		 })
 		$(".page5-word-2").css({top:"200px","opacity":0})
	 	$(".page5-word-3").css({left:"-200px","opacity":0})
	 	$(".page5-word-4").css({left:"200px","opacity":0})
	 	$(".page5-word-5").css({left:"-200px","opacity":0})
	 	$(".page5-word-6").css({left:"200px","opacity":0})
	}
	
function page5Play(){
	   $(".page5-ren,.page5-sun").show();
	    TweenMax.to($(".page5-ren"), 1.5, {"opacity":1});
		TweenMax.to($(".page5-sun"), 1.5, {"opacity":1,top:"350px",delay:1});
		TweenMax.to($(".page5-text-0"), 1, {delay:1,"opacity":1,ease: Sine.easeOut});
	    TweenMax.to($(".page5-text-1"), 1, {delay:1.5,"opacity":1,ease: Sine.easeOut});
	    TweenMax.to($(".page5-text-2"), 1, {delay:2,"opacity":1,ease: Sine.easeOut});
	    TweenMax.to($(".page5-text-3"), 1, {delay:2.5,"opacity":1,ease: Sine.easeOut}); 
		 $("#page5 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
	   var meng = new TimelineMax({ delay:2});
		   meng.add( TweenMax.to($(".page5-word-0"), 0.5, {top:"0px","opacity":1}) );
		   meng.add( TweenMax.to($(".page5-word-1"), 0.5, {top:"0px","opacity":1}) );
		   meng.add( TweenMax.to($(".page5-word-2"), 0.5, {top:"0px","opacity":1}) ); 
		   meng.add( TweenMax.to($(".page5-word-3"), 0.5, {left:"0px","opacity":1}) ); 
		   meng.add( TweenMax.to($(".page5-word-4"), 0.5, {left:"0px","opacity":1}) ); 
		   meng.add( TweenMax.to($(".page5-word-5"), 0.5, {left:"0px","opacity":1}) ); 
		   meng.add( TweenMax.to($(".page5-word-6"), 0.5, {left:"0px","opacity":1}) );   
	 }
	 

function page6Ready(){
	   TweenMax.killAll();
 
		$("#page6 div.icon>img").each(function(){
		   $(this).css({"opacity":0})
		 })
 	   
	}
	
function page6Play(){
	     window.mySwiper.detachEvents();
		 
		 init()
		 
		 $(".rewrite").click(function(){
				 stage.clear();
			 })
		 $(".next-but").click(function(){
				 nextlogic();
			 })
		 
		 $("#page6 div.icon>img").each(function(){
			       TweenMax.to($(this), 1, {opacity:1,delay:intervalIocnTime}); 
			       intervalIocnTime+=0.2;
			 })
		 intervalIocnTime=1;
	   
	 }
	 
function nextlogic(){
	   $(".page6tian").hide();
		stage.removeEventListener("stagemousedown", handleMouseDown);
		stage.removeEventListener("stagemousemove", handleMouseMove);
		stage.removeEventListener("stagemouseup", handleMouseUp);
	}
	 
/******************************************************************/
	var canvas, stage;
	var drawingCanvas;
	var oldPt;
	var oldMidPt;
	var title;
	var color;
	var stroke;
	var colors;
	var index;

	function init() {
		canvas = document.getElementById("canvasapp");
		index = 0;
		colors = ["#828b20", "#b0ac31", "#cbc53d", "#fad779", "#f9e4ad", "#faf2db", "#563512", "#9b4a0b", "#d36600", "#fe8a00", "#f9a71f"];

		//check to see if we are running in a browser with touch support
		stage = new createjs.Stage(canvas);
		stage.autoClear = false;
		stage.enableDOMEvents(true);

		createjs.Touch.enable(stage);
		createjs.Ticker.setFPS(24);

		drawingCanvas = new createjs.Shape();

		stage.addEventListener("stagemousedown", handleMouseDown);
		stage.addEventListener("stagemouseup", handleMouseUp);

		/*title = new createjs.Text("Click and Drag to draw", "36px Arial", "#777777");
		title.x = 300;
		title.y = 200;
		stage.addChild(title);*/

		stage.addChild(drawingCanvas);
		stage.update();
	}

	function handleMouseDown(event) {
		if (!event.primary) { return; }
		/*if (stage.contains(title)) {
			stage.clear();
			stage.removeChild(title);
		}*/
		color =  "0x000000";   //colors[(index++) % colors.length];
		stroke =  20;  //Math.random() * 30 + 10 | 0;
		oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt = oldPt.clone();
		stage.addEventListener("stagemousemove", handleMouseMove);
	}

	function handleMouseMove(event) {
		if (!event.primary) { return; }
		var midPt = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

		drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;

		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;

		stage.update();
	}

	function handleMouseUp(event) {
		if (!event.primary) { return; }
		stage.removeEventListener("stagemousemove", handleMouseMove);
	}	 
