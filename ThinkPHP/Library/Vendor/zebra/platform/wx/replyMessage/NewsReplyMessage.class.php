<?php
namespace  zebra\platform\wx\replyMessage;

/**
 * 被动回复图文消息
 *   参数 	是否必须 	说明 
 *   ToUserName 	是 	接收方帐号（收到的OpenID）
 *   FromUserName 	是 	开发者微信号
 *   CreateTime 	是 	消息创建时间 （整型）
 *   MsgType 	是 	news
 *   ArticleCount 	是 	图文消息个数，限制为10条以内
 *   Articles 	是 	多条图文消息信息，默认第一个item为大图,注意，如果图文数超过10，则将会无响应
 *   Title 	否 	图文消息标题
 *   Description 	否 	图文消息描述
 *   PicUrl 	否 	图片链接，支持JPG、PNG格式，较好的效果为大图360*200，小图200*200
 *   Url 	否 	点击图文消息跳转链接 
 */

class NewsReplyMessage  extends BaseReplyMessage{
    
    /**
     * 类型
     * @var string
     */
    public $msgType = "news";
    
  

    /**
     *图文消息个数，限制为10条以内
     * @var int
     */
    private $articleCount = "0";


    /**
     * 多条图文消息信息，默认第一个item为大图,注意，如果图文数超过10，则将会无响应
     * @var type 
     */
    private  $articles="";


    /**
     * 添加条图文
     * @param type $title
     * @param type $description
     * @param type $picUrl
     * @param type $url
     */
    public function addItem($title="",$description="",$picUrl="",$url=""){
        $item = new NewsReplyItem();
        $item->title = $title;
        $item->description = $description;
        $item->picUrl = $picUrl;
        $item->url = $url;
        $this->articles.= $item->data();
        $this->articleCount++;
    }
    
    /**
     * 被动回复的内容
     * @return string
     */
    public function data() {
        $textTpl = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <ArticleCount>%s</ArticleCount>
                    <Articles>
                    %s
                    </Articles>
                    </xml>"; 
        return sprintf($textTpl, $this->toUserName, $this->fromUserName, $this->createTime, $this->msgType, $this->articleCount,$this->articles); 
    }
    
}


class NewsReplyItem{
    
    /**
     *图文消息标题
     * @var string 
     */
    public $title="";
    
    /**
     *图文消息描述
     * @var string 
     */
    public $description="";
    
    /**
     * 图片链接，支持JPG、PNG格式，较好的效果为大图360*200，小图200*200
     * @var string 
     */
    public $picUrl="";
    
    
    /**
     * 点击图文消息跳转链接
     * @var string 
     */
    public $url=""; 
    
    public  function data(){
         $textTpl = "<item>
                        <Title><![CDATA[%s]]></Title>
                        <Description><![CDATA[%s]]></Description>
                        <PicUrl><![CDATA[%s]]></PicUrl>
                        <Url><![CDATA[%s]]></Url>
                     </item>"; 
        return sprintf($textTpl, $this->title, $this->description, $this->picUrl, $this->url);
        
    }
}