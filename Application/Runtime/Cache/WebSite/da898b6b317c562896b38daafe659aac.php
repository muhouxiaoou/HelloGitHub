<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="target-densitydpi=device-dpi, width=640px, user-scalable=no" />
<meta name="format-detection" content="telephone=no"/>
<title>app</title>
<link rel="stylesheet" type="text/css" href="/huawei/xiaok/xk/Public/css/app.zebra.css">
    <script   src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script data-main="/huawei/xiaok/xk/Public/lib/app.document" src="/huawei/xiaok/xk/Public/lib/loader/require.js"></script>
    <style>
        #bingxiang_1{left:166px;top:312px;}
        #bingxiang_2{left:148px;top:300px;}
        #bingxiang_3{left:148px;top:300px;}
        #bingxiang_4{left:79px;top:300px;}
        #dise{left:15px;top:644px;}
        #dixiawenzi{left:85px;top:864px;}
        #wenzi_1{left:90px;top:59px;}
        #wenzi_2{left:90px;top:59px;}
        #wenzi_3{left:90px;top:59px;}
        #daxiang{left:154px;top: 434px;}

        #page2_anniu{left:130px;top:801px;}
        #houdongshuoming{left:155px;top:933px;}
        #shouji{left:187px;top:251px;}
        #wenzi{left:90px;top:27px;}
        #zhongjiangmingdan{left:352px;top:933px;}
        #guanbi{left:578px;top: 35px;}
        #gundongtiao{left:592px;top: 121px;}
        #houdongguizhi{left:44px;top:0px;}
        /* 滚动条滑块 */
        #div_hdgz::-webkit-scrollbar-thumb {border-radius: 10px;background:#3EB2FB;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);}
        #div_hdgz::-webkit-scrollbar-thumb:window-inactive {background: #3EB2FB;}
        /* 设置滚动条的样式 */
        #div_hdgz::-webkit-scrollbar {    width: 5px;}
        /* 滚动槽 */
        #div_hdgz::-webkit-scrollbar-track {    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);    border-radius: 10px;}


        #mingdan{left:18px;top:131px}
        #x_2{left:506px;top:142px}

        #zjr div{ width: 360px;height: 57px;font-size: 30px; line-height: 58px; color: #ffffff;}
        .dhhm{margin-left: 80px;}

        /*page3*/
        .swiper-container{width: 640px;height: 825px;}
        .swiper-wrapper{width: 640px;height: 825px;padding-top: 45px;padding-left: 36px;padding-right: 36px;position: relative;}
        .swiper-wrapper .div_hbbg{margin-left: 23px;margin-top: 15px;float: left;}
        .div_hbbg img{height: 135px;}
        .swiper-pagination-bullet{width: 12px;height: 12px;background-color:#000000;opacity: 1 }
        .swiper-pagination-bullet-active{width: 12px;height: 12px;background-color:#ffffff ;border:1px solid #000000;}

        #icon_botton{left: 36px;top: 845px;}
        #paizhao{left:62px;top:109px}
        #shenghou{left:62px;top:109px}
        #tuoxun{left:62px;top:109px}

        #an_2{left:264px;top:238px}
        #an_3{left:112px;top:238px}
        #an_4{left:416px;top:236px}
        #an_14{left:264px;top:237px}
        #an_15{left:112px;top:238px}
        #an_16{left:416px;top:236px}
        #an_17{left:264px;top:237px}
        #an_18{left:111px;top:237px}
        #an_19{left:264px;top:401px}
        #an_20{left:111px;top:400px}

        #timu_gb{left:532px;top:249px}
        #xzts_gb{left:532px;top:249px}

        #xzts_aaa{left:41px;top:232px}
        #gongming{left:54px;top:236px}
        #mingwangxin{left:54px;top:236px}
        #xiaojianren{left:53px;top:238px}
        #xzts_yan{left:41px;top:230px}

        /*计时*/
        #page_js{left: 180px;top:0px;z-index: 99999}

        /*page12*/
        #shouji_12{left: 125px; top: 0px;}
        #zldnswz{left:98px;top: 782px;}
        #gqzx{left: 264px;top:242px;}
        #gqb1{left:242px;top:220px;}
        #gqb2{left:242px;top:220px;}

        #gqzx_2{left: 178px;top:270px;}
        #gqb1_2{left:158px;top:250px;}
        #gqb2_2{left:158px;top:250px;}

        #shouji_bj{left: 180px;top: 82px;}
        #sj_mwx{left: 195px;top: 129px;}
        #sj_xjr{left: 195px;top: 129px;}

        #anniu_12_1{left:27px;top:785px}
        #anniu_12_2{left:328px;top:786px}
        #anniu_12_3{left:27px;top:890px}
        #anniu_12_4{left:329px;top:891px}
        #zhiling{left:24px;top:21px}

        #fxtp{left:143px;top:96px}

        #anniu_tj{left:132px;top:854px}
        #dianhua{left:55px;top:714px}
        #erweima{left:75px;top:63px}
        #lianxiren{left:55px;top:592px}

        #tjcg_daxiang{left: 39px;top:227px;}
        #tjcg_xxx{left: 540px;top: 237px;}

        #page111_wenzi_1{left:27px;top:29px}
        #page111_an{left:147px;top:544px}
        #page111_anniu{left:130px;top:853px}


        /*#load_zt{left: 120px;top: 515px;}*/
        #load_wz{left: 274px;top: 564px;}
        #load_jdt{left: 120px;top: 515px;}
        #load_dx{left: 98px;top: 412px;}
        #load_bx{left: 433px;top: 360px;}
        .mCSB_inside>.mCSB_container {
            margin-right: 0px;
        }
        #mCSB_1_scrollbar_vertical{left:610px}
    </style>
</head>
<body style="background-color: #22A9EB">
<!--小象声音-->
    <audio id="xxsy" src="/huawei/xiaok/xk/Public/sound/xxsys.mp3" controls class="pull-air hide" style="top:-1000px"  ></audio>
<!--diang-->
    <audio id="diang" src="/huawei/xiaok/xk/Public/sound/diang.mp3" controls class="pull-air hide" style="top:-1000px"  ></audio>
<!--冰箱关门-->
    <audio id="bxgm" src="/huawei/xiaok/xk/Public/sound/bxgm.mp3" controls class="pull-air hide" style="top:-1000px"  ></audio>
<!--错误层弹框-->
    <audio id="cwtk" src="/huawei/xiaok/xk/Public/sound/cwtk.mp3" controls class="pull-air hide" style="top:-1000px"  ></audio>
<!--打开冰箱门音效(01)-->
    <audio id="bxkm" src="/huawei/xiaok/xk/Public/sound/bxkm.mp3" controls class="pull-air hide" style="top:-1000px"  ></audio>
<!--微信消息提示音-->
    <audio id="wxtsy" src="/huawei/xiaok/xk/Public/sound/wxtsy.mp3" controls class="pull-air hide" style="top:-1000px"  ></audio>
<!--setTimeout(function(){
                    $("#kuaimen")[0].play()
                },300)-->
     <div role="app-loader" class="pull-air noscroll fullContainer" style="width:640px;height:1008px;">
         <img src="/huawei/xiaok/xk/Public/images/bingxiang/beijing.jpg" class="pull-air"/>
         <img src="/huawei/xiaok/xk/Public/images/loading/load_bx.png" class="pull-air" id="load_bx"/>
         <div class="pull-air"  id="load_dx">
            <img src="/huawei/xiaok/xk/Public/images/loading/load_dx.png" class="pull-air" id="load_dxs"/>
         </div>
         <img src="/huawei/xiaok/xk/Public/images/loading/load_jdt.png" class="pull-air" id="load_jdt"/>
         <div class="pull-air" style="width: 404px; height:17px;overflow: hidden;left: 120px;top: 515px;">
             <div class="pull-air" style="width: 404px; height:17px;overflow: hidden;" id="div_jd">
                <img src="/huawei/xiaok/xk/Public/images/loading/load_zt.png" class="pull-air" id="load_zt"/>
             </div>
         </div>
         <img src="/huawei/xiaok/xk/Public/images/loading/load_wz.png" class="pull-air" id="load_wz"/>
         <!--<div class="pull-air" id="loadertext" style="font-size: 80px;color: #ffffff">-->

         <!--</div>-->
     </div>
     <div role="app-header"  class="pull-air"></div>
     <div role="app-content" class="pull-air noscroll fullContainer" style="width:640px;height:1008px;">

     </div>
     <div role="app-mask" class="pull-air">
         <div class="bgBlackOpacity-8  pull-air hide" id="xc-mask">
             <img class="pull-air" src="/huawei/xiaok/xk/Public/images/5/xxxx.png" style="left:41px;top:202px" />
             <img class="pull-air" src="/huawei/xiaok/xk/Public/images/5/xx.png" style="left:520px;top:213px" id="myCloseBut" />
         </div>
     </div>
     <div role="app-footer" class="pull-air"></div>
</body>

<script> 
  	function pageInitialize(){

        var pageloader =  new PageLoader("<?php echo U('Website/Index/index11');?>");
        pageloader.addEventListener(PageLoader.ImageLoading,function(e){
            $("#loadertext").html(pageloader.process+"%");
            var a=pageloader.process/100;
            var b=a*404+"px";
            var c=a*180+"px";
            $("#load_dxs").css("left",c);
            $("#load_zt").css("left",b);
        })
        pageloader.addEventListener(PageLoader.Complete,function(e){
            $(app.role("app-loader")).remove();
            app.role("app-content").append(e.data.content);

            pageInitializes();
//            page10Ready();
            page1fadeIn();
        })
        pageloader.start();
	}
</script>
<script>

    wx.config({
        debug: true,
        appId: '<?php echo ($appid); ?>',
        timestamp: '<?php echo ($jssdk["timestamp"]); ?>',
        nonceStr: '<?php echo ($jssdk["nonceStr"]); ?>',
        signature: '<?php echo ($jssdk["signature"]); ?>',
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'addCard',
            'chooseCard',
            'openCard',
            'hideMenuItems'
            // 所有要调用的 API 都要加到这个列表中
        ]
    });
</script>
</html>