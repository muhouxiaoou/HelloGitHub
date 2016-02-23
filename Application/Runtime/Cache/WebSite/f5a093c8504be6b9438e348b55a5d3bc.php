<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="target-densitydpi=device-dpi, width=640px, user-scalable=no" />
<meta name="format-detection" content="telephone=no"/>
<title>app</title>
<link rel="stylesheet" type="text/css" href="/huawei/trouble/mobile/Public/css/app.zebra.css">

<script data-main="/huawei/trouble/mobile/Public/lib/app.document" src="/huawei/trouble/mobile/Public/lib/loader/require.js"></script>
    <style>
        /*#load_zt{left: 120px;top: 515px;}*/
        #load_wz{left: 274px;top: 564px;}
        #load_jdt{left: 120px;top: 515px;}
        #load_dx{left: 98px;top: 412px;}
        #load_bx{left: 433px;top: 360px;}
    </style>
</head>
<body >

     <div role="app-loader" class="pull-air">
         <img src="/huawei/trouble/mobile/Public/images/bingxiang/beijing.jpg" class="pull-air"/>
         <img src="/huawei/trouble/mobile/Public/images/loading/load_bx.png" class="pull-air" id="load_bx"/>
         <img src="/huawei/trouble/mobile/Public/images/loading/load_dx.png" class="pull-air" id="load_dx"/>
         <img src="/huawei/trouble/mobile/Public/images/loading/load_jdt.png" class="pull-air" id="load_jdt"/>
         <div class="pull-air" style="width: 404px; height:17px;overflow: hidden;left: 120px;top: 515px;">
             <div class="pull-air" style="width: 404px; height:17px;overflow: hidden;" id="div_jd">
                <img src="/huawei/trouble/mobile/Public/images/loading/load_zt.png" class="pull-air" id="load_zt"/>
             </div>
         </div>
         <img src="/huawei/trouble/mobile/Public/images/loading/load_wz.png" class="pull-air" id="load_wz"/>
         <!--<div class="pull-air" id="loadertext" style="font-size: 80px;color: #ffffff">-->

         <!--</div>-->
     </div>
     <div role="app-header"  class="pull-air"></div>
     <div role="app-content" class="pull-air">

     </div>
     <div role="app-mask" class="pull-air">
         <div class="bgBlackOpacity-8  pull-air hide" id="xc-mask">
             <img class="pull-air" src="/huawei/trouble/mobile/Public/images/5/xxxx.png" style="left:41px;top:202px" />
             <img class="pull-air" src="/huawei/trouble/mobile/Public/images/5/xx.png" style="left:520px;top:213px" id="myCloseBut" />
         </div>
     </div>
     <div role="app-footer" class="pull-air"></div>
</body>

<script> 
  	function pageInitialize(){

        var pageloader =  new PageLoader("<?php echo U('Website/Index/appgo');?>");
        pageloader.addEventListener(PageLoader.ImageLoading,function(e){
            $("#loadertext").html(pageloader.process+"%");
            var a=pageloader.process/100;
            var b=a*404+"px";
            $("#load_zt").css("left",b);
        })
        pageloader.addEventListener(PageLoader.Complete,function(e){
            $(app.role("app-loader")).remove();
            app.role("app-content").append(e.data.content);
            page1fadeIn();
            pageInitializes();
        })
        pageloader.start();
	}
</script>

</html>