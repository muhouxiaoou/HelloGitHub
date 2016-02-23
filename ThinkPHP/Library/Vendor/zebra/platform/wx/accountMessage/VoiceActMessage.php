<?php

/**
 * Class VoiceActMessage
 * 发送客服语音消息
        {
        "touser":"OPENID",
        "msgtype":"voice",
        "voice":
        {
        "media_id":"MEDIA_ID"
        }
        }
 */
class VoiceActMessage {

    /**
     * OPENid
     * @var string
     */
    public  $openid="";

    /**
     * 客服文本消息
     * @var string
     */
    public  $msgType="voice";

    /**
     * 多媒体语音id
     * @var string
     */
    public $mediaId="";

    public  function __construct($openid=null){
        if($openid){
            $this->openid = $openid;
        }
    }

    public  function  data(){
        $textTpl = '{
                    "touser":"%s",
                    "msgtype":"%s",
                    "voice":
                        {
                            "media_id":"%s"
                        }
                    }
                 ';
        return sprintf($textTpl, $this->openid, $this->msgType, $this->mediaId);
    }



}