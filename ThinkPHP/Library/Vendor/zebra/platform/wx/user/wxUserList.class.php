<?php
namespace zebra\platform\wx\user;

//total	关注该公众账号的总用户数
//count	拉取的OPENID个数，最大值为10000
//data	列表数据，OPENID的列表
//next_openid	拉取列表的最后一个用户的OPENID

class wxUserList {


    /**
     * 关注该公众账号的总用户数
     * @var int
     */
    public $total=0;

    /**
     * 拉取的OPENID个数，最大值为10000
     * @var int
     */
    public $count=0;

    /**
     * 所有用户的OPENID
     * @var array
     */
    public $openidList = array();

    /**
     * 拉取列表的最后一个用户的OPENID
     * @var string
     */
    public $next_openid="";




    public function  __construct($data=null){
        $this->total = $data->total;
        $this->count = $data->count;
        if($data->openidList){
            $this->openidList = $data->openidList;
        }else{
            $this->openidList = $data->data->openid;
        }
        $this->next_openid = $data->next_openid;
    }

    /**
     * 是否最后一页数据
     */
    public function  IsLastData(){
        return $this->total==$this->count;
    }

}