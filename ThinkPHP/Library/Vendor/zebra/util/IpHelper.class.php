<?php
namespace zebra\util;
 
class IpHelper {
   
        
     static public function get_onlineip() { 
            $ch = curl_init('http://city.ip138.com/ip2city.asp'); 
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
            $a = curl_exec($ch); 
            preg_match('/\[(.*)\]/', $a, $ip); 
            return $ip[1]; 
        } 
        
      /*
       *  获得客户端IP地址 
       */
      static public function get_clientIP(){
                if (!empty($_SERVER['HTTP_CLIENT_IP'])) { //check ip from share internet
                        return $_SERVER['HTTP_CLIENT_IP'];
                } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { //to check ip is pass from proxy
                        return $_SERVER['HTTP_X_FORWARDED_FOR'];
                } else {
                        return $_SERVER['REMOTE_ADDR'];
                }
                /*static $realip;
                if (isset($_SERVER)){
                    if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
                        $realip = $_SERVER["HTTP_X_FORWARDED_FOR"];
                    } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
                        $realip = $_SERVER["HTTP_CLIENT_IP"];
                    } else {
                        $realip = $_SERVER["REMOTE_ADDR"];
                    }
                } else {
                    if (getenv("HTTP_X_FORWARDED_FOR")){
                        $realip = getenv("HTTP_X_FORWARDED_FOR");
                    } else if (getenv("HTTP_CLIENT_IP")) {
                        $realip = getenv("HTTP_CLIENT_IP");
                    } else {
                        $realip = getenv("REMOTE_ADDR");
                    }
                }
                return $realip;*/
      }
        
      //淘宝IP地址信息
      static  public function taobaoIP($clientIP){
        $taobaoIP = 'http://ip.taobao.com/service/getIpInfo.php?ip='.$clientIP;
        $IPinfo = json_decode(file_get_contents($taobaoIP));
         if((string)$IPinfo->code=='1'){
            return false;
         }
        $data = $IPinfo->data;
        return $data; 
         
        /*$province = $IPinfo->data->region;    
        $city = $IPinfo->data->city;
        $data = $province.$city;
        return $IPinfo;*/
    }
    
   
   
    
}
