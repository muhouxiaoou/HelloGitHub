<?php

namespace zebra\platform\wx;
use zebra\util\HttpClient;



class wxAccessToken {

     /**
     * 清除AccessToken.
     * @param type $appid
     */
    static public  function clear($appid=null){
         if($appid==null && C('APP_ID')!=null){$appid=C('APP_ID');}
         S($appid,NULL);
     }

    /**
     * 手动设置AccessToken
     * @param $appid
     * @param $value
     */
    static public  function set($access_token,$appid=null){
        if($appid==null && C('APP_ID')!=null){$appid=C('APP_ID');}
        $result = S($appid);
        $result->access_token = $access_token;
        S($appid,$result);
    }

    /**
     * 获得AccessToken.
     * @param type $appid
     * @param type $appsecret
     * @return string
     */
    static public  function get($appid=null,$appsecret=null){
        $reslut = self::getAccessToken($appid,$appsecret);
        if($reslut){
            return $reslut->access_token;
        }
        return $reslut;
    }


    static public function getBy

    /**
     * 获得详细数据
     * {"access_token":"ACCESS_TOKEN","expires_in":7200}
     * @param null $appid
     * @param null $appsecret
     * @return mixed|null
     */
    static  public  function  getAccessToken($appid=null,$appsecret=null){
        if($appid==null && C('APP_ID')!=null){$appid=C('APP_ID');}
        if($appsecret==null && C('APP_SECRET')!=null){$appsecret=C('APP_SECRET');}

        if(S($appid)){
            return S($appid);
        }else{

            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
            $result  = json_decode( HttpClient::get($url));


            if($result->access_token){
                $token = new \stdClass();
                $token->access_token=$result->access_token;
                $token->expires_in=$result->expires_in;
                $time = time();
                $timeout = $token->expires_in;
                $token->regtime=$time;
                $token->endtime=$time+$timeout-600;
                S($appid,$token,$timeout-600);
                return S($appid);
            }

            if($result->errcode){
                wxError::write($result,__METHOD__);
                return null;
            }

        }
    }
}
