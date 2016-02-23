<?php
namespace zebra\util;
class UrlHelper {
    static public function go($url){
            header('Location: '.$url);
        }
    /**
     * U方法完整路径
     * @return string
     */
    static  public  function  U($value){

        $pageURL = 'http';

        if ($_SERVER["HTTPS"] == "on")
        {
            $pageURL .= "s";
        }
        return $pageURL.'://'.$_SERVER['HTTP_HOST'].U($value);
    }
}
