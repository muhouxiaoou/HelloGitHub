<?php
namespace zebra\platform\wx;
use zebra\util\HttpClient;

class wxAccount {

    //oW5_wt2Z-hNy3SwwNNRnBxCFtNRA
    /**
     * 发送消息
     * @param $access_token
     * @param $data
     */
     static public  function  sendMessage($access_token,$data){
            $url = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=".$access_token;
             HttpClient::postString($url,$data);
        }


}