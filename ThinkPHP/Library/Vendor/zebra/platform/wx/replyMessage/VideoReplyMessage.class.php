<?php
namespace  zebra\platform\wx\replyMessage;

/**
 * 被动回复视频
        参数 	是否必须 	说明
     ToUserName 	是 	接收方帐号（收到的OpenID）
     FromUserName 	是 	开发者微信号
     CreateTime 	是 	消息创建时间 （整型）
     MsgType 	是 	video
     MediaId 	是 	通过上传多媒体文件，得到的id
     Title 	否 	视频消息的标题
     Description 	否 	视频消息的描述 
 */
class VideoReplyMessage  extends BaseReplyMessage{
    
    public $msgType = "video";
    
    /**
     * 通过上传多媒体文件，得到的id。 
     * @var string 
     */
    public $mediaId = "";
    
    
    /**
     *视频消息的标题
     * @var string 
     */
    public $title = "";
    
    /**
     *视频消息的描述
     * @var string 
     */
    public $description="";



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
                    <Video>
                    <MediaId><![CDATA[%s]]></MediaId>
                    <Title><![CDATA[%s]]></Title>
                    <Description><![CDATA[%s]]></Description>
                    </Video> 
                    </xml>"; 
        
        return sprintf($textTpl, $this->toUserName, $this->fromUserName, $this->createTime, $this->msgType, $this->mediaId, $this->title, $this->description);
    }
    
}
