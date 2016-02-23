<?php
namespace zebra\platform\wx;

use zebra\event\EventEmitter;
use zebra\platform\wx\getMessage\BaseGetMessage;
use zebra\platform\wx\getMessage\ImageGetMessage;
use zebra\platform\wx\getMessage\LinkGetMessage;
use zebra\platform\wx\getMessage\LocationGetMessage;
use zebra\platform\wx\getMessage\ShortVideoGetMessage;
use zebra\platform\wx\getMessage\SubscribeGetMessage;
use zebra\platform\wx\getMessage\TextGetMessage;
use zebra\platform\wx\getMessage\VideoGetMessage;
use zebra\platform\wx\getMessage\VoiceGetMessage;


use zebra\platform\wx\replyMessage\BaseReplyMessage;
use zebra\platform\wx\replyMessage\ImageReplyMessage;
use zebra\platform\wx\replyMessage\MusicReplyMessage;
use zebra\platform\wx\replyMessage\NewsReplyMessage;
use zebra\platform\wx\replyMessage\TextReplyMessage;
use zebra\platform\wx\replyMessage\VideoReplyMessage;
use zebra\platform\wx\replyMessage\VoiceReplyMessage;

                      

class weixin   extends EventEmitter
{

    public $TOKEN = "zebramedia";

    /**
     *文本消息
     * @var string 
     */
    const MESSAGE_TEXT = "text";

    /**
     *图片消息
     * @var string
     */
    const MESSAGE_IMAGE = "image";
    /**
     *语音消息
     * @var string
     */
    const MESSAGE_VOICE = "voice";
    /**
     *视频消息
     * @var string
     */
    const MESSAGE_VIDEO = "video";
    /**
     *小视频消息
     * @var string
     */
    const MESSAGE_SHORTVIDEO = "shortvideo ";

    /**
     *地理位置消息
     * @var string
     */
    const MESSAGE_LOCATION = "location";

    /**
     *链接消息
     * @var string
     */
    const MESSAGE_LINK = "link";

    /**
     * 关注和取消关注时间
     * @var string
     */
    const MESSAGE_SUBSCRIBE = "subscribe";

    /**
     * 事件消息
     * @var string
     */
    const MESSAGE_EVENT = "event";

   public function valid()
    {
        $echoStr = $_GET["echostr"];
        if($this->checkSignature($this->TOKEN)){
        	echo $echoStr;
        	exit;
        }
    }

    public function responseMsg()
     {
            $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
            if (!empty($postStr)){
                libxml_disable_entity_loader(true);
                $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                      
                 switch($postObj->MsgType){
                      case self::MESSAGE_TEXT:
                           $textGetMsg  = new  TextGetMessage($postObj);
                           $this->emit(self::MESSAGE_TEXT,$textGetMsg);
                           exit;
                      break;
                       case self::MESSAGE_IMAGE:
                           $imageGetMsg  = new ImageGetMessage($postObj);
                           $this->emit(self::MESSAGE_IMAGE,$imageGetMsg);
                           exit;
                      break;
                       case self::MESSAGE_LOCATION:
                           $locationGetMsg  = new LocationGetMessage($postObj);
                           $this->emit(self::MESSAGE_LOCATION,$locationGetMsg);
                           exit;
                      break;
                      case self::MESSAGE_EVENT:
                            if($postObj->Event && ($postObj->Event=="subscribe" || $postObj->Event=="unsubscribe")){
                                $subscribeGetMessage  = new SubscribeGetMessage($postObj);
                                $this->emit(self::MESSAGE_SUBSCRIBE,$subscribeGetMessage);
                            }
                            exit;
                      break;
                }
                      
                
            }else{
                  echo "";
                  exit;
            }
     }

        
    /**
     * 判断此次请求是否为验证请求
     * @return boolean
     */
    public function isValid() {
        return isset($_GET['echostr']);
    }


    private function checkSignature($token)
    {
        // you must define TOKEN by yourself
        /*if (!defined("TOKEN")) {
            throw new Exception('TOKEN is not defined!');
        }*/

        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        //$token = TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        // use SORT_STRING rule
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );

        if( $tmpStr == $signature ){
            return true;
        }else{
            return false;
        }
    }

    static public  function is_weixin(){
         $agent = strtolower($_SERVER['HTTP_USER_AGENT']);
         $is_weixin = strpos($agent, 'micromessenger') ? true : false ;   
         if($is_weixin){
            return true;
         }else{
            return false;
         }
    }
    
    /**
     * 调试response的数据
     * @param type $postObj
     * @return type
     */
    private  function debugResponseText($msg){
        $textReplyMsg = new TextReplyMessage($msg);
        $c='';
        foreach ($msg as $key => $value) {
            $c.= $key.">".$value.'}';
        }
        $textReplyMsg->content = $c;
        return $textReplyMsg->data();
    }
    
    
}

?>