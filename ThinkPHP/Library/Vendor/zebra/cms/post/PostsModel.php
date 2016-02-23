<?php
vendor('zebra.util.StringHelper');
vendor('zebra.util.ObjectHelper');
class PostsModel  extends Think\Model{
    protected $tableName = 'posts';
    protected $patchValidate = true;
    protected $_validate = array(
        //array('post_author','require','作者不能不空'),
        array('post_title','require','标题不能不空')
    );

    /**
     *  添加帖子
     * @param $post_author
     * @param $post_date
     * @param $post_content
     * @param $post_title
     * @param $post_status
     * @param $post_password
     * @param $post_name
     * @param $post_type
     * @return bool
     */
    public function addPosts($post_author,$post_date,$post_content,$post_title,$post_status,$post_password,$post_name,$post_type){
        //作者ID
        $data[post_author]=$post_author;
        $data[post_date]=$post_date;
        //文章内容
        $data[post_content]=$post_content;
        //标题
        $data[post_title]=$post_title;
        //0垃圾站1草稿2等待审核3发布
        $data[post_status]=$post_status;
        //阅读密码
        $data[post_password]=$post_password;
        //文章缩略名
        $data[post_name]=$post_name;
        $data[post_type]=$post_type;
        
        $result=$this->add($data);
        return \ObjectHelper::isResult($result);
        
    }
    
    /*
     * 所有文章
     */
    public function selectPosts($where,$Page){
        $result=$this->alias('a')->join('left join zebra_users b on a.post_author=b.id')->join('left join zebra_posts_category_relation c on a.id=c.posts_id')->join('left join zebra_posts_category d on c.posts_category_id=')->where($where)->limit($Page->firstRow.','.$Page->listRows)->select();
        return $result;
    }

    /*
 * 所有文章总数
 */
    public function selectPostscount($where){
        $result=$this->alias('a')->join('left join zebra_users b on a.post_author=b.id')->where($where)->count();
        return $result;
    }
}
