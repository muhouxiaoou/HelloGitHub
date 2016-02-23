<?php

vendor('zebra.util.StringHelper');

vendor('zebra.util.JSON');
/**
 * Class NewsActMessage
 * 发送客服图文消息
    {
    "touser":"OPENID",
    "msgtype":"news",
    "news":{
    "articles": [
            {
                "title":"Happy Day",
                "description":"Is Really A Happy Day",
                "url":"URL",
                "picurl":"PIC_URL"
            },
            {
                "title":"Happy Day",
                "description":"Is Really A Happy Day",
                "url":"URL",
                "picurl":"PIC_URL"
            }
        ]
    }
    }
 */
class NewsActMessage {

    /**
     * OPENid
     * @var string
     */
    public  $openid="";

    /**
     * 客服文本消息
     * @var string
     */
    public  $msgType="news";



    private $articles=array();
//    private $articlesCount=0;


    /**
     * 发送客服图文消息
     * @param null $openid
     */
    public  function __construct($openid=null){
        if($openid){
            $this->openid = $openid;
        }

    }


    /**
     * 添加图文项
     * @param $title
     * @param $description
     * @param $picurl
     * @param $url
     */
    public function addItem($title="s",$description="s",$picurl="s",$url="s"){
//        $textTpl = '
//                 {
//                    "title":"%s",
//                    "description":"%s",
//                    "url":"%s",
//                    "picurl":"%s"
//                    }
//                ';
//        $result = sprintf($textTpl, $title, $description, $url,$picurl );
//        $this->articles[]=$result;
//        $this->articlesCount++;
//        ArticlesItem
        $articlesItem = new ArticlesItem();
        $articlesItem->title=$title;
        $articlesItem->description=$description;
        $articlesItem->picurl=$picurl;
        $articlesItem->url=$url;
        $this->articles[]=$articlesItem;
    }


    /**
     * 数据
     * @return string
     */
    public  function  data(){
        $textTpl = '{
                    "touser":"%s",
                    "msgtype":"%s",
                    "news":{
                         "articles":%s
                     }
                  }
                 ';
//        showDebug($this->articles);
        $result =   \JSON::encode($this->articles);
        return sprintf($textTpl, $this->openid, $this->msgType, $result );


    }



}


class ArticlesItem{
        /**
         * 标题
         * @var string
         */
        public $title="";

        /**
         * 备注
         * @var string
         */
        public $description="";

        /**
         * 网址链接
         * @var string
         */
        public $url="";

        /**
         * 图片地址
         * @var string
         */
        public $picurl="";
}