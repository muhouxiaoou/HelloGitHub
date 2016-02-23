<?php
namespace zebra\platform\wx;
use zebra\platform\wx\user\wxUserInfo;
use zebra\platform\wx\user\wxUserList;
use zebra\util\HttpClient;
use zebra\platform\wx\wxError;

//
//vendor('zebra.platform.wx.user.wxUserList');
//vendor('zebra.platform.wx.user.wxUserInfo');



/**
 * 微信用户管理
 * http://mp.weixin.qq.com/wiki/14/bb5031008f1494a59c6f71fa0f319c66.html
 */

class wxUser {

    const API_GET_USER = "https://api.weixin.qq.com/cgi-bin/user/get";
    const API_GET_SINGLEINFO = "https://api.weixin.qq.com/cgi-bin/user/info";
    const API_GET_BATCHINFO = "https://api.weixin.qq.com/cgi-bin/user/info/batchget";

    private  $access_token=null;

    public  function __construct($access_token=null){
        if($access_token){
            $this->access_token = $access_token;
        }

    }

    /**
     * 活动用户列表
     * 正确时返回JSON数据包：
     * {
            "total":23000,
            "count":10000,
            "data":{"
            openid":[
            "OPENID1",
            "OPENID2",
            ...,
            "OPENID10000"
            ]
            },
            "next_openid":"OPENID10000"
        }
     * @param string $next_openid
     * @return wxUserList
     */
    public function  getList($next_openid=''){
       $url = self::API_GET_USER."?access_token={$this->access_token}&next_openid={$next_openid}";
       $result = json_decode(HttpClient::get($url));
       if($result->errcode){
            wxError::write($result,__METHOD__);
            return null;
       }else{
            return new wxUserList($result);
       }
    }


    /**
     *  获得一个用户的数据信息
     * @param $openid
     * @return null|wxUserInfo
     */
    public  function  getUserInfo($openid){
        //?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
        $url = self::API_GET_SINGLEINFO."?access_token={$this->access_token}&openid={$openid}&lang=zh_CN";
        $result = json_decode(HttpClient::get($url));
        if($result->errcode){
            wxError::write($result,__METHOD__);
            return null;
        }else{
            return  new  wxUserInfo($result);
        }
    }




    /**
     * 批量获得用户数据 一次最多100个。
     * @param $openidArr
     * @return null|Array
     */
    public function  getUserBatchInfo($openidArr){
        $url = self::API_GET_BATCHINFO."?access_token={$this->access_token}";
        $user_list = new \stdClass();
        $user_list->user_list= array();
        foreach($openidArr as $opendid){
            $user_list->user_list[]= array("openid"=>$opendid);
        }
        $result = json_decode(HttpClient::post($url, json_encode($user_list)));
        if($result->errcode){
            wxError::write($result,__METHOD__);
            return null;
        }else{
            return  $result->user_info_list;
        }

    }









}