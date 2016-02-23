<?php
namespace zebra\util;

class ImageHelper{

    /**
     * 保存画板
     * @param $path  ./Public/upload/temp/
     * @param $data
     * @param null $name
     * @return null|string
     */
    static public function savecanvasPNG($path,$data,$name=null){
        if($name==null){$name= StringHelper::uuid();}
        $image=base64_decode(str_replace('data:image/png;base64,','',stripslashes( $data )));
        //$this->save_to_file("./Public/upload/temp/".$name.".png",$image);
        self::save_to_file($path.$name.".png",$image);
        return $name;
    }

    static public function savecanvasJPG($path,$data,$name=null){
        if($name==null){$name= StringHelper::uuid();}
        $image=base64_decode(str_replace('data:image/png;base64,','',stripslashes( $data )));
        //$this->save_to_file("./Public/upload/temp/".$name.".png",$image);
        self::save_to_file($path.$name.".jpg",$image);
        return $name;
    }

    static private  function save_to_file($filename,$image){
        $fp=fopen($filename,'w');
        fwrite($fp,$image);
        fclose($fp);
    }
}