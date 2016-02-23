<?php
namespace zebra\util;

 class HttpClient{
     
   //Post提交 
   static public function post($url,$data) {
            $ch = curl_init();
               curl_setopt($ch, CURLOPT_URL, $url);
               curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
               curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
               curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  //1 成功只把结果返回，不会输出
               curl_setopt( $ch, CURLOPT_POST, 1 );
               curl_setopt( $ch, CURLOPT_POSTFIELDS, $data );
               //文件名是完整路径才可以的.
               //curl_setopt($cl,CURLOPT_POSTFIELDS, array('file' => "@D:/siren.txt"));
               $result = curl_exec($ch);
               curl_close($ch);
               return $result; 
        }  
        
  //Post提交 
   static public function postString2($url, $post) {
            $options = array(  
                'http' => array(  
                    'method' => 'POST',
                    'timeout' => 60, //设置一个超时时间，单位为秒 
                    'content' => $post,    
                ),  
            );
            $result = file_get_contents($url, false, stream_context_create($options));  
            return $result;  
        } 
        
    
   /*static public function get1($url) {
             $options = array(  
                'http' => array(   
                    'timeout' => 60, //设置一个超时时间，单位为秒 
                ),  
            ); 
            $result = file_get_contents($url, false, stream_context_create($options));  
            return $result;
        }*/
        
     
    static  public function get($url){
              $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, $url);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  //1 成功只把结果返回，不会输出
                    $result = curl_exec($ch);
                    curl_close($ch);
                    return $result;  
        }
        
   static  public function postString($url,$data){
              $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, $url);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  //1 成功只把结果返回，不会输出
                    curl_setopt( $ch, CURLOPT_POST, 1 );
                    curl_setopt( $ch, CURLOPT_POSTFIELDS, $data );
                    $result = curl_exec($ch);
                    curl_close($ch);
                    return $result;  
        }
        
        
        
 }