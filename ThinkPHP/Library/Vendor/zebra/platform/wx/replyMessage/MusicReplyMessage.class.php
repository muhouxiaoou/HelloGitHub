<?php
namespace  zebra\platform\wx\replyMessage;
/**
 * 被动回复音乐消息
    ToUserName 	是 	接收方帐号（收到的OpenID）
    FromUserName 	是 	开发者微信号
    CreateTime 	是 	消息创建时间 （整型）
    MsgType 	是 	music
    Title 	否 	音乐标题
    Description 	否 	音乐描述
    MusicURL 	否 	音乐链接
    HQMusicUrl 	否 	高质量音乐链接，WIFI环境优先使用该链接播放音乐
    ThumbMediaId 	是 	缩略图的媒体id，通过上传多媒体文件，得到的id 
 */
class MusicReplyMessage  extends BaseReplyMessage{
    
    public $msgType = "music";
    
    /**
     * 音乐标题
     * @var string 
     */
    public $title = "";
    
    /**
     * 音乐描述
     * @var string 
     */
    public $description = "";
    
    /**
     * 音乐链接
     * @var string 
     */
    public $musicURL = "";
    
    /**
     * 高质量音乐链接，WIFI环境优先使用该链接播放音乐
     * @var string 
     */
    public $hQMusicUrl = "";
    
    /**
     * 缩略图的媒体id，通过上传多媒体文件，得到的id
     * @var string 
     */
    public $thumbMediaId = "";

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
        $textTpl = "<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Music>
                        <Title><![CDATA[%s]]></Title>
                        <Description><![CDATA[%s]]></Description>
                        <MusicUrl><![CDATA[%s]]></MusicUrl>
                        <HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
                        <ThumbMediaId><![CDATA[%s]]></ThumbMediaId>
                        </Music>
                        </xml>"; 
        return sprintf($textTpl, $this->toUserName, $this->fromUserName, $this->createTime, $this->msgType,$this->title,$this->description,$this->musicURL,$this->hQMusicUrl,$this->thumbMediaId);
    }
    
}
