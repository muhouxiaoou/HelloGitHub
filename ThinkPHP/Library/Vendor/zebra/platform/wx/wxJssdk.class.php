<?php

namespace zebra\platform\wx;
use zebra\util\HttpClient;

/*
  wx.config({
    debug: true,
    appId: '{$signPackage.appId}',
    timestamp: '{$signPackage.timestamp}',
    nonceStr: '{$signPackage.nonceStr}',
    signature: '{$signPackage.signature}',
    jsApiList: [
        "onMenuShareTimeline"
      // 所有要调用的 API 都要加到这个列表中
    ]
  });
*/

class wxJssdk{
    
    private  $access_token="";
    
    /**
     * access_token
     * @param type $access_token
     */
    public function __construct($access_token=null) {
        $this->access_token = $access_token;
    }
    
     /**
      * 打包签名
      * @param type $access_token
      * @return type
      */
     public function getSignPackage($access_token=null) {
            if($access_token==null){
                $access_token = $this->access_token;
            }
            $jsapiTicket = $this->get_jsapi_ticket($access_token);
            return self::getSignPackageByTicket($jsapiTicket);
      }


    /**
     * 通过js_api_ticket 直接获得前面
     * @param $jsapiTicket
     * @param string $appId
     * @return array
     */
     static  public function getSignPackageByTicket($jsapiTicket,$appId=''){
          // 注意 URL 一定要动态获取，不能 hardcode.
            $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
            $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

            $timestamp = time();
            $nonceStr = self::createNonceStr();

            // 这里参数的顺序要按照 key 值 ASCII 码升序排序
            $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

            $signature = sha1($string);

            $signPackage = array(
              "appId"     => $appId,
              "nonceStr"  => $nonceStr,
              "timestamp" => $timestamp,
              "url"       => $url,
              "signature" => $signature,
              "rawString" => $string
            );
            return $signPackage; 
     }

     static   private function createNonceStr($length = 16) {
            $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            $str = "";
            for ($i = 0; $i < $length; $i++) {
              $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
            }
            return $str;
      }

     /*
       获得AccessToken.getJsApiTicket
        'errcode' => int 0
        'errmsg' => string 'ok' (length=2)
        'ticket' => string 'bxLdikRXVbTPdHSM05e5uxbrtEuaimRGAdV8_Lcam2rO5oCAlaGE1-jakID8Eu8U6cFjxYJjwJFXtwkz5nR85A' (length=86)
        'expires_in' => int 7200
     */
      public  function get_jsapi_ticket($access_token=null){
            if($access_token==null){
                $access_token = $this->access_token;
            }
            $key =  (string)$access_token."_wxjssdk";
            if(S($key)){ 
                  return S($key)->ticket;
             }else{
               $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token={$access_token}";
               $result = json_decode(HttpClient::get($url));
               if($result->errmsg=="ok"){
                     $timeout = $result->expires_in;
                     S($key,$result,$timeout);
                     return S($key)->ticket;
               }else{
                     wxError::write($result,__METHOD__);
                     return null;
               }
            }     
         }  
         
         
      
}