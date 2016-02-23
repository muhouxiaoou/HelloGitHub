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
	  //init();	
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
				 //stage.clear();
                                 var context=$("#canvasapp").get(0).getContext("2d");
                                     context.clearRect(0,0,510,510);//清除画布上的指定区域；
				 $("#canvasapp").css({"top":"162px"})
				 if($(".create-but").css("display")!="none"){
					 
						 $(".next-but").show();
						 $(".create-but").hide();
						 $("#wenli-bg").hide();
                                                 $("#canvas-up").hide();
						 $("#small3icon").hide(); 
                                                 $(".page6tian").show();
				 		 TweenMax.to($("#canvasapp"),0,{scale:1});
						
						//stage.addEventListener("stagemousedown", handleMouseDown);
						//stage.addEventListener("stagemousemove", handleMouseMove);
						//stage.addEventListener("stagemouseup", handleMouseUp);

					 }
				 
			 })
		$(".next-but").click(function(){
				 nextlogic();
				 //$(".rewrite").hide(); 
				 $(".next-but").hide();
				 $(".create-but").show();
				 $("#wenli-bg").show();
                                 $("#canvas-up").show();
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
	
		 $("#canvas-up").swipe( {
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
			 	       //$("#canvasapp").unbind(); 
                                       
					var image = document.getElementById("canvasapp").toDataURL("image/png");
					var b64 = image.substring( 22 );
					var name = $.uuid();
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
							   $("#canvas-up").hide(); 
							   
							   $(".changan").show();
							   $(".share-but").show();
                                                           logoUrl = userimage+name+"small.png";
                                                           wx.ready(function () {
                                                                    shareOneFriend("我和你之间，就差一个字？");
                                                                    shareTimeline("我和你之间，就差一个字？")
                                                             });
                                                           
                                                           
							   $("#img-result").html("<img  src='"+window.public+"/upload/userimage/"+data+"big.png' style='width:auto;height:820px'/>")
					    });     
					 
			 })
			 
	   $(".share-but").click(function(){
		     $("#share-text").show();
		   });
	
	}	

function nextlogic(){
	   $(".page6tian").hide();
		//stage.removeEventListener("stagemousedown", handleMouseDown);
		//stage.removeEventListener("stagemousemove", handleMouseMove);
		//stage.removeEventListener("stagemouseup", handleMouseUp);
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
var mCanvas="canvasapp";
!function(){function a(a){return document.getElementById(a)}function b(){function f(){"number"==typeof window.orientation&&0!==window.orientation||"function"!=typeof b||location.reload()}if(window.onorientationchange=f,"number"==typeof window.orientation&&0!==window.orientation)alert(n.a1||"请旋转您的手机为竖立状态，在横屏界面下无法操作！"),f();else{b=null;var g=document.body.clientWidth*1.3,i=g/640;document.body.style.fontSize=32*i+"px";var o=a(mCanvas);var p=new e(o);p.b=g,window.PENSIZE&&(p.c=window.PENSIZE),window.redrawBrush=function(a){var b=!0,c=0,d=function(){var e=h[c],f=e.a,g=e.b;b&&(p.a.moveTo(f.x-p.i.left,f.y-p.i.top),p.e=null,p.s=0,p.d=[],p.lineWidth=p.c/2*(p.b/320),p.m=p.l=0,b=!1),e.bp?b=!0:p.q(f,g,!0),c++,c<h.length&&(a?setTimeout(d,f?f.r*a:60*a):d())};d()},window.getBrushTracks=function(){return h},window.setBrushTracks=function(a){h=a},document.ontouchmove=function(a){"CANVAS"==a.target.tagName&&a.preventDefault()};{a("palette")}}}

 function d(){}function e(a){if(a.nodeType)this.canvas=a;else{if("string"!=typeof a)return;this.canvas=document.getElementById(a)}this.D()}function f(a,b,c,d){if(!c.p.complete||!c.o.complete)return"";d=d||520,a=a||"png",b=b||.7;var e=document.createElement("canvas");e.width=e.height=d;var f,g,h,i,j=c.canvas.width,k=c.canvas.height;if(j/d>1.8)for(f=document.createElement("canvas"),g=document.createElement("canvas"),h=f.getContext("2d"),i=g.getContext("2d"),f.width=j,f.height=k,h.drawImage(c.canvas,0,0,j,k);j/d>1.8;)j=Math.round(.6*j),k=Math.round(.6*k),g.width=j,g.height=k,i.drawImage(f,0,0,j,k),f.width=j,f.height=k,h.drawImage(g,0,0,j,k);else f=c.canvas;return g=e.getContext("2d"),g.drawImage(c.o,0,0,d,d),g.drawImage(f,0,0,d,d),e.toDataURL("image/"+a,b)}var g="",h=[],i=navigator.userAgent.match(/ OS (\d+).*? Mac OS/)||!1,j="",k=0,l=-1!==navigator.userAgent.indexOf("NetType/WIFI"),m=-1!==navigator.userAgent.indexOf("Messenger"),n=window.LANG||{};m&&window.console&&window.console.log,e.prototype={lineWidth:1,color:"rgba(0,0,0, .6)",c:6,b:320,v:"./images/paper.jpg",k:0,D:function(){var a=this;if(this.canvas.getContext){this.a=this.canvas.getContext("2d"),this.a.strokeStyle=this.color,this.a.fillStyle=this.color,this.h(this.canvas,"selectstart",function(){return!1}),this.o=new Image,this.o.src=this.v,this.p=new Image,this.p.src="data:image/png;base64,"+g;var b=function(c){var d,e;if("touchstart"==c.type){if(2<=c.touches.length)return;d=c.touches[0].pageX,e=c.touches[0].pageY,a.f(a.canvas,"mousedown",b)}else d=c.pageX,e=c.pageY;a.F(d,e,c.type),c.preventDefault()};this.h(this.canvas,"touchstart",b),this.h(this.canvas,"mousedown",b)}},F:function(a,b,c){var d=this;this.i=this.canvas.getBoundingClientRect(),this.i={left:this.i.left+(window.scrollX||window.pageXOffset),top:this.i.top+(window.scrollY||window.pageYOffset)},window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty(),this.a.moveTo(a-this.i.left,b-this.i.top),this.e=null,this.s=0,this.d=[],this.lineWidth=this.c/2*(this.b/320),this.g&&(this.f(document,"mousemove",this.g),this.f(document,"touchmove",this.g)),this.g=function(a){var b,c;if("touchmove"==a.type){if(2<=a.touches.length)return;b=a.touches[0].pageX,c=a.touches[0].pageY}else b=a.pageX,c=a.pageY;d.t(b,c),a.preventDefault()},this.j=function(){d.G(),h.push({bp:!0})},"touchstart"==c?(this.h(document,"touchmove",this.g),this.h(document,"touchend",this.j)):(this.h(document,"mousemove",this.g),this.h(document,"mouseup",this.j)),this.w(),this.t(a,b)},t:function(a,b){var c;c=0,a-=this.i.left,b-=this.i.top,this.d.length&&(c=this.d[this.d.length-1],c=Math.sqrt((c.x-a)*(c.x-a)+(c.y-b)*(c.y-b)),0==c)||(this.k++,this.d.push({x:a,y:b,r:c}),3<=this.d.length&&(c=this.d.shift(),this.q(c)))},q:function(a,b,c){c||h.push({a:a,b:b});var d=a.x,e=a.y,f=a.r,g=i?4:2;if(!this.e||0!==f){var j=this.d.length?this.d[0]:null;if(f){if(this.a.moveTo(this.e.x,this.e.y),!this.s&&(this.s=1,j&&f>j.r*g))for(f/=4,g=1;4>=g;g++)this.u(d+g/4*(this.e.x-d),e+g/4*(this.e.y-e));b||(b=f<.003125*this.b?this.b/320*this.c*1.625:f<.00625*this.b?this.b/320*this.c*1.375:f<.009375*this.b?this.b/320*this.c*1.25:f<.015625*this.b?this.b/320*this.c*1.125:f<.021875*this.b?this.b/320*this.c:f<.028125*this.b?this.b/320*this.c*.875:f<.034375*this.b?this.b/320*this.c*.75:f<.046875*this.b?this.b/320*this.c*.625:f<.0625*this.b?this.b/320*this.c*.5:this.b/320*this.c*.375),this.n=b,Math.abs(this.lineWidth-this.n)>this.b/320*this.c*.025&&(this.lineWidth-=(this.lineWidth-this.n)/8,this.a.lineWidth=this.lineWidth)}this.e=a,this.u(d,e)}},G:function(){this.f(document,"mousemove",this.g),this.f(document,"touchmove",this.g),this.f(document,"mouseup",this.j),this.f(document,"touchend",this.j),--this.a.lineWidth;for(var a;this.d.length;)a=this.d.shift(),this.q(a,this.b/320*this.c/4)},A:function(){this.e=null,this.k=0,this.a.beginPath()},u:function(a,b){var c,d,e;if(this.a.fillStyle=this.color,this.a.strokeStyle=this.color,this.a.lineTo(this.e.x,this.e.y),this.a.stroke(),this.a.beginPath(),this.a.strokeStyle="rgba(0, 0, 0, 0)",(this.l||this.m)&&(c=this.l-a,d=this.m-b,e=Math.sqrt((this.l-a)*(this.l-a)+(this.m-b)*(this.m-b)),Math.abs(e)>this.lineWidth/3)){e=Math.floor(Math.abs(e)/(this.lineWidth/3));for(var f=1;e>=f;f++)Math.abs(this.lineWidth-this.n)>this.b/320*this.c*.025&&(this.lineWidth-=Math.round(this.lineWidth-this.n)/8,this.a.lineWidth=this.lineWidth),this.a.arc(this.l-f/e*c,this.m-f/e*d,this.lineWidth,0,2*Math.PI),this.a.fill(),this.a.stroke(),this.a.beginPath()}this.a.arc(a,b,this.lineWidth,0,2*Math.PI),this.a.fill(),this.a.stroke(),this.a.beginPath(),this.l=a,this.m=b},w:function(){this.m=this.l=0},h:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},f:function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},B:function(a,b){return f(a,b,this,590)},C:function(a,b){return f(a,b,this,80)}},b()}();
