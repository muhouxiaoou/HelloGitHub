define([],function(){
      
	  $("#box").swipe( {
        //Generic swipe handler for all directions
        swipeDown:function(event, direction, distance, duration, fingerCount) {
             if(!isplaying && index!=0){
				 dir=0;
				 prevIndex = index;
				 index--;
				 gotopage(index);
				 $("#page0-line").show();
			 }
        },
        swipeUp:function(event, direction, distance, duration, fingerCount) {
		 	swiperup();
			//console.log(prevIndex+"-"+index+"-"+currentIndex)
			
        },
        threshold:0
      }); 
	  init();	
	  gotopage(index);	 
	  
	  $("#arrow").click(function(){
		  swiperup()
		  })
	  
	  TweenMax.to($(".topicon"), 1, {"opacity":1,ease: Sine. easeOut});	
	  $("#pagewrite").hide(); 
	  app.setFullContainer($("#share-text"));
	  /*$(".boxpage").each(function(){
		  app.setFullContainer($(this))	
		  })*/
		  
	soundlogic()
	  samll3iconlogic()
          
          $("#share-text").click(function(){
              $(this).hide();
          })
});

var soundOpen= true;
function  soundlogic(){
	var sound=document.getElementById("sound");
	var audiotemp=document.getElementById("bgm");
	 $("#soundc").click(function(){
		 
			 if(soundOpen){
				 	 
					 	 audiotemp.pause();
					 $("#soundc > img").attr("src",window.public+"/image/sound-closed.png");
					 soundOpen= false;
				}else{
						 audiotemp.play();
					 $("#soundc > img").attr("src",window.public+"/image/sound-open.gif");
					 soundOpen = true;
				}
		 });
		
	}

function swiperup(){
		if(prevIndex == 4 && index==5){
					pagetowrite()
					$("#box").unbind();
				}else{
			
					if(!isplaying && index!=5){
					$("#page0-line").show();
						dir=1;
						 prevIndex = index;
						index++;
						gotopage(index);
					 }
		    }
	}

 

function pagetowrite(){
		$("#pagewrite").show();
		TweenMax.to($("#pageanimation"), 1, {"top":"-1011px",ease: Sine. easeOut});
		TweenMax.to($("#pagewrite"), 1, {"top":"0px",ease: Sine. easeOut});
                  $("#arrow").hide();
		$(".rewrite").click(function(){
				 stage.clear();
				 $("#canvasapp").css({"top":"162px"})
				 if($(".create-but").css("display")!="none"){
					 
						 $(".next-but").show();
						 $(".create-but").hide();
						 $("#wenli-bg").hide();
						 $("#small3icon").hide(); 
					     $(".page6tian").show();
				 		 TweenMax.to($("#canvasapp"),0,{scale:1});
						
						stage.addEventListener("stagemousedown", handleMouseDown);
						stage.addEventListener("stagemousemove", handleMouseMove);
						stage.addEventListener("stagemouseup", handleMouseUp);

					 }
				 
			 })
		$(".next-but").click(function(){
				 nextlogic();
				 //$(".rewrite").hide(); 
				 $(".next-but").hide();
				 $(".create-but").show();
				 $("#wenli-bg").show();
				 $("#small3icon").show(); 
				 $("#canvasapp").css({"top":"102px"})
				 TweenMax.to($("#canvasapp"),0,{scale:0.8});
				 changewenli();
				 
			 })
	}
var wenli = 1;	
var wenliPos =  [70,-380,-840];

function samll3iconlogic(){
	       $("#s31").click(function(){
			    wenli =0 ;
				TweenMax.to($("#wenli-bg > img"), 0.5, {"left":wenliPos[wenli]+"px",ease: Sine. easeOut});	
				   $(".small3").hide();
				   $($(".small3").get(wenli)).show()
			})
	       $("#s32").click(function(){
			    wenli =1 ;
			    TweenMax.to($("#wenli-bg > img"), 0.5, {"left":wenliPos[wenli]+"px",ease: Sine. easeOut});	
				   $(".small3").hide();
				   $($(".small3").get(wenli)).show()
			})
	       $("#s33").click(function(){
			    wenli =2;
				TweenMax.to($("#wenli-bg > img"), 0.5, {"left":wenliPos[wenli]+"px",ease: Sine. easeOut});	
				   $(".small3").hide();
				   $($(".small3").get(wenli)).show()
			})
	}

function changewenli(){
		
		 $("#wenli-bg > img").css({"left":"-380px"})
	
		 $("#canvasapp, #wenli-bg").swipe( {
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
				   wenli++;
				   if(wenli>2){wenli=2}
				   TweenMax.to($("#wenli-bg > img"), 0.5, {"left":wenliPos[wenli]+"px",ease: Sine. easeOut});	
				   $(".small3").hide();
				   $($(".small3").get(wenli)).show();
				   
				   
				   
			},
			swipeRight:function(event, direction, distance, duration, fingerCount) {
				   wenli--;
				   if(wenli<0){wenli=0}
				   TweenMax.to($("#wenli-bg > img"), 0.5, {"left":wenliPos[wenli]+"px",ease: Sine. easeOut});
				   $(".small3").hide();
				   $($(".small3").get(wenli)).show();
				   
				   
			},
			threshold:0
		  });
	
		 //生成按钮
	     $(".create-but").click(function(){
			 		//TweenMax.to($("#canvasapp"),0,{scale:1});
			 	    $("#canvasapp").unbind(); 
					var image = canvas.toDataURL("image/png");
					var b64 = image.substring( 22 );
					var name = $.uuid()
					var param = { data : b64, name :name ,index:wenli };
 
					$(".rewrite").hide();
					$(".create-but").hide();
					$(".page6tian").hide();
					$("#small3icon").hide(); 
					$(".next-but").hide();
					
					$("#topicon").hide();
					$("#topicon2").show(); 
					 
					$.post( window.savecanvas , param, function(data){
                               $("#page6bg").hide(); 
							   $("#canvasapp").hide();
							   $("#wenli-bg").hide();
							   
								
								
							   
							   
							   $(".changan").show();
							   $(".share-but").show();
							   $("#img-result").html("<img  src='"+window.public+"/upload/userimage/"+name+"big.png' style='width:auto;height:820px'/>")
					    });     
					 
			 })
			 
	   $(".share-but").click(function(){
		     $("#share-text").show();
		   });
	
	}	

function nextlogic(){
	   $(".page6tian").hide();
		stage.removeEventListener("stagemousedown", handleMouseDown);
		stage.removeEventListener("stagemousemove", handleMouseMove);
		stage.removeEventListener("stagemouseup", handleMouseUp);
	}
	 
function page0fadeIn(){ 
 			  $("#page0-hand0").css({"top":"300px","opacity":0})
		      $("#page0-hand1").css({"top":"-300px","opacity":0})
		      
			  //$("#page0-left-word > ul > li > img").css({top:"-200px","opacity":0})
			  //$("#page0-right-word > ul > li > img").css({"opacity":0})
			  $("#page0-left-text,#page0-right-text").css({"opacity":0})
			   
			  $("#page0-left-word").css({top:"-100px","opacity":0});
			  $("#page0-right-word").css({left:"336px",top:"622px","opacity":0});
			  
			  TweenMax.to($("#page0-hand0"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
			  TweenMax.to($("#page0-hand1"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
			  
		  
		 
		     TweenMax.to($("#page0-left-word"), 1, {top:"40px","opacity":1,ease: Sine. easeOut});
		     TweenMax.to($("#page0-right-word"), 1, {left:"336px",top:"522px","opacity":1,ease: Sine. easeOut});
		     ///TweenMax.to($("#page0-right-word"), 1, {top:"0px","opacity":1,ease: Sine. easeOut});
			 
			 /* var page0_leftTitle = new TimelineMax({ delay:1});
	 
			     $("#page0-left-word > ul > li > img").each(function() {
                     page0_leftTitle.add( TweenMax.to($(this), 0.3, {"opacity":1}) );
                 });
		 
			 
			  var page0_rightTitle = new TimelineMax({ delay:1});
			     $("#page0-right-word > ul > li > img").each(function(index, element) {
                     page0_rightTitle.add( TweenMax.to($(this), 0.3, {"opacity":1}) );
                 });*/
				 
			  TweenMax.to($("#page0-left-text"), 1, {delay:1,"opacity":1}); 
			  TweenMax.to($("#page0-right-text"), 1, {delay:1,"opacity":1}); 
			    
		} 

function page0fadeOut(){  
	    	  TweenMax.killAll();	
			  TweenMax.to($("#page0-hand0"), 0.2, {top:"300px","opacity":0,ease: Sine. easeOut});
			  TweenMax.to($("#page0-hand1"), 0.2, {top:"-300px","opacity":0,ease: Sine. easeOut});
			 // TweenMax.to($("#page0-left-word > ul > li > img"), 0.2, {"opacity":0,ease: Sine. easeOut});
			 // TweenMax.to($("#page0-right-word > ul > li > img"), 0.2, {"opacity":0,ease: Sine. easeOut});
			  TweenMax.to($("#page0-left-text"), 0.2, {"opacity":0}); 
			  TweenMax.to($("#page0-right-text"), 0.2, {"opacity":0}); 
			  TweenMax.to($("#page0-left-word"), 0.2, {top:"-100px","opacity":0,ease: Sine. easeOut});
			  TweenMax.to($("#page0-right-word"), 0.2, {top:"622px","opacity":0,ease: Sine. easeOut});
		} 
		
		
function page1fadeIn(){  
			  $("#page1 .mask-left > img").css({"left":"320px"});
			  $("#page1 .mask-right > img").css({"left":"-640px"});
			  
			  $(".s0").css({"left":"-100px","opacity":0});
			  $(".s1").css({"top":"-100px","opacity":0});
			  $(".s2").css({"top":"100px","opacity":0});
			  $(".s3").css({"top":"100px","opacity":0});
			  $(".s4").css({"top":"-100px","opacity":0}); 
			 // $(".page1-right-text0").css({"opacity":0}); 
			  $(".page1-right-text0,.shi").show();
			 
			  TweenMax.to($(".shi"), 0, {scale:0.5});	
			  TweenMax.to($(".shi"), 1, {scale:1.4});				
			  TweenMax.to($("#page1 .mask-left > img"), 1, {left:"0px"});
			  TweenMax.to($("#page1 .mask-right > img"), 1, {left:"-320px"});
			  
			  
			   
			  //TweenMax.to($(".page1-right-text0"), 1.5, {delay:1,"opacity":1});
			   TweenMax.to($(".s0"), 1.5, {delay:1,left:"0px","opacity":1});
			   TweenMax.to($(".s1"), 1.5, {delay:1,top:"0px","opacity":1});
			   TweenMax.to($(".s2"), 1.5, {delay:1,top:"0px","opacity":1});
			   TweenMax.to($(".s3"), 1.5, {delay:1,top:"0px","opacity":1});
			   TweenMax.to($(".s4"), 1.5, {delay:1,top:"0px","opacity":1}); 
}

function page1fadeOut(){  
	    	   TweenMax.killAll();
			   TweenMax.to($("#page1 .mask-left > img"), 1, {left:"320px"});
			   TweenMax.to($("#page1 .mask-right > img"), 1, {left:"-640px"});
			   $(".page1-right-text0,.shi").hide();
			   
			  
			  //TweenMax.to($(".page1-right-text0"), 0.3, {"opacity":0});
			   TweenMax.to($(".s0"), 0.3, {"left":"-100px","opacity":0});
			   TweenMax.to($(".s1"), 0.3, {"top":"-100px","opacity":0});
			   TweenMax.to($(".s2"), 0.3, {"top":"100px","opacity":0});
			   TweenMax.to($(".s3"), 0.3, {"top":"100px","opacity":0});
			   TweenMax.to($(".s4"), 0.3, {"top":"-100px","opacity":0}); 	  
}
	

		
function page2fadeIn(){  
			  $("#page2 .mask-left > img").css({"left":"320px"});
			  $("#page2 .mask-right > img").css({"left":"-640px"});
			  $(".page2-word-0").css({"left":"-100px","opacity":0});
			  $(".page2-word-1").css({"top":"-100px","opacity":0});
			  $(".page2-word-2").css({"top":"100px","opacity":0});
			  $(".page2-word-3").css({"top":"100px","opacity":0});  
			  $(".page2-title,.jie").show();
			  TweenMax.to($(".jie"), 0, {scale:0.5});	
			  TweenMax.to($(".jie"), 1, {scale:1.4});
			  
			   TweenMax.to($("#page2 .mask-left > img"), 1, {left:"0px"});
			   TweenMax.to($("#page2 .mask-right > img"), 1, {left:"-320px"});
			  
			   TweenMax.to($(".page2-title"), 1.5, {delay:1,"opacity":1});
			   TweenMax.to($(".page2-word-0"), 1.5, {delay:1,left:"0px","opacity":1});
			   TweenMax.to($(".page2-word-1"), 1.5, {delay:1,top:"0px","opacity":1});
			   TweenMax.to($(".page2-word-2"), 1.5, {delay:1,top:"0px","opacity":1});
			   TweenMax.to($(".page2-word-3"), 1.5, {delay:1,top:"0px","opacity":1});
}

function page2fadeOut(){  
	    	  TweenMax.killAll();
			   $(".page2-title,.jie").hide(); 
			  TweenMax.to($("#page2 .mask-left > img"), 1, {left:"320px"});
			  TweenMax.to($("#page2 .mask-right > img"), 1, {left:"-640px"});
			   TweenMax.to($(".page2-word-0"), 0.3, {"left":"-100px","opacity":0});
			   TweenMax.to($(".page2-word-1"), 0.3, {"top":"-100px","opacity":0});
			   TweenMax.to($(".page2-word-2"), 0.3, {"top":"100px","opacity":0});
			   TweenMax.to($(".page2-word-3"), 0.3, {"top":"100px","opacity":0});
}


		
function page3fadeIn(){  
			  $("#page3 .mask-left > img").css({"left":"320px"})
			  $("#page3 .mask-right > img").css({"left":"-640px"})  
			   $(".page3-title,.mai").show();
			  TweenMax.to($(".mai"), 0, {scale:0.5});	
			  TweenMax.to($(".mai"), 1, {scale:1.3});
			  
			  
			  $(".page3-word-0").css({"top":"100px","opacity":0});
			  $(".page3-word-1").css({"left":"-100px","opacity":0});
			  $(".page3-word-2").css({"left":"-100px","opacity":0});
			  $(".page3-word-3").css({"top":"-100px","opacity":0}); 
			  $(".page3-word-4").css({"left":"-100px","opacity":0});
			  $(".page3-word-5").css({"left":"100px","opacity":0});
			  $(".page3-word-6").css({"left":"100px","opacity":0}); 
			  $(".page3-word-7").css({"top":"100px","opacity":0});  
			  TweenMax.to($("#page3 .mask-left > img"), 1, {left:"0px"});
			  TweenMax.to($("#page3 .mask-right > img"), 1, {left:"-320px"});
			  TweenMax.to($(".page3-word-0"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page3-word-1"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page3-word-2"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page3-word-3"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page3-word-4"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page3-word-5"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page3-word-6"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page3-word-7"), 1.5, {delay:1,top:"0px","opacity":1});
			  
}

function page3fadeOut(){  
	    	  TweenMax.killAll();
			    $(".page3-title,.mai").hide(); 
			  TweenMax.to($("#page3 .mask-left > img"), 1, {left:"320px"});
			  TweenMax.to($("#page3 .mask-right > img"), 1, {left:"-640px"});
			   TweenMax.to($(".page3-word-0"), 0.3, {"top":"100px","opacity":0});
			   TweenMax.to($(".page3-word-1"), 0.3, {"left":"-100px","opacity":0});
			   TweenMax.to($(".page3-word-2"), 0.3, {"left":"-100px","opacity":0});
			   TweenMax.to($(".page3-word-3"), 0.3, {"top":"-100px","opacity":0});
			   TweenMax.to($(".page3-word-4"), 0.3, {"left":"-100px","opacity":0});
			   TweenMax.to($(".page3-word-5"), 0.3, {"left":"100px","opacity":0});
			   TweenMax.to($(".page3-word-6"), 0.3, {"left":"100px","opacity":0});
			   TweenMax.to($(".page3-word-7"), 0.3, {"top":"100px","opacity":0});
}
		
		
function page4fadeIn(){  
			  $("#page4 .mask-left > img").css({"left":"320px"})
			  $("#page4 .mask-right > img").css({"left":"-640px"})  
  			 
			  $(".page4-title,.jing").show();
			  TweenMax.to($(".jing"), 0, {scale:0.5});	
			  TweenMax.to($(".jing"), 1, {scale:1.3});
			  
			  
			  $(".page4-word-0").css({"left":"-100px","opacity":0});
			  $(".page4-word-1").css({"top":"-100px","opacity":0});
			  $(".page4-word-2").css({"top":"-100px","opacity":0});
			  $(".page4-word-3").css({"left":"-100px","opacity":0}); 
			  $(".page4-word-4").css({"left":"100px","opacity":0});  
			  TweenMax.to($("#page4 .mask-left > img"), 1, {left:"0px"});
			  TweenMax.to($("#page4 .mask-right > img"), 1, {left:"-320px"})
			  
			  TweenMax.to($(".page4-word-0"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page4-word-1"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page4-word-2"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page4-word-3"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page4-word-4"), 1.5, {delay:1,left:"0px","opacity":1});
			  
			  
}

function page4fadeOut(){  
	    	  TweenMax.killAll();
			  $(".page4-title,.jing").hide(); 
			  TweenMax.to($("#page4 .mask-left > img"), 1, {left:"320px"});
			  TweenMax.to($("#page4 .mask-right > img"), 1, {left:"-640px"})
			  TweenMax.to($(".page4-word-0"), 0.3, {"left":"-100px","opacity":0});
			  TweenMax.to($(".page4-word-1"), 0.3, {"top":"-100px","opacity":0});
			  TweenMax.to($(".page4-word-2"), 0.3, {"top":"-100px","opacity":0});
			  TweenMax.to($(".page4-word-3"), 0.3, {"left":"-100px","opacity":0});
			  TweenMax.to($(".page4-word-4"), 0.3, {"left":"100px","opacity":0});
}
		
		
function page5fadeIn(){  
			  //$("#arrow").hide();
			  //$("#page0-line").hide();
			  
			    TweenMax.to($("#page0-line"), 1, {delay:1,"opacity":0});
			  
			  $("#page5 .mask-left > img").css({"left":"320px"})
			  $("#page5 .mask-right > img").css({"left":"-640px"})  
			  $(".page5-title,.meng").show();
			  TweenMax.to($(".meng"), 0, {scale:0.5});	
			  TweenMax.to($(".meng"), 1, {scale:1.3});
			  
			  $(".page5-word-0").css({"top":"-100px","opacity":0});
			  $(".page5-word-1").css({"top":"-100px","opacity":0});
			  $(".page5-word-2").css({"top":"100px","opacity":0});
			  $(".page5-word-3").css({"left":"-100px","opacity":0}); 
			  $(".page5-word-4").css({"left":"100px","opacity":0});
			  $(".page5-word-5").css({"left":"100px","opacity":0}); 
			  $(".page5-word-6").css({"left":"100px","opacity":0});
			  
			  TweenMax.to($("#page5 .mask-left > img"), 1, {delay:0.3,left:"0px"});
			  TweenMax.to($("#page5 .mask-right > img"), 1, {delay:0.3,left:"-320px"});
			  
			  TweenMax.to($(".page5-word-0"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page5-word-1"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page5-word-2"), 1.5, {delay:1,top:"0px","opacity":1});
			  TweenMax.to($(".page5-word-3"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page5-word-4"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page5-word-5"), 1.5, {delay:1,left:"0px","opacity":1});
			  TweenMax.to($(".page5-word-6"), 1.5, {delay:1,left:"0px","opacity":1});
			   
}

function page5fadeOut(){  
	    	  TweenMax.killAll();
			  TweenMax.to($("#page5 .mask-left > img"), 1, {left:"320px"});
			  TweenMax.to($("#page5 .mask-right > img"), 1, {left:"-640px"})
			   $(".page5-title,.meng").hide();
			  TweenMax.to($("#page0-line"), 0.1, {"opacity":1});
			  
			  TweenMax.to($(".page5-word-0"), 0.3, {"top":"-100px","opacity":0});
			  TweenMax.to($(".page5-word-1"), 0.3, {"top":"-100px","opacity":0});
			  TweenMax.to($(".page5-word-2"), 0.3, {"top":"100px","opacity":0});
			  TweenMax.to($(".page5-word-3"), 0.3, {"left":"-100px","opacity":0});
			  TweenMax.to($(".page5-word-4"), 0.3, {"left":"100px","opacity":0});
			  TweenMax.to($(".page5-word-5"), 0.3, {"left":"100px","opacity":0});
			  TweenMax.to($(".page5-word-6"), 0.3, {"left":"100px","opacity":0});
			  
			  
}
			
		
var leftpagePos=[-5055,-4044,-3033,-2022,-1011,0];
var rightpagePos=[0,-1011,-2022,-3033,-4044,-5055];
var index = 0;
var currentIndex=0;
var prevIndex = 0;
var isplaying = false;
var dir=0;   //0 up 1 down;
function gotopage(index){
			
	         if(index<0){index = 0;}
			 if(index>5){index = 5;}
 
			 
			 isplaying = true;
			 currentIndex = index;
			if(dir==1){
			 try{ eval("page"+(index-1)+"fadeOut")();}catch(e){}
			}else{
			 try{ eval("page"+(index+1)+"fadeOut")();}catch(e){}
				}
			 
			 try{ eval("page"+index+"fadeIn")();}catch(e){}
			 TweenMax.to($(".left-page"), 1, {top:leftpagePos[index]+"px",ease: Sine. easeOut});
			 TweenMax.to($(".right-page"), 1, {top:rightpagePos[index]+"px",ease: Sine. easeOut});
			 setTimeout(function(){ isplaying = false;},1000)
			  
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
