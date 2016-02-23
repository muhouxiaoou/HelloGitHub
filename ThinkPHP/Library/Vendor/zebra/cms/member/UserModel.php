<?php
vendor('zebra.util.StringHelper');
vendor('zebra.util.ObjectHelper');
 class UserModel extends Think\Model {
    protected $tableName = 'users';	
    
    /*
    * 添加账号
    */
     public function addUser($username,$pwd,$useremail,$displayname) {
        if(!User::hasUser($username)){
		    $data['user_login'] = $username;
	            $data['user_pass'] = md5($pwd);
                    $data['user_email']=$useremail;
                    $data['user_status']=0;
                    $data['display_name'] = $displayname;
                    $data['user_regtime'] = date('y-m-d h:i:s',time());
                    $result = parent::add($data);
                    return \ObjectHelper::isResult($result);                                                        
 	    }
 	    return false;
    }
    
    /**
    * 验证帐号
    * @param $username
    */
    static public function hasUser($username){
        $result =  M('users')->getByUser_login($username);
        return isset($result);
    }
    /*
     * 账号删除
     */
    public function deleteUser($username){
        //parent::delete(array('user_login'=>$username));
        $user=M('users');
        
        return $user->where("user_login='".$username."'")->delete();
    }
    
    /*
     * 查询账户
     */
    public function selectUser(){
        
    }
    
    /*
     * 查询所有账户
     */
    public function selectallUser(){
        $result=$this->select();
        return $result;
    }
 }
