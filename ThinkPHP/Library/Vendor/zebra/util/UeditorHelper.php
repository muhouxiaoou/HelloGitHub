<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UeditorHelper
 *
 * @author Administrator
 */
class UeditorHelper {
    //put your code here
    
    /* 上传图片配置项 */
    //imagePathFormat,
    /* 涂鸦图片上传配置项 */
    //scrawlPathFormat
    /* 截图工具上传 */
    //"snapscreenPathFormat":
    /* 抓取远程图片配置 */
    //catcherPathFormat
    /* 上传视频配置 */
    //videoPathFormat
    /* 上传文件配置 */
    //filePathFormat
     /* 列出指定目录下的图片 */
    //imageManagerListPath
     /* 列出指定目录下的文件 */
    //fileManagerListPath

    /*
        $CONFIG['imagePathFormat']          =  '/zebra-wx/Public/'.$CONFIG['imagePathFormat'];
        $CONFIG['scrawlPathFormat']         =  '/zebra-wx/Public/'.$CONFIG['scrawlPathFormat'];
        $CONFIG['snapscreenPathFormat']     =  '/zebra-wx/Public/'.$CONFIG['snapscreenPathFormat'];
        $CONFIG['catcherPathFormat']        =  '/zebra-wx/Public/'.$CONFIG['catcherPathFormat'];
        $CONFIG['videoPathFormat']          =  '/zebra-wx/Public/'.$CONFIG['videoPathFormat'];
        $CONFIG['filePathFormat']           =  '/zebra-wx/Public/'.$CONFIG['filePathFormat'];
        $CONFIG['imageManagerListPath']     =  '/zebra-wx/Public/'.$CONFIG['imageManagerListPath'];
        $CONFIG['fileManagerListPath']      =  '/zebra-wx/Public/'.$CONFIG['fileManagerListPath'];
    */
    
    
   static public function setConfig($CONFIG,$webPath){
        $CONFIG['imagePathFormat']          =  $webPath.$CONFIG['imagePathFormat'];
        $CONFIG['scrawlPathFormat']         =  $webPath.$CONFIG['scrawlPathFormat'];
        $CONFIG['snapscreenPathFormat']     =  $webPath.$CONFIG['snapscreenPathFormat'];
        $CONFIG['catcherPathFormat']        =  $webPath.$CONFIG['catcherPathFormat'];
        $CONFIG['videoPathFormat']          =  $webPath.$CONFIG['videoPathFormat'];
        $CONFIG['filePathFormat']           =  $webPath.$CONFIG['filePathFormat'];
        $CONFIG['imageManagerListPath']     =  $webPath.$CONFIG['imageManagerListPath'];
        $CONFIG['fileManagerListPath']      =  $webPath.$CONFIG['fileManagerListPath'];
   }
    
}
