<?php
namespace  zebra\platform\wx\getMessage;


/*
    地理位置消息
    参数 	描述
    ToUserName 	开发者微信号
    FromUserName 	发送方帐号（一个OpenID）
    CreateTime 	消息创建时间 （整型）
    MsgType 	location
    Location_X 	地理位置维度
    Location_Y 	地理位置经度
    Scale 	地图缩放大小
    Label 	地理位置信息
    MsgId 	消息id，64位整型 
*/
class LocationGetMessage extends BaseGetMessage {
  
    /**
     * 地理位置维度
     * @var string 
     */
    public $locationX=null;
    
    /**
     * 地理位置经度
     * @var string 
     */
    public $locationY=null;  
    
    /**
     * 地图缩放大小
     * @var string 
     */
    public $scale=null;  
    
    /**
     * 地理位置信息
     * @var string 
     */
    public $label=null;
    
    public function __construct($postObj) {
        parent::__construct($postObj);
        $this->locationX =  $postObj->Location_X;
        $this->locationY =  $postObj->Location_Y;
        $this->scale =  $postObj->Scale;
        $this->label =  $postObj->Label;
    }
      
    
}
