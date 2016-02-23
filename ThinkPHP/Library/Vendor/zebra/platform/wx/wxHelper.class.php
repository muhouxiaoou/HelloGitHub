<?php

namespace zebra\platform\wx;
use zebra\util\StringHelper;

class wxHelper {

    /**
     * 微信头像
     * @param $url 原始数据
     * @param $size 0、46、64、96、132数值可选，0代表640*640正方形头像
     */
    static public  function  wxface($url,$size=0){
       //$url = "http://wx.qlogo.cn/mmopen/PiajxSqBRaEKarYFu23bcKxjgoLEE6AiaazfBjJSaqRcJfqaIASM3iavne0K9QHlw1yzI2yy8FrUSe3UnAaEgSdIw/0";
       $url = StringHelper::removeEnd($url,1);
       return $url.$size;
        
    }
}