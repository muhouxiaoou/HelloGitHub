/**
 * 微信菜单
 * @param menuDom
 * @param data
 */

function   wxMenu(menuDom,data){
    var _menuData = data;
    var _menuDom = menuDom;
    var _self=this;

    init_createMenu();

    function init_createMenu(){
        menuDom.html("");
        for(var i=0;i<_menuData.button.length;i++){

            var  item ='<div class="four wide column">';
                item +='<div class="ui fluid card" >';

                item +=createMainMenu(_menuData.button[i]);
                //生成子菜单的地方
                item +='<div class="content subMenuItem sortable" style="height: 300px" >';
                item +=  batchAddSubMenuItem(_menuData.button[i]);
                item +='</div>';
                item +='<div class="extra content " style=" cursor: move">';
                item +='<i class="move icon" ></i>';
                item +='拖动';
                item +='</div>';
                item +='</div>';
                item +='</div>';
                menuDom.append(item);

        }
        bindEvent();
    }

    this.clear=function(){
        menuDom.html("");
    }
    this.createCard=function(data){
        var  item ='<div class="four wide column">'
            item +='<div class="ui fluid card" >'

            item +=createMainMenu(data)
            //生成子菜单的地方
            item +='<div class="content subMenuItem sortable" style="height: 300px" >'
            item +='</div>'

            item +='<div class="extra content " style=" cursor: move">'
            item +='<i class="move icon" ></i>';
            item +='拖动';
            item +='</div>'

            item +='</div>'
            item +='</div>';
            menuDom.append(item);
    }


    /**
     * 获得菜单数据
     * @returns {{button: Array}}
     */
    this.getMenuData=function(){
        var menus =  {"button":[]};
        $(".card").each(function(){
            var headerDom = $(this).first().children().find("div").first();
            var item = new Object();
                item.name =headerDom.text() ;
                item.type = headerDom.attr("data-type");
                if(item.type=="view"){
                    item.url =headerDom.attr("data-value");
                }else{
                    item.key =headerDom.attr("data-value");
                }
                menus.button.push(item);
            var subMenu =$($(this).children()[1]).children();
            if(subMenu.length>0){
                //有子菜单 主菜单按钮名最大长度11
                if(getCharsLength(item.name)>11){
                    headerDom.text(cutstr(item.name,11));
                    item.name =headerDom.text();
                }
                item.type="";
                if(item.url!=null){
                    delete item.url;
                }
                if(item.key!=null){
                   delete item.key;
                }
                item.sub_button=[];
            }else{
                //没子菜单 主菜单按钮名最大长度26
                if(getCharsLength(item.name)>26){
                    headerDom.text(cutstr(item.name,26));
                    item.name =headerDom.text();
                }
            }
            for(var i=0;i<subMenu.length;i++){
                var subItem = new Object();

                    subItem.name = $(subMenu[i]).first().text();
                    //子菜单的按钮名最大长度27
                    if(getCharsLength(subItem.name)>27){
                        $(subMenu[i]).first().text(cutstr(subItem.name,27))
                        subItem.name =$(subMenu[i]).first().text();
                    }
                    subItem.type = $(subMenu[i]).attr("data-type");
                    if(subItem.type=="view"){
                        subItem.url =$(subMenu[i]).attr("data-value");
                    }else{
                        subItem.key =$(subMenu[i]).attr("data-value");
                    }
                item.sub_button.push(subItem);
            }
        })
        return menus;
        //console.log(menus);

    }




    //绑定事件
    function  bindEvent(){

        $(".removeSubMenuItem").unbind();
        $(".removeSubMenuItem").click(function(){
            if(confirm("你确信删除该子栏目吗？"))
            {
                $(this).parent().remove();
            }
        })

        $(".editSubMenuItem").unbind();

        $(".editSubMenuItem").click(function(){
             //$(this).parent().text()
            var dom = $(this).parent();
            $('#edit_SelectItem').dropdown('set selected',dom.attr("data-type"));
            $('#edit_Title').val(dom.find('span').text());
            $('#edit_KeyValue').val(dom.attr("data-value"));
            $("#edit_MenuModal").modal({
                onApprove : function() {
                    var subTitle = $.trim($('#edit_Title').val());
                    if(subTitle.length==0){
                        alert("子菜单标题");
                        return false;
                    }


                    var selectItem = $.trim($('#edit_SelectItem').dropdown('get value'));
                    if(selectItem.length==0){
                        alert("请选择事件类型");
                        return false;
                    }
                    var subKeyValue = $('#edit_KeyValue').val();
                    if(subKeyValue.length==0){
                        alert("按钮KEY值/URL");
                        return false;
                    }
                    if(selectItem=="view" && !checkeURL(subKeyValue)){
                        alert("请输入网址数据");
                        return false;
                    }


                    dom.find('span').text(subTitle);
                    dom.attr("data-type",selectItem);
                    dom.attr("data-value",subKeyValue);

                    bindEvent();
                }
            }).modal('show');

        })


        $(".headerEdit").unbind();
        $(".headerEdit").click(function(){
            var header =   $(this).next();

            if($.trim($(header).attr("data-type")).length==0){
                $(header).attr("data-type","click");
            }
            if($(header).attr("data-value")=="undefined"){
                $(header).attr("data-value","");
            }

            $("#edit_Title").val($(header).text());
            $('#edit_SelectItem').dropdown('set selected',$(header).attr("data-type"));
            $("#edit_KeyValue").val($(header).attr("data-value"));




            var dom =$('#edit_mainMenu .content .input').find("input");
                 dom.val($(header).text());
            $("#edit_MenuModal").modal({
                onApprove : function() {
                    var title = $.trim($("#edit_Title").val());
                    if(title.length==0){
                        alert("菜单标题");
                        return false;
                    }
                    //if(getCharsLength(title)>16){
                    //    alert("菜单标题最多8个中文或者16个字母");
                    //    return false;
                    //}

                    var selectItem = $.trim($('#edit_SelectItem').dropdown('get value'));
                    if(selectItem.length==0){
                        alert("请选择事件类型");
                        return false;
                    }
                    var keyValue = $('#edit_KeyValue').val();
                    if(keyValue.length==0){
                        alert("按钮KEY值/URL");
                        return false;
                    }
                    if(selectItem=="view" && !checkeURL(keyValue)){
                        alert("请输入网址数据");
                        return false;
                    }


                    $(header).text(title);
                    $(header).attr("data-type",selectItem);
                    $(header).attr("data-value",keyValue);


                    bindEvent();
                }
            }).modal('show');

        })





        $(".headerAdd").unbind();
        $(".headerAdd").click(function(){
            var subMenuDom = $(this).parent().next();
            if(subMenuDom.find("div").length<5){
                $('#add_subSelect').dropdown("set text","").dropdown('clear');
                $('#add_subTitle').val("");
                $('#add_subKeyValue').val("");
                $("#add_subMenuModal").modal({
                    onApprove : function() {
                        var subTitle = $.trim($('#add_subTitle').val());
                        if(subTitle.length==0){
                            alert("子菜单标题");
                            return false;
                        }
                        var selectItem = $.trim($('#add_subSelect').dropdown('get value'));
                            if(selectItem.length==0){
                            alert("请选择事件类型");
                            return false;
                        }
                        var subKeyValue = $('#add_subKeyValue').val();
                        if(subKeyValue.length==0){
                            alert("按钮KEY值/URL");
                            return false;
                        }
                        if(selectItem=="view" && !checkeURL(subKeyValue)){
                            alert("请输入网址数据");
                            return false;
                        }


                        subMenuDom.append(addSubMenuItem(subTitle,selectItem,subKeyValue));

                        bindEvent();
                    }
                }).modal('show');

            }else{
                alert("不能超过5个子菜单！");
            }
        })


        $(".headerRemove").unbind();
        $(".headerRemove").click(function(){
            if(confirm("你确信删除该主菜单吗？"))
            {
                $(this).parent().parent().parent().remove();
            }
        });

        //添加主菜单
        $("#addMenu").unbind();
        $("#addMenu").click(function(){
            if($('.card').length<3){
                $('#add_subSelect').dropdown("set text","").dropdown('clear');
                $('#add_subTitle').val("");
                $('#add_subKeyValue').val("");
                $("#add_subMenuModal").modal({
                    onApprove : function() {
                        var subTitle = $.trim($('#add_subTitle').val());
                        if(subTitle.length==0){
                            alert("菜单标题");
                            return false;
                        }


                        var selectItem = $.trim($('#add_subSelect').dropdown('get value'));
                        if(selectItem.length==0){
                            alert("请选择事件类型");
                            return false;
                        }
                        var subKeyValue = $('#add_subKeyValue').val();
                        if(subKeyValue.length==0){
                            alert("按钮KEY值/URL");
                            return false;
                        }
                        if(selectItem=="view" && !checkeURL(subKeyValue)){
                            alert("请输入网址数据");
                            return false;
                        }
                        _self.createCard({type:selectItem,name:subTitle,value:subKeyValue});
                        bindEvent();
                    }
                }).modal('show');
            }else{
                alert("最多3个主菜单")
            }
        })


    }


    //主菜单头
    function createMainMenu(data){
        data= parseItem(data);

        if(data.type==undefined|| data.value=="undefined"){
            data.type="click";
        }
        if(data.value==undefined|| data.value=="undefined"){
            data.type="";
        }

        var item ='<div class="content" >'
                item +='<i class="right floated red remove headerRemove circle icon"></i>';
                item +='<i class="right floated add circle headerAdd icon"></i>';
                item +='<i class="right floated edit icon headerEdit"></i>';
                item +='<div class="header" style="word-break: break-all"  data-type="'+data.type+'" data-value="'+data.value+'">'+data.name+'</div>';
            item +='</div>';
        return item;
    }

    //添加子菜单
    function addSubMenuItem(title,type,value){
        //<div class="ui floating message">
        item ='<div class="ui  small warning message" style="word-wrap: break-word;" data-type="'+type+'" data-value="'+value+'">';
        item += '<span style="cursor: move">'+title+'</span>';
        item +='<i class="right floated red remove circle icon  removeSubMenuItem"></i>';
        item +='<i class="right floated edit icon editSubMenuItem"></i>';
        item +='</div>';
        return item;
    }


    //根据数据批量读取子菜单栏目
    function batchAddSubMenuItem(data){
       var item="";
       for(var i=0;i<data.sub_button.length;i++){
           var subData = parseItem(data.sub_button[i]);
           item += addSubMenuItem(subData.name,subData.type,subData.value);
       }
       return item;
    }


    function parseItem(data){
        var val="";
        if(data.key!=null){
            val = data.key;
        }else{
            val = data.url;
        }
        return {name:data.name,type:data.type,value:val};
    }


    /**
     * 检测是否URL
     * @param str
     * @returns {boolean}
     */
    function checkeURL(str){

        //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
        var Expression=/http(s)?:////([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp=new RegExp(Expression);
        if(str.indexOf("localhost")){
            str = str.replace("localhost","127.0.0.1");
        }
        if(objExp.test(str)==true){
            //alert("你输入的URL有效");
            return true;
        }else{
            //alert('你输入的URL无效');
            return false;
        }
    }


    /**
     * 获得字符长度
     * @param str
     * @returns {number}
     */
    function getCharsLength(str) {
        ///<summary>获得字符串实际长度，中文2，英文1</summary>
        ///<param name="str">要获得长度的字符串</param>
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;
            else realLength += 2;
        }
        return realLength;
    };


    //js截取字符串，中英文都能用
    //如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。
    //字符串，长度

    /**
     * js截取字符串，中英文都能用
     * @param str：需要截取的字符串
     * @param len: 需要截取的长度
     */
    function cutstr(str, len) {
        var str_length = 0;
        var str_len = 0;
        str_cut = new String();
        str_len = str.length;
        for (var i = 0; i < str_len; i++) {
            a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                //str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；
        if (str_length < len) {
            return str;
        }
    }




}


