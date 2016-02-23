<?php
return array(
    //'配置项'=>'配置值'

    'LOAD_EXT_CONFIG' => 'db_local,debug,log,weixin',
    //'LOAD_EXT_CONFIG' => 'db_server,debug,log,weixin',
    'URL_MODEL' => '2', //URL模式

    //分组
    'MODULE_ALLOW_LIST' =>  array(
        'API',
        'WebSite'
    ),
    'DEFAULT_MODULE'  =>  'Website',

    'URL_CASE_INSENSITIVE'=> false,
    'URL_HTML_SUFFIX' => '',
    //'URL_HTML_SUFFIX'=>'html|shtml|xml|pdf', //限制伪静态的后缀

//        'TMPL_PARSE_STRING' =>array(
//            '__PUBLIC__' => 'http://7xkmth.com1.z0.glb.clouddn.com//hardpen/mobile/Public'
//        ),

    'AUTOLOAD_NAMESPACE' => array(
        'zebra' => VENDOR_PATH.'zebra',
    ),

    /*************************************************************/
    //'ERROR_PAGE'=>'./Public/system/404.html',
    //404调试模式下有效
    //'TMPL_EXCEPTION_FILE' => './Public/system/404.html',  //404页面的位置。
    //'TMPL_EXCEPTION_FILE' => 'http://www.zebramedia.cn/Index/labs',
    //404布署模式下有效
    //'URL_404_REDIRECT'    => './Public/system/404.html',  //__ROOT__.'/Public/Css'
    //'URL_404_REDIRECT'    => 'http://www.zebramedia.cn/Index/labs',
);