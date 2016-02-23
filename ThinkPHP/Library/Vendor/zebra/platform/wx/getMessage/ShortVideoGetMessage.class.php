<?php
namespace  zebra\platform\wx\getMessage;

/*
小视频消息
参数 	描述
ToUserName 	开发者微信号
FromUserName 	发送方帐号（一个OpenID）
CreateTime 	消息创建时间 （整型）
MsgType 	小视频为shortvideo
MediaId 	视频消息媒体id，可以调用多媒体文件下载接口拉取数据。
ThumbMediaId 	视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。
MsgId 	消息id，64位整型 
*/

class ShortVideoGetMessage extends BaseGetMessage {
  
    /**
     * 视频消息媒体id，可以调用多媒体文件下载接口拉取数据。
     * @var string 
     */
    public $mediaId=null;
    
      
    /**
     * 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。
     * @var string 
     */
    public $thumbMediaId=null;
    
    

    public function __construct($postObj) {
        parent::__construct($postObj);
        $this->mediaId =  $postObj->MediaId;
        $this->thumbMediaId =  $postObj->ThumbMediaId;
    }
      
    
}
