<?php
namespace  zebra\platform\wx\getMessage;


/**
 * 获得被动消息的基类
 */
class BaseGetMessage {
    
 /**
     *发送方帐号（一个OpenID）
     * @var string 
     */
    public $fromUserName=null;
    
    /**
     *开发者微信号
     * @var string 
     */
    public $toUserName=null;
    
    /**
     *消息创建时间 （整型）
     * @var string 
     */
    public $createTime="";
    
    /**
     *消息类型
     * @var string 
     */
    public $msgType=null; 
    
    /**
     * 消息id，64位整型
     * @var string 
     */
    public $msgId=null;

    
    
    
    /**
     * POST数据源的XML对象
     * @param type $postObj
     */
    public function __construct($postObj) {
        
        $this->fromUserName = $postObj->FromUserName;
        $this->toUserName = $postObj->ToUserName; 
        $this->createTime = $postObj->CreateTime;
        $this->msgType = $postObj->MsgType;
        if($postObj->MsgId){
            $this->msgId = $postObj->MsgId;
        }
    }

    /**
     * @return string openid
     */
    public function getOpenId(){
        return (string)$this->fromUserName;
    }

    /**
     * @return string
     */
    public function getPlatFormId(){
        return (string)$this->toUserName;
    }
}
