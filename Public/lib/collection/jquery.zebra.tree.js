
/*
 *  JSON
 *   [
 *   {"id":"83","posts_category_pid":"-1","posts_category_name":"raymondzhong","posts_category_level":"0","posts_category_descriptions":"1234567"},
 *   {"id":"84","posts_category_pid":"-1","posts_category_name":"raymondzhong2","posts_category_level":"0","posts_category_descriptions":"1234567"}
 *   ]
 * */

function  Tree(data){
  
    var _treeJson = data;
    var _pidName = "posts_category_name";
    var _pid = "posts_category_pid";
    var _id = "id";
    var _descriptions= "posts_category_descriptions";
    var _tree=[];
    var _excludeData = []; //排除在外的id数据
    var _rootvalue = -1;   //根目录等级值 -1
    
    this.getData = function(){return _tree;}
    
    var _alltreeData=[];
    this.getAllData = function(){return _alltreeData;}
    
    this.setExclude=function(arrayData){
        _excludeData = arrayData;
    }
    
    /*
     * 解析初始化数据
     * @returns {undefined}
     */
    this.initialize=function(){
         _tree=[];
         for (var i = 0; i < _treeJson.length; i++) {
             //console.log(_treeJson[i][_id] +">>"+_excludeData.indexOf(_treeJson[i][_id]))
         
            if(_treeJson[i][_pid] == _rootvalue && _excludeData.indexOf(_treeJson[i][_id]) == -1 ){
                 var model = {
                                 id:_treeJson[i][_id],
                                 pid:_treeJson[i][_pid],
                                 name:_treeJson[i][_pidName],
                                 descriptions:_treeJson[i][_descriptions],
                                 child:[],
                                 charlevel:0
                                }
                     _tree.push(model);
                     this.loopNextNode(model);    
            }
        }
    }
    

    
    
    
    /*
     * 根数据
     * @returns {Array|Tree.root.rootData}
     */
    this.root = function(){
        var rootData=[]
        for (var i = 0; i < _treeJson.length; i++) {
            if(_treeJson[i][_pid] == _rootvalue &&  _excludeData.indexOf(_treeJson[i][_id]) == -1){
                 var model = {
                                 id:_treeJson[i][_id],
                                 pid:_treeJson[i][_pid],
                                 name:_treeJson[i][_pidName],
                                 descriptions:_treeJson[i][_descriptions],
                                 child:[],
                                 charlevel:0
                                }
                     rootData.push(model);
            }
        }
        return rootData;
        
    }
    
    
    this.loopNextNode = function(node){
        for (var i = 0; i < _treeJson.length; i++) { 
                if(_treeJson[i][_pid] == node.id &&  _excludeData.indexOf(_treeJson[i][_id]) == -1){
                     var model = {
                                 id:_treeJson[i][_id],
                                 pid:_treeJson[i][_pid],
                                 name:_treeJson[i][_pidName],
                                 descriptions:_treeJson[i][_descriptions],
                                 child:[],
                                 charlevel:node["charlevel"]+1
                                }
                     node.child.push(model);
                     this.loopNextNode(model);
                }
           } 
        
    }
    
    
    this.nextNode = function(node){
           for (var i = 0; i < _treeJson.length; i++) { 
                if(_treeJson[i][_pid] == node.id &&  _excludeData.indexOf(_treeJson[i][_id]) == -1){
                     var model = {
                                 id:_treeJson[i][_id],
                                 pid:_treeJson[i][_pid],
                                 name:_treeJson[i][_pidName],
                                 descriptions:_treeJson[i][_descriptions],
                                 child:[],
                                 charlevel:node["charlevel"]+1
                                }
                     node.child.push(model);
                }
           } 
    }
    
    
    //所有节点遍历排列
    this.eachNodeData = function(){
          var treeData = _tree;
          var allNode = [];
            for(var i=0;i<treeData.length;i++){  
               allNode.push(treeData[i]);
               loopeachNode(allNode,treeData[i]); 
            }
        return allNode;
    }
    
  
    
    //所有节点遍历排列
    this.listNode = function(){
          var treeData = _tree;
          var allNode = [];
            for(var i=0;i<treeData.length;i++){  
               allNode.push(treeData[i]);
               loopeachNode(allNode,treeData[i]); 
            }
        return allNode;
    }

    
    
    function loopeachNode(source,node){
        for(var i=0; i<node.child.length;i++){
              source.push(node.child[i]) ;
              loopeachNode(source,node.child[i]);
        }
    } 
    
    
    
   /***********************************************************************/   
    this.parseAllData=function(){
         _alltreeData=[];
         for (var i = 0; i < _treeJson.length; i++) {
            if(_treeJson[i][_pid] == _rootvalue){
                 var model = {
                                 id:_treeJson[i][_id],
                                 pid:_treeJson[i][_pid],
                                 name:_treeJson[i][_pidName],
                                 descriptions:_treeJson[i][_descriptions],
                                 child:[],
                                 charlevel:0
                                }
                     _alltreeData.push(model);
                     this.loopNextNode(model);    
            }
        }
    }
    
    //所有节点遍历排列
    this.listAllNode = function(){
          var treeData = _alltreeData;
          var allNode = [];
            for(var i=0;i<treeData.length;i++){  
               allNode.push(treeData[i]);
               loopeachNode(allNode,treeData[i]); 
            }
        return allNode;
    }
    
    
    //返回节点数据
    this.getParentNode=function(id){ 
        var parent_id="";
         for(var i=0;i<_listAllNode.length;i++){ 
             if(_listAllNode[i].id==id){ 
                parent_id = _listAllNode[i].pid;
             }
         }
         if(parent_id!=""){
             for(i=0;i<_listAllNode.length;i++){ 
                if(_listAllNode[i].id==parent_id){ 
                    return _listAllNode[i];
                }
            }
         }
    
         return null
    }
   var _listAllNode = []; 
   this.parseAllData(); 
    _listAllNode = this.listAllNode();
   /***********************************************************************/
   
}