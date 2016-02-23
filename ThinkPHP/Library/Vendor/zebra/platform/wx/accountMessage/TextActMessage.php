<?php
/**
 * Created by PhpStorm.
 * User: raymond
 * Date: 2015/6/12
 * Time: 16:04
 */
class TextActMessage {

    /**
     * OPENid
     * @var string
     */
    public  $openid="";

    /**
     * 客服文本消息
     * @var string
     */
    public  $msgType="text";

    /**
     * 内容
     * @var string
     */
    public  $content="";
    public  function __construct($openid=null){
        if($openid){
            $this->openid = $openid;
        }
    }
    public  function  data(){
        $textTpl = '{
                    "touser":"%s",
                    "msgtype":"%s",
                    "text":
                    {
                         "content":"%s"
                    }
                }
            ';
        return sprintf($textTpl, $this->openid, $this->msgType, $this->content);
    }



}