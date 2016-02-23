<?php
namespace zebra\util;

class FormVerification {
    
        /*
         * 验证用户名,$value传递值;$minLen最小长度;$maxLen最长长度;只允许下划线+汉字+英文+数字（不支持其它特殊字符）
          @param string $value
          @param int $length
          @return boolean
         */
        static public function isUsername($value,$minLen=4,$maxLen=50){
              $value = trim($value);
              $value = trim($value,"　");
              if(!$value) return false;
              if( mb_strlen($value,'utf-8')<$minLen){
                  return false;
              }
              if( mb_strlen($value,'utf-8')>$maxLen){
                  return false;
              }
              if(is_numeric(mb_substr($value,0,1))){
                  return false;
              }
              return  preg_match('/^[\w]+$/',$value); 
            //return preg_match('/^[_\w\d\x{4e00}-\x{9fa5}]{'.$minLen.','.$maxLen.'}$/iu',$value);  只允许下划线+汉字+英文+数字（不支持其它特殊字符）
        }

    /**
     * 验证是否URL
     * @param $data
     * @return bool
     */
        static public function  isURL($data){
            if(filter_var($data, FILTER_VALIDATE_URL)){
               return true;
            }else{
               return false;
            }
        }

        /*
         *  密码验证
         */
        static public  function isPassword($value,$minLen=4,$maxLen=50){
              $value = trim($value);
              $value = trim($value,"　");
              if(!$value) return false;
              if(mb_strlen($value,'utf-8')<$minLen){
                  return false;
              }
              if( mb_strlen($value,'utf-8')>$maxLen){
                  return false;
              }
              return true;
        }




        /*
        -----------------------------------------------------------
        函数名称：isNumber
        简要描述：检查输入的是否为数字
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isNumber($val)
        {
            if(ereg("^[0-9]+$", $val))
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isPhone
        简要描述：检查输入的是否为电话
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isPhone($val)
        {
            //eg: xxx-xxxxxxxx-xxx | xxxx-xxxxxxx-xxx ...
            if(ereg("^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$",$val))
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isMobile
        简要描述：检查输入的是否为手机号
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isMobile($val)
        {
            //该表达式可以验证那些不小心把连接符“-”写出“－”的或者下划线“_”的等等
            if(ereg("(^(\d{2,4}[-_－—]?)?\d{3,8}([-_－—]?\d{3,8})?([-_－—]?\d{1,7})?$)|(^0?1[35]\d{9}$)",$val))
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isPostcode
        简要描述：检查输入的是否为邮编
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isPostcode($val)
        {
            if(ereg("^[0-9]{4,6}$",$val))
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isEmail
        简要描述：邮箱地址合法性检查
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isEmail($val,$domain="")
        {
            if(!$domain)
            {
                if( preg_match("/^[a-z0-9-_.]+@[\da-z][\.\w-]+\.[a-z]{1,8}$/i", $val) )
                {
                    return true;
                }
                else
                    return false;
            }
            else
            {
                if( preg_match("/^[a-z0-9-_.]+@".$domain."$/i", $val) )
                {
                    return true;
                }
                else
                    return false;
            }
        }//end func
    
        /*
        -----------------------------------------------------------
        函数名称：isNickName
       简要描述：姓名昵称合法性检查，只能输入中文英文
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isNickName($val)
        {
            if( preg_match("/^[\x80-\xffa-zA-Z0-9]{3,60}$/", $val) )//2008-7-24
            {
                return true;
            }
            return false;
        }//end func
    
        /*
        -----------------------------------------------------------
        函数名称:isDomain($Domain)
        简要描述:检查一个（英文）域名是否合法
        输入:string 域名
        输出:boolean
        修改日志:------
        -----------------------------------------------------------
        */
       /* static public function isDomain($Domain)
        {
            if(!eregi("^[0-9a-z]+[0-9a-z\.-]+[0-9a-z]+$", $Domain))
            {
                Return false;
            }
            if( !eregi("\.", $Domain))
            {
                Return false;
            }
    
            if(eregi("\-\.", $Domain) oreregi("\-\-", $Domain) oreregi("\.\.", $Domain) oreregi("\.\-", $Domain))
            {
                Return false;
            }
    
            $aDomain= explode(".",$Domain);
            if( !eregi("[a-zA-Z]",$aDomain[count($aDomain)-1]) )
            {
                Return false;
            }
    
            if(strlen($aDomain[0]) > 63 || strlen($aDomain[0]) < 1)
            {
                Return false;
            }
            Return true;
        }*/



        /*
        -----------------------------------------------------------
        函数名称:isNumberLength($theelement, $min, $max)
        简要描述:检查字符串长度是否符合要求
        输入:mixed (字符串，最小长度，最大长度)
        输出:boolean
        修改日志:------
        -----------------------------------------------------------
        */
        static public function isNumLength($val, $min, $max)
        {
            $theelement= trim($val);
            if(ereg("^[0-9]{".$min.",".$max."}$",$val))
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称:isNumberLength($theelement, $min, $max)
        简要描述:检查字符串长度是否符合要求
        输入:mixed (字符串，最小长度，最大长度)
        输出:boolean
        修改日志:------
        -----------------------------------------------------------
        */
        static public function isEngLength($val, $min, $max)
        {
            $theelement= trim($val);
            if(ereg("^[a-zA-Z]{".$min.",".$max."}$",$val))
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isEnglish
        简要描述：检查输入是否为英文
        输入：string
       输出：boolean
        作者：------
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isEnglish($theelement)
        {
            if( ereg("[\x80-\xff].",$theelement) )
            {
                Return false;
            }
            Return true;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isChinese
        简要描述：检查是否输入为汉字
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isChinese($sInBuf)
        {
            $iLen= strlen($sInBuf);
            for($i= 0; $i< $iLen; $i++)
            {
                if(ord($sInBuf{$i})>=0x80)
                {
                    if( (ord($sInBuf{$i})>=0x81 && ord($sInBuf{$i})<=0xFE) && ((ord($sInBuf{$i+1})>=0x40 && ord($sInBuf{$i+1}) < 0x7E) || (ord($sInBuf{$i+1}) > 0x7E && ord($sInBuf{$i+1})<=0xFE)) )
                    {
                        if(ord($sInBuf{$i})>0xA0 && ord($sInBuf{$i})<0xAA)
                        {
                            //有中文标点
                            return false;
                        }
                    }
                    else
                    {
                        //有日文或其它文字
                        return false;
                    }
                    $i++;
                }
                else
                {
                    return false;
                }
            }
            return true;
        }
    
        /*
        -----------------------------------------------------------
        函数名称：isDate
        简要描述：检查日期是否符合0000-00-00
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isDate($sDate)
        {
            if( ereg("^[0-9]{4}\-[][0-9]{2}\-[0-9]{2}$",$sDate) )
            {
                Return true;
            }
            else
            {
                Return false;
            }
        }
        /*
        -----------------------------------------------------------
        函数名称：isTime
        简要描述：检查日期是否符合0000-00-00 00:00:00
        输入：string
        输出：boolean
        修改日志：------
        -----------------------------------------------------------
        */
        static public function isTime($sTime)
        {
            if( ereg("^[0-9]{4}\-[][0-9]{2}\-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$",$sTime) )
            {
                Return true;
            }
            else
            {
                Return false;
            }
        }
    
        /*
        -----------------------------------------------------------
        函数名称:isMoney($val)
        简要描述:检查输入值是否为合法人民币格式
        输入:string
        输出:boolean
        修改日志:------
        -----------------------------------------------------------
        */
        static public function isMoney($val)
        {
            if(ereg("^[0-9]{1,}$", $val))
                return true;
            if( ereg("^[0-9]{1,}\.[0-9]{1,2}$", $val) )
                return true;
            return false;
        }
    
        /*
        -----------------------------------------------------------
        函数名称:isIp($val)
        简要描述:检查输入IP是否符合要求
        输入:string
       输出:boolean
        修改日志:------
        -----------------------------------------------------------
        */
        static public function isIp($val)
        {
            return (bool) ip2long($val);
        }
    //-----------------------------------------------------------------------------
}
