<?php
namespace  zebra\platform\wx\getMessage;


/*
    链接消息
    参数 	描述
    ToUserName 	接收方微信号
    FromUserName 	发送方微信号，若为普通用户，则是一个OpenID
    CreateTime 	消息创建时间
    MsgType 	消息类型，link
    Title 	消息标题
    Description 	消息描述
    Url 	消息链接
    MsgId 	消息id，64位整型 
*/
class LinkGetMessage extends BaseGetMessage {
  
    /**
     * 消息标题
     * @var string 
     */
    public $title=null;
    
    /**
     * 消息描述
     * @var text 
     */
    public $description=null;  
    
    /**
     * 消息链接
     * @var text 
     */
    public $url=null;  
 
    
    public function __construct($postObj) {
        parent::__construct($postObj);
        $this->title =  $postObj->Title;
        $this->description =  $postObj->Description;
        $this->url =  $postObj->Url;
    }
      
    
}
