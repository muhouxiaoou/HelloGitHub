<?php
namespace API\Controller;
use Think\Controller;
use zebra\util\UrlHelper;
use zebra\platform\wx\wxAuth;
use zebra\platform\wx\wxAccessToken;



class IndexController extends Controller {
    
    public function index(){

        echo C("APP_NAME");
        echo "<br/>";
        C("APP_NAME","2015斑马传媒",1);
        echo C("APP_NAME");

        //  $result =  wxAccessToken::getAccessToken();
        //  showDebug($result);
        //  \wxAccessToken::clear();
        //  showDebug(\wxAccessToken::get());
        //  \wxAccessToken::set("fxBwoPCDDdjiwzkGef1TOEQNfxuisMPkkXx-7Q03K51w3ch8K-7E4KC-6G9Q4mgTv78EEp8-KH4-v0SuZzAfEgGmAx0H76iZXUJQKppklr8");
        //  echo time();
        //  \wxAccessToken::clear();

    }


    //获得 accesstoken
    public function accesstoken(){
        echo json_encode(wxAccessToken::getAccessToken());
    }


    //网页授权页面跳转
    public  function oauth2(){
        //$liveUrl = "http://178138.cicp.net/zebra/API/Index/live";
        //$liveUrl = "http://178138.cicp.net/zebra/WxGame/Index/game";
        $liveUrl = "http://www.daningdaning.com/zuinan/Index/index2";

        if($_GET["code"]){
            $result = wxAuth::getBaseInfo($_GET["code"]);
            $liveUrl .="/?openid=".$result->openid."&auth_access_token=".$result->access_token;
            UrlHelper::go($liveUrl);
        }else{
            //$result = wxAuth::base_url(UrlHelper::U('oauth'));    //静默授权
            $result = wxAuth::userinfo_url(UrlHelper::U('oauth')); //全部授权
            UrlHelper::go($result);
        }
    }

    //网页授权页面跳转
    public  function oauth(){
        if($_GET["code"]){
            $livepage =  session("__wxOauth_livepage__");
            session("__wxOauth_livepage__",null);
            $result = wxAuth::getBaseInfo($_GET["code"]);
            //$livepage .="/?openid=".$result->openid."&auth_access_token=".$result->access_token;
            //UrlHelper::go($livepage);
            $openid =  $result->openid;
            $auth_access_token = $result->access_token;
            $userInfo= wxAuth::getUserInfo($auth_access_token,$openid);
            session("authUserInfo",$userInfo);
            UrlHelper::go($livepage);
        }else{

            if(session("authUserInfo")==null){
                session("__wxOauth_livepage__",$_GET['livepage']);
                //$result = wxAuth::base_url(UrlHelper::U('oauth'));    //静默授权
                $result = wxAuth::userinfo_url(UrlHelper::U('oauth')); //全部授权
                UrlHelper::go($result);
            }else{
                UrlHelper::go($_GET['livepage']);
            }
        }
    }

    //网页授权页面跳转
   /* public  function oauth(){
        if($_GET["code"]){
            $livepage =  session("__wxOauth_livepage__");
            session("__wxOauth_livepage__",null);
            $result = wxAuth::getBaseInfo($_GET["code"]);
            if()
                $livepage .="/?openid=".$result->openid."&auth_access_token=".$result->access_token;
            UrlHelper::go($livepage);
        }else{
            session("__wxOauth_livepage__",$_GET['livepage']);
            //$result = wxAuth::base_url(UrlHelper::U('oauth'));    //静默授权
            $result = wxAuth::userinfo_url(UrlHelper::U('oauth')); //全部授权
            UrlHelper::go($result);
        }
    }*/

    /**
     * 网页授权用户信息
     */
    public  function oauth_userinfo(){
        $openid =  $_GET["openid"];
        $auth_access_token = $_GET["auth_access_token"];
        $result = wxAuth::getUserInfo($auth_access_token,$openid);
        echo json_encode($result);
    }

    public  function  live(){
        $openid =  $_GET["openid"];
        $auth_access_token = $_GET["auth_access_token"];
        $result = wxAuth::getUserInfo($auth_access_token,$openid);
        echo $result->nickname;
    }

    
}