<?php

namespace zebra\platform\wx;
use zebra\util\HttpClient;
use zebra\util\JSON;
use zebra\util\StringHelper;

/*
自定义菜单创建接口
http://mp.weixin.qq.com/wiki/13/43de8269be54a0a6f64413e4dfa94f39.html
*/
class wxMenu {

    const API_CREATE = 'https://api.weixin.qq.com/cgi-bin/menu/create';
    const API_GET    = 'https://api.weixin.qq.com/cgi-bin/menu/get';
    const API_DELETE = 'https://api.weixin.qq.com/cgi-bin/menu/delete';

    private  $access_token=null;


    /**
     * 点击推事件
     * 用户点击click类型按钮后，微信服务器会通过消息接口推送消息类型为event	的结构给开发者（参考消息接口指南），
     * 并且带上按钮中开发者填写的key值，开发者可以通过自定义的key值与用户进行交互；
     */
    const TYPE_CLICK="click";

    /**
     * 跳转URL
     * 用户点击view类型按钮后，微信客户端将会打开开发者在按钮中填写的网页URL，可与网页授权获取用户基本信息接口结合，获得用户基本信息。
     */
    const TYPE_VIEW="view";

    /**
     * <b>扫码推事件</b>
     * 用户点击按钮后，微信客户端将调起扫一扫工具，完成扫码操作后显示扫描结果（如果是URL，将进入URL），
     * 且会将扫码的结果传给开发者，开发者可以下发消息。
     */
    const TYPE_SCANCODE_PUSH="scancode_push";

    /**
     * 扫码推事件且弹出“消息接收中”提示框
     * 用户点击按钮后，微信客户端将调起扫一扫工具，完成扫码操作后，将扫码的结果传给开发者，
     * 同时收起扫一扫工具，然后弹出“消息接收中”提示框，随后可能会收到开发者下发的消息。
     */
    const TYPE_SCANCODE_WAITMSG="scancode_waitmsg";

    /**
     * 弹出系统拍照发图
     * 用户点击按钮后，微信客户端将调起系统相机，完成拍照操作后，会将拍摄的相片发送给开发者，
     * 并推送事件给开发者，同时收起系统相机，随后可能会收到开发者下发的消息。
     */
    const  TYPE_PIC_SYSPHOTO="pic_sysphoto";

    /**
     * 弹出拍照或者相册发图
     * 用户点击按钮后，微信客户端将弹出选择器供用户选择“拍照”或者“从手机相册选择”。用户选择后即走其他两种流程。
     */
    const  TYPE_PIC_PHOTO_OR_ALBUM="pic_photo_or_album";

    /**
     * 弹出微信相册发图器
     * 用户点击按钮后，微信客户端将调起微信相册，完成选择操作后，
     * 将选择的相片发送给开发者的服务器，并推送事件给开发者，同时收起相册，随后可能会收到开发者下发的消息。
     */
    const  TYPE_PIC_WEIXIN="pic_weixin";

    /**
     * 弹出地理位置选择器
     * 用户点击按钮后，微信客户端将调起地理位置选择工具，完成选择操作后，将选择的地理位置发送给开发者的服务器，
     * 同时收起位置选择工具，随后可能会收到开发者下发的消息
     */
    const  TYPE_LOCATION_SELECT="location_select";

    /**
     * 下发消息（除文本消息）
     * 用户点击media_id类型按钮后，微信服务器会将开发者填写的永久素材id对应的素材下发给用户，
     * 永久素材类型可以是图片、音频、视频、图文消息。请注意：永久素材id必须是在“素材管理/新增永久素材”接口上传后获得的合法id。
     */
    const  TYPE_MEDIA_ID="media_id";

    /**
     * 跳转图文消息URL
     * 用户点击view_limited类型按钮后，微信客户端将打开开发者在按钮中填写的永久素材id对应的图文消息URL，
     * 永久素材类型只支持图文消息。请注意：永久素材id必须是在“素材管理/新增永久素材”接口上传后获得的合法id。
     */
    const  VIEW_LIMITED="view_limited";


    //主菜单
    public  $mainMenu = array();



    public  function __construct($access_token=null){
        if($access_token){
            $this->access_token = $access_token;
        }
    }

    /**
     * 删除菜单
     * @param null $access_token
     * @return bool
     */
    public  function del($access_token=null){
        if($access_token==null){$access_token = $this->access_token;}
        $url = self::API_DELETE."?access_token={$access_token}";
        $result =  json_decode( HttpClient::get($url));
        return $result->errmsg=="ok";
    }


    /**
     * 添加主菜单
     * @param null $name
     * @param null $type
     * @param null $data
     */
    public  function addMenu($name=null,$type=null,$data=null){
        if($data==null ||  StringHelper::isEmpty($data)){
            $data=" ";
        }
        $item = new MenuItem($name,$type,$data);
        $this->mainMenu[]=$item;
    }

    /**
     * 添加子菜单
     * @param $index
     * @param null $name
     * @param null $type
     * @param null $data
     */
    public  function addSubMenu($index,$name=null,$type=null,$data=null){
        if($data==null || StringHelper::isEmpty($data)){
            $data=" ";
        }
        $item = new MenuItem($name,$type,$data);
        if($this->mainMenu[$index]){
            $this->mainMenu[$index]->sub_button[]=$item;
        }
    }


    /**
     * 同步到微信数据
     * @param null $access_token
     * @return bool
     * {
    "name":"菜单",
    "sub_button":[
    {
    "name": "发送位置",
    "type": "location_select",
    "key": "rselfmenu_2_0"
    }
    ]
    },
     */
    public function  sync($menuData=null){

          $url = self::API_CREATE."?access_token={$this->access_token}";
          if($menuData==null){
              $menuData = $this->getMenuData();
          }
     //   showDebug($menuData);
          $result =  HttpClient::post($url,$menuData);
          $result =  json_decode($result);


          if($result->errmsg=="ok"){
              return true;
          }else{
              wxError::write($result,__METHOD__);
              return false;
          }
     }


    /**
     * 获得公众号上的菜单数据
     * @return mixed
     */
    public function getServerMenuData(){
         $url = self::API_GET."?access_token={$this->access_token}";
         $result =  json_decode(HttpClient::get($url));
         return json_encode($result->menu);
    }

    /**
     * 获得菜单字符串
     * @return string
     */
    public  function  getMenuData(){
        $menus = sprintf('{"button":%s }', JSON::encode( $this->mainMenu) );
        return $menus;
    }


}


class MenuItem extends \stdClass{
//"type": "pic_sysphoto",
//"name": "系统拍照发图",
//"key": "rselfmenu_1_0",
//"url":"http://www.soso.com/"
    public  $type="";
    public  $name="";

    public  $sub_button=array();

    public  function __construct($name=null,$type=null,$data=null){
        if($name){$this->name = $name;}
        if($type){$this->type = $type;}

        if($type == wxMenu::TYPE_VIEW){
            $this->url = $data;
        }else{
            $this->key = $data;
        }
    }


}