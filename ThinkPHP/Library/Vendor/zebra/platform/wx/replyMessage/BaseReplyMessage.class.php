<?php
namespace  zebra\platform\wx\replyMessage;
/*
 *回复类基类
 */

class BaseReplyMessage {
    
    /**
     *接收方帐号（收到的OpenID）
     * @var string 
     */
    public  $toUserName = null;
    
    /**
     *开发者微信号
     * @var string 
     */
    public  $fromUserName=null;
    
    /**
     *消息创建时间 （整型）
     * @var string 
     */
    public $createTime=null;
    
    /**
     *消息类型
     * @var string 
     */
    public $msgType=null;
    
    /**
     * POST的数据源
     * @param type $postObj
     */
    public function __construct($postObj=null) {
        if($postObj && $postObj->FromUserName){
            $this->fromUserName =$postObj->ToUserName; 
            $this->toUserName = $postObj->FromUserName;
        }else  if($postObj && $postObj->fromUserName){
            $this->fromUserName = $postObj->toUserName;
            $this->toUserName = $postObj->fromUserName;
        }
        $createTime = time();
    }
    
    /**
     *接收方帐号（收到的OpenID）
     * @var string 
     */
     public function getOpenId(){
        return $this->toUserName;
    }
    /**
     *开发者微信号
     * @var string 
     */
     public function getPlatFormId(){
        return $this->fromUserName;
    }
    
    /**
     * 被动回复的内容
     * @return string
     */
    public  function data(){
        return "";
    }

//FromUserName	是	开发者微信号
//CreateTime	是	消息创建时间 （整型）
//MsgType	是	text
    
    
}
