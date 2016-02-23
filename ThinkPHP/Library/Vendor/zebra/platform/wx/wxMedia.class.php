<?php
namespace zebra\platform\wx;
use zebra\util\HttpClient;
use zebra\util\JSON;


//http://mp.weixin.qq.com/wiki/5/963fc70b80dc75483a271298a76a8d59.html
/*
 * 注意事项
    上传的临时多媒体文件有格式和大小限制，如下：

    图片（image）: 1M，支持JPG格式
    语音（voice）：2M，播放长度不超过60s，支持AMR\MP3格式
    视频（video）：10MB，支持MP4格式
    缩略图（thumb）：64KB，支持JPG格式
    媒体文件在后台保存时间为3天，即3天后media_id失效。
 * */

class wxMedia {

    const API_UPLOAD_TEMPMEDIA = "https://api.weixin.qq.com/cgi-bin/media/upload";
    const API_GET_TEMPMEID = "https://api.weixin.qq.com/cgi-bin/media/get";

    //图片（image）、语音（voice）、视频（video）和缩略图（thumb）
    const TYPE_IMAGE = "image";
    const TYPE_VOICE = "voice";
    const TYPE_VIDEO = "video";
    const TYPE_THUMB = "thumb";

    private  $access_token=null;

    public  function __construct($access_token=null){
        if($access_token){
            $this->access_token = $access_token;
        }
    }


    /**
     * 上传临时媒体文件
     * object(stdClass)#9 (3) {
                ["type"]=>
                string(5) "image"
                ["media_id"]=>
                string(64) "gf4Of1Ao5hgYOiAPU5ASSya0mVtrJgbU_g4QxIt_sdTiyAcjHRD-iSFrwCG_Y1AV"
                ["created_at"]=>
                int(1436174675)
            }
     * @param $type
     * @param string $file
     */
    public function uploadTempFile($type,$filepath=''){
        $url = self::API_UPLOAD_TEMPMEDIA."?access_token={$this->access_token}&type={$type}";
        $file = "@".$_SERVER["DOCUMENT_ROOT"].__ROOT__."/".$filepath;
        $postdata = new \stdClass();
        $postdata->media  =  $file;
        $result = json_decode(HttpClient::post($url, $postdata));
        if($result->media_id){
            return $result;
        }else{
            wxError::write($result,__CLASS__);
            return null;
        }
    }



    /**
     * 获得媒体文件
     * @param $media_id
     */
    public function  getMedia($media_id){
        //https://api.weixin.qq.com/cgi-bin/media/get?access_token=ACCESS_TOKEN&media_id=MEDIA_ID
        $url = self::API_GET_TEMPMEID."?access_token={$this->access_token}&media_id={$media_id}";
       return HttpClient::get($url);
    }





}