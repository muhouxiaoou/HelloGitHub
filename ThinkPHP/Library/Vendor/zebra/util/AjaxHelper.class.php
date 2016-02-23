<?php
namespace zebra\util;
class AjaxHelper {


    /**
     * 允许ajax跨域提交
     */
    static function domain(){
        header('Access-Control-Allow-Origin: *');
    }

}