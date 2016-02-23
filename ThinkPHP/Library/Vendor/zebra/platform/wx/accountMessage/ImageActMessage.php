<?php

/**
 * Class ImageActMessage
 * 发送图片消息
    {
    "touser":"OPENID",
    "msgtype":"image",
    "image":
    {
    "media_id":"MEDIA_ID"
    }
    }
 */
class ImageActMessage {

    /**
     * OPENid
     * @var string
     */
    public  $openid="";

    /**
     * 客服文本消息
     * @var string
     */
    public  $msgType="image";

    /**
     * 多媒体图片id
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
                    "image":
                        {
                            "media_id":"%s"
                        }
                    }
                ';
        return sprintf($textTpl, $this->openid, $this->msgType, $this->mediaId);
    }



}