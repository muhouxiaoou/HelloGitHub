<?php
namespace  zebra\platform\wx\replyMessage;

/**
 * 被动回复语音消息
    参数 	是否必须 	说明
    ToUserName 	是 	接收方帐号（收到的OpenID）
    FromUserName 	是 	开发者微信号
    CreateTime 	是 	消息创建时间戳 （整型）
    MsgType 	是 	语音，voice
    MediaId 	是 	通过上传多媒体文件，得到的id 
 */
class VoiceReplyMessage  extends BaseReplyMessage{
    
    public $msgType = "voice";
    
    /**
     * 通过上传多媒体文件，得到的id。 
     * @var string 
     */
    public $mediaId = "";

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
                        <Voice>
                        <MediaId><![CDATA[%s]]></MediaId>
                        </Voice>
                     </xml>"; 
        
        return sprintf($textTpl, $this->toUserName, $this->fromUserName, $this->createTime, $this->msgType, $this->mediaId);
    }
    
}
