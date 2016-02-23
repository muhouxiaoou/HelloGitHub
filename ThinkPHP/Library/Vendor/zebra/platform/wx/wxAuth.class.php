<?php

namespace zebra\platform\wx;
use zebra\util\HttpClient;
use zebra\platform\wx\auth\wxAuthUserInfo;
use zebra\util\UrlHelper;


/**
 * 微信网页授权
 * http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
 */
class wxAuth {

    const API_OAUTH2 = "https://open.weixin.qq.com/connect/oauth2/authorize";

    /**
     * 静默授权
     * @param $appid
     * @param $url
     * @return string
     */
    static public function base_url($url,$appid=null){
        $scope="snsapi_base";
        $url = urlencode($url);
        if($appid==null && C('APP_ID')!=null){$appid=C('APP_ID');}
        $authurl =self::API_OAUTH2."?appid={$appid}&redirect_uri={$url}&response_type=code&scope={$scope}&state=STATE#wechat_redirect";
        return $authurl;
    }

    /**
     * 全部信息授权
     * @param $appid
     * @param $url
     * @return string
     */
    static  public function userinfo_url($url,$appid=null){
        $scope="snsapi_userinfo";
        $url = urlencode($url);
        if($appid==null && C('APP_ID')!=null){$appid=C('APP_ID');}
        $authurl =self::API_OAUTH2."?appid={$appid}&redirect_uri={$url}&response_type=code&scope={$scope}&state=STATE#wechat_redirect";
        return $authurl;
    }


    /**
     * 获得基本信息，返回OPENID
     * @param $appid
     * @param $appsecret
     * @param $code
     * @return mixed|null
     * {
            "access_token":"ACCESS_TOKEN",
            "expires_in":7200,
            "refresh_token":"REFRESH_TOKEN",
            "openid":"OPENID",
            "scope":"SCOPE",
            "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
        }
     */
    static public function  getBaseInfo($code,$appid=null,$appsecret=null){
        //https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
        if($appid==null && C('APP_ID')!=null){$appid=C('APP_ID');}
        if($appsecret==null && C('APP_SECRET')!=null){$appsecret=C('APP_SECRET');}
        $url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid={$appid}&secret={$appsecret}&code={$code}&grant_type=authorization_code";
        $result =   json_decode(HttpClient::get($url));
        if($result->errcode){
            wxError::write($result,__METHOD__);
            return null;
        }else{
            return $result;
        }
    }


    /**
     * 获得网页授权用户详细信息
     * @param $auth_access_token
     * @param $openid
     * @return null|wxAuthUserInfo
     */
    static public function getUserInfo($auth_access_token,$openid){
        $url ="https://api.weixin.qq.com/sns/userinfo?access_token={$auth_access_token}&openid={$openid}&lang=zh_CN";
        $result = json_decode(HttpClient::get($url));
        if($result->errcode){
            wxError::write($result,__METHOD__);
            return null;
        }else{
            return new wxAuthUserInfo($result);
        }
    }


    static public  function goLivePage($url){
        $livepage = urlencode($url);
        UrlHelper::go(U("API/Index/oauth2")."/?livepage=".$livepage);
        //UrlHelper::go(U("API/Index/oauth2")."/?livepage=".$livepage);
    }




}