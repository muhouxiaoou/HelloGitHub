<?php

 
vendor('zebra.util.HttpClient');

class weixin_1{ 
   
    public  $appid= "";
    public  $appsecret = "";
    
 
   function __construct($appid=null,$appsecret=null){
        $this->appid = $appid;
        $this->appsecret = $appsecret;
    }
    
   
    
  /**
   * 验证有效性
   * @param type $token
   */
   public function valid($token)
    {
        $echoStr = $_GET["echostr"];
        if($this->checkSignature($token)){
        	echo $echoStr;
        	exit;
        }
    }
     

    /**
     * 初始化appid
     * @param type $appid
     * @param type $appsecret
     */
    /*public  function init($appid,$appsecret){
        $this->appid = $appid;
        $this->appsecret = $appsecret;
    }*/

    public function responseMsg()
    {
        //get post data, May be due to the different environments
        $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

        //extract post data
        if (!empty($postStr)){
                /* libxml_disable_entity_loader is to prevent XML eXternal Entity Injection,
                   the best way is to check the validity of xml by yourself */
                libxml_disable_entity_loader(true);
              	$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                $fromUsername = $postObj->FromUserName;
                $toUsername = $postObj->ToUserName;
                $keyword = trim($postObj->Content);
                $time = time();
                $textTpl = "<xml>
                            <ToUserName><![CDATA[%s]]></ToUserName>
                            <FromUserName><![CDATA[%s]]></FromUserName>
                            <CreateTime>%s</CreateTime>
                            <MsgType><![CDATA[%s]]></MsgType>
                            <Content><![CDATA[%s]]></Content>
                            <FuncFlag>0</FuncFlag>
                            </xml>";             
		if(!empty( $keyword ))
                {
              		$msgType = "text";
                	$contentStr = "Welcome to wechat world!";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
                }else{
                	echo "Input something...";
                }

        }else {
        	echo "";
        	exit;
        }
    }
		
    private function checkSignature($token)
    {
    // you must define TOKEN by yourself
    /*if (!defined("TOKEN")) {
        throw new Exception('TOKEN is not defined!');
    }*/

            $signature = $_GET["signature"];
            $timestamp = $_GET["timestamp"];
            $nonce = $_GET["nonce"];

            //$token = TOKEN;
            $tmpArr = array($token, $timestamp, $nonce);
            // use SORT_STRING rule
            sort($tmpArr, SORT_STRING);
            $tmpStr = implode( $tmpArr );
            $tmpStr = sha1( $tmpStr );

            if( $tmpStr == $signature ){
                    return true;
            }else{
                    return false;
            }
    }
    
    
    /**
     * 网页授权，获得用户全部详细数据
     * @param type $appid
     * @param type $appsecret
     * @return type
     */
    public function webAuth($appid=null,$appsecret=null){
        if($appid==null){
            $appid= $this->appid;
        }
        if($appsecret==null){
            $appsecret = $this->appsecret;
        }
        $url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=".$appid."&secret=".$appsecret."&code=".$_GET['code']."&grant_type=authorization_code";
        
        $result  = json_decode(\HttpClient::get($url));

        $token = $result->access_token;
        $openid = $result->openid;
        $refresh_token = $result->refresh_token;
 
        //刷新网页授权的 access_token
        //$url2 = "https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=".$appid."&grant_type=refresh_token&refresh_token=".$refresh_token;
        //$result  =  json_decode(\HttpClient::get($url2));
        //var_dump($result);
        $token = $result->access_token;
        $openid = $result->openid;
        $refresh_token = $result->refresh_token;
         
        $url3 = "https://api.weixin.qq.com/sns/userinfo?access_token=".$token."&openid=".$openid."&lang=zh_CN";
        
         //微信 网页授权获取用户基本信息 文档
         //http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
         /*
            {
                "openid":" OPENID",
                "nickname": NICKNAME,
                "sex":"1",
                "province":"PROVINCE"
                "city":"CITY",
                "country":"COUNTRY",
                 "headimgurl":    "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46", 
                     "privilege":[
                     "PRIVILEGE1"
                     "PRIVILEGE2"
                 ]
                 "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
             }
          */
         $result  = json_decode(\HttpClient::get($url3));
         return $result;
    }
    
    
    
    
   //给用户发文本消息
    static public  function  sendMessage($access_token,$openid,$content){
        $url = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=".$access_token;
        $data='{
			"touser":"'.$openid.'",
			"msgtype":"text",
			"text":
			{
				 "content":"'.$content.'"
			}
		}'; 
        
        \HttpClient::postString($url,$data);
    }




    /**
     * 生成webAuto 活动地址
     * @param type $appid
     * @param type $redirect_page
     */
    static public function webAuth_UserinfoPage($appid,$redirect_page){
        /*
            https://open.weixin.qq.com/connect/oauth2/authorize
            ?appid=wx3bb947a768c3ba50
            &redirect_uri=http://gh.hcgame.cn/babynesQA/index.php?s=/Website/BabynesQA/index
            &response_type=code
            &scope=snsapi_userinfo
            &state=STATE#wechat_redirect
         */
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize"."?appid=".$appid."&redirect_uri=".$redirect_page."&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        return $url;
    }
    

    /**
     * 清除AccessToken.
     * @param type $appid
     */
    static public  function clear_access_token($appid){
         S($appid,NULL);
     }
     
    
     
    /**
     * 获得AccessToken.
     * @param type $appid
     * @param type $appsecret
     * @return null
     */
    static public  function get_access_token($appid,$appsecret){
            if(S($appid)){ 
                  return S($appid)->access_token;;
             }else{
                 $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
                 $curl = curl_init();
                         curl_setopt($curl, CURLOPT_URL, $url);
                         curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                         curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
                         curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);//输出内容为字符串
                 $result = curl_exec($curl);
                 
                 //{"access_token":"ACCESS_TOKEN","expires_in":7200}
                 //{"errcode":40013,"errmsg":"invalid appid"}
                 $jsonData = json_decode($result);
                 curl_close($curl);
                 
                 if($jsonData->access_token){
                     $timeout = $jsonData->expires_in;
                     S($appid,$jsonData,$timeout);
                     return S($appid)->access_token;
                 }
                 
                 if($jsonData->errcode){
                     return null;
                 }
                 
             }
             
         }
         
    
    
         
         
    static public  function get_server_ip($access_token){
        $url = "https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token={$access_token}";
        $jsonData = json_decode(\HttpClient::get($url));
 
        if($jsonData->errcode){
             return null;
         }
         
        if($jsonData->ip_list){
             return $jsonData->ip_list;
         }
    }
     
    /**
     * 是否在微信中
     * @return boolean
     */
    static public  function is_weixin(){
         $agent = strtolower($_SERVER['HTTP_USER_AGENT']);
         $is_weixin = strpos($agent, 'micromessenger') ? true : false ;   
         if($is_weixin){
            return true;
         }else{
            return false;
         }
    }
    
    
    
        
    
    
}