<?php
namespace zebra\platform\wx;
/**
 * 微信错误处理类
 * 全局返回码说明
 * http://mp.weixin.qq.com/wiki/17/fa4e1434e57290788bde25603fa2fcbd.html
 */
class wxError{

    /**
     * 写日志
     * @param data $
     * @param type $
     */
    static  public function write($data,$level="DEBUG",$type='',$destination=''){
            if(empty($destination))
                $destination = C('LOG_PATH').date('y_m_d').'_wx.log';

            if(!is_string($data)){
                if($data->errcode){
                    self::codelogic($data->errcode);
                }
                $data = json_encode($data);
            }
            \Think\Log::write($data,$level,$type,$destination);
        }


    /**
     * 错误代码处理
     * @param $errorcode
     */
    static private function codelogic($errorcode){
        switch($errorcode){
            case 40001:  //accessToken 过期了不是最新的，或者给别人调用了.
                wxAccessToken::clear(); 
            break;
        }
    }
}