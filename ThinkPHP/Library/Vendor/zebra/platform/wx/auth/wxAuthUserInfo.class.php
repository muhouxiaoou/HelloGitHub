<?php
namespace zebra\platform\wx\auth;

/*{
    "openid":" OPENID",
   " nickname": NICKNAME,
   "sex":"1",
   "province":"PROVINCE"
   "city":"CITY",
   "country":"COUNTRY",
    "headimgurl":    "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
	"privilege":[
    "PRIVILEGE1"
	"PRIVILEGE2"
    ],
    "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
}*/


class wxAuthUserInfo {

    /**
     * @var 用户的唯一标识
     */
    public  $openid;

    /**
     * @var 用户昵称
     */
    public  $nickname;

    /**
     * @var 性别，值为1时是男性，值为2时是女性，值为0时是未知
     */
    public  $sex;

    /**
     * @var 省份
     */
    public  $province;

    /**
     * @var 城市
     */
    public  $city;

    /**
     * @var 国家
     */
    public  $country;

    /**
     * @var 头像 有0、46、64、96、132数值可选，0代表640*640正方形头像
     */
    public  $headimgurl;

    /**
     * @var 用户特权信息，json 数组，如微信沃卡用户为（chinaunicom）
     */
    public  $privilege;

    /**
     * @var 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段
     */
    public  $unionid;

    public function __construct($data) {
        $this->openid = $data->openid;
        $this->nickname = $data->nickname;
        $this->sex = $data->sex;
        $this->province = $data->province;
        $this->city = $data->city;
        $this->country = $data->country;
        $this->headimgurl = $data->headimgurl;
        $this->privilege = $data->privilege;
        if($data->unionid){
            $this->openid = $data->unionid;
        }
    }
}