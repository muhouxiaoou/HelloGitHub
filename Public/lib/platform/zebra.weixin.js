

function weixin(){

 
    this.is_weixn=function(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			return true;
		} else {
			return false;
		}
	}
    
}

/*
 wx.config({
    debug: true,
    appId: '{$appid}',
    timestamp: '{$signPackage.timestamp}',
    nonceStr: '{$signPackage.nonceStr}',
    signature: '{$signPackage.signature}',
    jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
      // 所有要调用的 API 都要加到这个列表中
    ]
  });
  
  
 wx.ready(function () {
                sharelogic(title,desc);
                wx.hideOptionMenu();
          }) 
          
function sharelogic(title,desc){
           wx.onMenuShareTimeline({
                             title: title, // 分享标题
                             link: shareUrl, // 分享链接
                             imgUrl: logoUrl,
                             success: function () { 
                                _hmt.push(['_trackEvent', '微信分享', 'share']);
                                page4Ready();
                             },
                             cancel: function () { 
                           
                             }
                           });
                           
            wx.onMenuShareAppMessage({
                            title: title, // 分享标题
                            desc: desc, // 分享描述
                            link: shareUrl, // 分享链接
                            imgUrl:logoUrl,
                            type: '', // 分享类型,music、video或link，不填默认为link
                            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                            success: function () { 
                                _hmt.push(['_trackEvent', '微信分享', 'share']);
                                 page4Ready();
                            },
                            cancel: function () { 
                                
                            }
                        });
            wx.onMenuShareQQ({
                            title: title, // 分享标题
                            desc: desc, // 分享描述
                            link: shareUrl, // 分享链接
                            imgUrl: logoUrl,
                            success: function () { 
                                _hmt.push(['_trackEvent', '微信分享', 'share']);
                                 page4Ready();
                            },
                            cancel: function () { 
                               
                            }
                        });
            wx.onMenuShareWeibo({
                            title: title, // 分享标题
                            desc: desc, // 分享描述
                            link: shareUrl, // 分享链接
                            imgUrl: logoUrl,
                            success: function () { 
                                _hmt.push(['_trackEvent', '微信分享', 'share']);
                                  page4Ready();
                            },
                            cancel: function () { 
                              
                            }
                        });
}*/