<?php
namespace zebra\platform\wx\user;

class wxUserInfo {

    /**
     * 是否订阅该公众号
     * 值为0时，代表此用户没有关注该公众号，拉取不到其余信息。
     * @var int
     */
    public $subscribe =0;

    /**
     * openid
     * @var string
     */
    public $openid ="";

    /**
     * 昵称
     * @var string
     */
    public $nickname ="";

    /**
     * 值为1时是男性，值为2时是女性，值为0时是未知
     * @var int
     */
    public $sex =0;

    /**
     * 用户的语言，简体中文为zh_CN
     * @var string
     */
    public $language ="";
    /**
     * 城市
     * @var string
     */
    public $city ="";
    /**
     * 省份
     * @var string
     */
    public $province ="";
    /**
     * 国家
     * @var string
     */
    public $country ="";

    /**
     * 头像有0、46、64、96、132数值可选，0代表640*640正方形头像
     * @var string
     */
    public $headimgurl ="";
    /**
     * 用户关注时间
     * @var string
     */
    public $subscribe_time ="";
    public $unionid ="";
    /**
     * 公众号运营者对粉丝的备注
     * @var string
     */
    public $remark ="";

    /**
     * 用户所在的分组ID
     * @var string
     */
    public $groupid ="";


    public function  __construct($data=null){
        if($data!=null){
                $this->subscribe = $data->subscribe;
                $this->openid = $data->openid;
                $this->unionid = $data->unionid;
                if($this->subscribe==1){
                    $this->nickname = $data->nickname;
                    $this->sex = $data->sex;
                    $this->language = $data->language;
                    $this->city = $data->city;
                    $this->province = $data->province;
                    $this->country = $data->country;
                    $this->headimgurl = $data->headimgurl;
                    $this->subscribe_time = $data->subscribe_time;
                    $this->remark = $data->remark;
                    $this->groupid = $data->groupid;
                }
        }
    }




}