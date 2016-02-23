<?php

namespace  zebra\platform\wx\getMessage;

/**
 * 关注公众号事件
 *  ToUserName	开发者微信号
    FromUserName	发送方帐号（一个OpenID）
    CreateTime	消息创建时间 （整型）
    MsgType	消息类型，event
    Event	事件类型，subscribe
    EventKey	事件KEY值，qrscene_为前缀，后面为二维码的参数值
    Ticket	二维码的ticket，可用来换取二维码图片
 */
class SubscribeGetMessage extends BaseGetMessage {
    
    /**
     * 事件类型，subscribe,unsubscribe
     * @var string 
     */
    public  $event=null;
    
    /**
     *事件KEY值，qrscene_为前缀，后面为二维码的参数值
     * @var string
     */
    private $eventKey=null;
    
    
    /**
     * 关注
     * @return string
     */

    /**
     * 关注
     * @return bool
     */
    public function IsSubscribe(){
        return $this->event=="subscribe";
    }

    /**
     * 取消关注
     * @return bool
     */
    public function IsUnSubscribe(){
        return $this->event=="unsubscribe";
    }
    
    public function __construct($postObj) {
        parent::__construct($postObj);
        $this->event = $postObj->Event;
        if($postObj->EventKey){
            $this->eventKey = $postObj->EventKey;
        }
    }
    
    /**
     * 是否为二维码关注的
     * @return boolean
     */
    public function IsQR(){
        if($this->eventKey!=null){
            return true;
        }
        return false;
    }
}
