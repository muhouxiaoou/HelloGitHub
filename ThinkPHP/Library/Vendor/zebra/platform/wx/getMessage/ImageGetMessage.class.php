<?php
namespace  zebra\platform\wx\getMessage;


/*
图片消息
参数 	描述
ToUserName 	开发者微信号
FromUserName 	发送方帐号（一个OpenID）
CreateTime 	消息创建时间 （整型）
MsgType 	image
PicUrl 	图片链接
MediaId 	图片消息媒体id，可以调用多媒体文件下载接口拉取数据。
MsgId 	消息id，64位整型 
*/

class ImageGetMessage extends BaseGetMessage {
    
    /**
     * 图片链接
     * @var text 
     */
    public $picUrl=null;
    
    /**
     *图片消息媒体id，可以调用多媒体文件下载接口拉取数据。
     * @var string 
     */
    public $mediaId=null;

    public function __construct($postObj) {
        parent::__construct($postObj);
        $this->picUrl =  $postObj->PicUrl;
        $this->mediaId =  $postObj->MediaId;
    }
      
    
}
