<?php
vendor('zebra.util.StringHelper');
vendor('zebra.util.ObjectHelper');

class ClassifyModel extends \Think\Model {
    protected $tableName ='posts_category';
    protected $patchValidate = true;
    
    public function addClassify($data){
        $result=$this->add($data);
        return \ObjectHelper::isResult($result);   
    }
    
    public function selectClassify(){
        $sql="select a.id,a.posts_category_pid,a.posts_category_name,a.posts_category_descriptions,b.posts_category_name as f_posts_category_name from zebra_posts_category a left join zebra_posts_category b on a.posts_category_pid=b.id";
        return $this->query($sql);
    }
    
    public function selectBy($where){
        return $this->where($where)->select();
    }
}
