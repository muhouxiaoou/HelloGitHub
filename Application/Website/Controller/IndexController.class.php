<?php
namespace Website\Controller;
use Overtrue\Wechat\Utils\JSON;
use Think\Controller;
use Think\Model;
use Think\Think;
use zebra\platform\wx\wxAuth;
use zebra\platform\wx\wxJssdk;
use zebra\util\AjaxHelper;
use zebra\util\HttpClient;
use zebra\util\ObjectHelper;
use zebra\util\UrlHelper;

class IndexController extends Controller {
    public function index(){

//       $this->display();
        $url="http://campaign.honor.cn/4a-awards/xiaok/auth?jump_url=".urlencode("campaign.honor.cn/watch-k/");
        UrlHelper::go($url);

    }

    public function urlbm(){
        echo urlencode("campaign.honor.cn/watch-k/index4.html/");

    }

}