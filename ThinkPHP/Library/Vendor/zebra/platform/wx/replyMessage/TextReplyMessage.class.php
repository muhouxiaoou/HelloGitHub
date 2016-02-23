<?php
namespace  zebra\platform\wx\replyMessage;

/**
 * 被动回复文本消息
    参数 	是否必须 	描述
    ToUserName 	是 	接收方帐号（收到的OpenID）
    FromUserName 	是 	开发者微信号
    CreateTime 	是 	消息创建时间 （整型）
    MsgType 	是 	text
    Content 	是 	回复的消息内容（换行：在content中能够换行，微信客户端就支持换行显示） 
 */
class TextReplyMessage  extends BaseReplyMessage{
    
    public $msgType="text";
    
    /**
     * 消息内容
     * @var string 
     */
    public $content="";

    /**
     * 被动回复的内容
     * @return string
     */
    public function data() {
        $textTpl = "<xml>
                     <ToUserName><![CDATA[%s]]></ToUserName>
                     <FromUserName><![CDATA[%s]]></FromUserName>
                     <CreateTime>%s</CreateTime>
                     <MsgType><![CDATA[%s]]></MsgType>
                     <Content><![CDATA[%s]]></Content>
                     </xml>"; 
        return sprintf($textTpl, $this->toUserName, $this->fromUserName, $this->createTime, $this->msgType, $this->content);
    }
    
}
