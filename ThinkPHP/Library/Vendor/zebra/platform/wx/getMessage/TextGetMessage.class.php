<?php
namespace  zebra\platform\wx\getMessage;

/*
    ToUserName	开发者微信号
    FromUserName	发送方帐号（一个OpenID）
    CreateTime	消息创建时间 （整型）
    MsgType	text
    Content	文本消息内容
    MsgId	消息id，64位整型
*/

class TextGetMessage extends BaseGetMessage {
    
    /**
     * 用户微信输入框中输入的内容
     * @var string 
     */
    public $content=null;
    
    public function __construct($postObj) {
        parent::__construct($postObj);
        $this->content = trim((string)$postObj->Content);
    }
      
    
}
