<?php 
namespace zebra\platform\wx;
use zebra\util\HttpClient;

class wxCard {

    private  $access_token="";

    /**
     * 微信卡劵
     * @param type $access_token
     */
    public function __construct($access_token) {
        $this->access_token = $access_token;
    }


    /**
     * 用于前端JSSDK
     * @param type $card_id
     * @param type $code
     * @param type $openid
     * @param type $balance
     * @return type
     */
    public function createListItem($card_id,$code=null,$openid=null,$balance=null) {
        $timestamp = (string)time();
        $api_ticket=$this->get_api_card_ticket();
        $record = array($api_ticket,$timestamp,$card_id,$code,$openid,$balance);
        //$signature = $this->getSignature($record);

        sort($record,SORT_STRING);
        $chars = implode($record);
        $signature = sha1($chars);

        $ext = array(
            'code'      => $code,
            'openid'    => $openid,
            'timestamp' => $timestamp,
            'signature' => $signature,
            'balance'   => $balance
        );

        $signPackage = array(
            "timestamp" => $timestamp,
            "cardid"    => $card_id,
            "code"      => $code,
            "openid"    => $openid,
            "signature" => $signature,
            "balance"   => $balance,
            "ticket"    => $api_ticket,
            "chars"    => $chars,
            "ext" => json_encode($ext)
        );
        return $signPackage;
    }



    private function createNonceStr($length = 16) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }


    /**
     * 签名算法
     *
     * @return string
     */
    public function getSignature($card)
    {
        sort($card,SORT_STRING);
        $sign = sha1(implode($card));
        if (!$sign)
            return false;
        return $sign;
//OR--------------------------------------------
//        $params = func_get_args();
//        sort($params, SORT_STRING);
//        return sha1(implode($params));
    }


    /*
     *
     * 获得卡劵Ticket
      {
       "errcode":0,
       "errmsg":"ok",
       "ticket":"bxLdikRXVbTPdHSM05e5u5sUoXNKdvsdshFKA",
       "expires_in":7200
       }
    */
    public  function get_api_card_ticket($access_token=null){
        if($access_token==null){
            $access_token = $this->access_token;
        }
        $key =  (string)$access_token."_wxcard";
        if(S($key)){
            return S($key)->ticket;
        }else{
            $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=$access_token&type=wx_card";
            $jsonData = json_decode(HttpClient::get($url));
            if($jsonData->errmsg=="ok"){
                $timeout = $jsonData->expires_in;
                S($key,$jsonData,$timeout);
                return S($key)->ticket;
            }
        }
    }


    //上传卡卷logo
    public  function upload_card_logo($filepath){
        $url = "https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token={$this->access_token}";
        // $file = "@".$_SERVER["DOCUMENT_ROOT"].__ROOT__."/Public/images/shoplogo.jpg";
        $file = "@".$_SERVER["DOCUMENT_ROOT"].__ROOT__."/".$filepath;
        $result = json_decode(HttpClient::post($url, array('file' =>  $file)));
        if($result->url){
            return $result->url;
        }else{
            return null;
        }
    }


    /**
     * CODE解码
     * @param $code
     * @return null
     */
    public  function  encrypt_code($code){
        $url = "https://api.weixin.qq.com/card/code/decrypt?access_token={$this->access_token}";
        $cls = new \stdClass();
        $cls->encrypt_code=$code;
        $result = json_decode(HttpClient::post($url, json_encode($cls)));
        if($result->errmsg=="ok")
        {
            return $result->code;
        }else{
            return  null;
        }
    }


    /**
     * 核销Code接口
     * @param $code
     * @param null $card_id
     * {
    "code": "12312313",
    "card_id": "pFS7Fjg8kV1IdDz01r4SQwMkuCKc"
    }
     */
    public  function  dispose_code($code,$card_id=null){
        $url = "https://api.weixin.qq.com/card/code/consume?access_token={$this->access_token}";
        $cls = new \stdClass();
        $cls->code=$code;
        if($card_id!=null){
            $cls->card_id=$card_id;
        }
        $result = json_decode(HttpClient::post($url, json_encode($cls)));
        return $result->errmsg=="ok";
    }


    /**
     * 添加白名单
     * @param null $usernameArr
     * @param null $openidArr
     * {
    "openid": [
    "o1Pj9jmZvwSyyyyyyBa4aULW2mA",
    "o1Pj9jmZvxxxxxxxxxULW2mA"
    ],
    "username": [
    "afdvvf",
    "abcd"
    ]
    }
     */
    public  function addTester($usernameArr=null,$openidArr=null){
        $url ="https://api.weixin.qq.com/card/testwhitelist/set?access_token={$this->access_token}";
        $pd = new \stdClass();
        if($usernameArr!=null){
            $pd->username = $usernameArr;
        }
        if($openidArr!=null){
            $pd->openid = $openidArr;
        }
        $result =  json_decode(HttpClient::post($url, json_encode($pd)));
        return $result->errmsg=="ok";
    }


}
