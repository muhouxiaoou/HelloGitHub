<?php
namespace zebra\util;
 class StringHelper{
 
 	/**
 	 * echo format("hello,{0},{1},{2}", 'x0','x1','x2');
 	 * Enter description here ...
 	 */
 	static public function format() {   
  
	 $args = func_get_args();  
	   
	 if (count($args) == 0) { return;}  
	   
	 if (count($args) == 1) { return $args[0]; }
	     
	 $str = array_shift($args);    
	     
	 $str = preg_replace_callback('/\\{(0|[1-9]\\d*)\\}/', create_function('$match', '$args = '.var_export($args, true).'; return isset($args[$match[1]]) ? $args[$match[1]] : $match[0];'), $str);
	     
	 return $str;
	} 
	
	/**
	 * GUID
	 */
 	static public function uuid() {
		$charid = strtoupper(md5(uniqid(mt_rand(), true)));
		$hyphen = chr(45);// "-"
		//$uuid = chr(123)// "{"
		$uuid = substr($charid, 0, 8).$hyphen
		.substr($charid, 8, 4).$hyphen
		.substr($charid,12, 4).$hyphen
		.substr($charid,16, 4).$hyphen
		.substr($charid,20,12);
		//.chr(125);// "}"
		return $uuid;
	}
        
        function guid(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
                .substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12)
                .chr(125);// "}"
        return $uuid;
    }
}
        
	
     /**
     * 字符串返回每个字符的数组 支持中文
     * @#str 
     * @$charset default utf-8
     * @return string
     */
	static public function mb_str_split($str,$charset="utf-8") {
     	  return preg_split('/(?<!^)(?!$)/u', $str ); 
     	
		  $strlen=mb_strlen($str);
		  while($strlen){
		    $array[]=mb_substr($str,0,1,$charset);
		    $str=mb_substr($str,1,$strlen,$charset);
		    $strlen=mb_strlen($str);
		  }
		  return $array;
	    }
 
        /**
         * 字符串长度
         * @param type $str
         * @param type $charset
         * @return type
         */
        static public  function len($str,$charset="utf-8"){   
            return mb_strlen($str,$charset);
        }
        
        /**
         * 去掉两端空格
         * @param type $value
         * @return type
         */
        static public function trim($value){
              $value = trim($value);
              $value = trim($value,"　");
              return $value;
        }
        
        
        /**
         * 字符是否为空值
         * @param type $value
         * @return type
         */
        static public function  isEmpty($value)
        {
            return StringHelper::len(trim($value))==0;            
        }
        
        /*
         * 转义的内容
         */
        static public function  html_decode($value){
            $value = stripslashes ( $value );
            $value = htmlspecialchars_decode($value);
            return $value;
        }
        
        /**
         * 转换数组 不加入空值
         * @param type $delimiter
         * @param type $string
         * @param type $limit
         * @return type
         */
        static public function toArray($delimiter, $string){
            $arr =  explode($delimiter, $string);
            $source = array();
            foreach ($arr as $value) {
                if(!\StringHelper::isEmpty($value)) 
                {
                    $source[] = $value;
                }
            }
            return $source;
        }
        
        /**
         * 移除字符串末位的字符数量
         * @param type $str   字符串源
         * @param int $count  -1 移除最后一个字符
         * @return String
         */
        static public function removeEnd($str,$count=null){
            //-1 移除最后一个字符
            if($count==null){
                $count=0;
            }
          return substr($str,0,strlen($str)-$count); 
        }





        
  
        
 }