<?php
namespace zebra\util;
class ObjectHelper {
   

   static public function isResult($result) { 
        
             if($result==null || $result==false){
                    return false;
                }else{
                    return true; 
                }
   }


    /**
     * 对象转换成数组 (兼容多维数组类型);
     * @param $obj
     * @return mixed
     */
    static public function to_array($obj){
        $_arr = is_object($obj) ? get_object_vars($obj) :$obj;
        foreach ($_arr as $key=>$val){
            $val = (is_array($val) || is_object($val)) ? self::to_array($val):$val;
            $arr[$key] = $val;
        }
        return $arr;
    }
    
    
}
