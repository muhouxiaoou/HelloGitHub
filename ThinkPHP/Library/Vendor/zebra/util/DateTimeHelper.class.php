<?php
namespace zebra\util;
class DateTimeHelper {
        
         /**
         * 系统时间 2015-03-01 18:04:37
         * @return type
         */
        static public function now(){
            return date('Y-m-d H:i:s',time());
        }


        /**
         * 字符串转换成日期
         * @param $str
         * @return bool|date
         */
        static public  function  stringToDate($str){
            //$time = strtotime("2010-09-08 07:06:05");
              $time = strtotime($str);
              return date("Y-m-d H:i:s",$time);
        }

        /**
         * 时间戳转换日期
         * @param $time
         * @return bool|string
         */
        static  public  function  toDate($time){
            return date('Y-m-d H:i:s',$time);
        }
        
        /**
         * 是否为今天
         * @param type $time_string
         * @return type
         */
        static public function isToady($time_string){
            // 转换为时间戳
            $a_ux = strtotime($time_string);
            // 转换为 YYYY-MM-DD 格式
            $a_date = date('Y-m-d',$a_ux);
            // 获取今天的 YYYY-MM-DD 格式
            $b_date = date('Y-m-d');
            return $a_date==$b_date;
        }
        
        /**
         * 今天星期几
         * @param type $unixTime
         * @return type
         */
        static public function getWeek($unixTime=''){
            $unixTime=is_numeric($unixTime)?$unixTime:time();
            $weekarray=array('7','1','2','3','4','5','6');
            return $weekarray[date('w',$unixTime)];
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
}
