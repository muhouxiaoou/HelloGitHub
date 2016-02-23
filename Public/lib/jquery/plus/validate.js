 /******************************************************************************/
//纯英文验证输入，判断是否为英文,正确返回ture,否则返回false
   function isEnglish(name) { 
     if(name.length == 0)
      return false;
     for(i = 0; i < name.length; i++) { 
      if(name.charCodeAt(i) > 128)
       return false;
        }
    return true;
    }

/******************************************************************************/
//取得字符串中中文字的个数 
function getChineseNum(obstring){
    var pattern = /^[一-龥]+$/i;
    var maxL,minL;
    maxL = obstring.length;
    obstring = obstring.replace(pattern,"");
    minL = obstring.length;
    return (maxL - minL)
   }

function isEmpty(str){
	return str.length == 0;
}

/******************************************************************************/
 //纯中文验证输入，判断是否为中文，正确返回 ture，否则返回false
    function isChinese(name) 
      { 
       if(name.length == 0)
        return false;
       for(i = 0; i < name.length; i++) { 
        if(name.charCodeAt(i) > 128)
         return true;
      }
       return false;
      }
    /******************************************************************************/
  //手机号码校验
  //正确的手机号码(如:13800571506 013800571505)则返回ture,否则返回false

   function isMobilephoneNum(mobileNum){
       var mobilephoneNumPat=/^1d{10}|01d{10}$/;
       var matchArray=mobileNum.match(mobilephoneNumPat);
       if(matchArray!=null){
        return true;
        }
       }  

  /******************************************************************************/
  //纯数字验证输入,输入为纯数字则返回ture,否则返回false

   function isDigital(str){
       var digitalPot=/^d*$/;
       var matchArray=str.match(digitalPot);
       if(matchArray!=null){
        return true;
        }
       }

 /******************************************************************************/
 //IP地址校验
 //正确的IP地址回ture,否则返回false
  function isIp(strIp) {
      var ipDomainPat=/^((2[0-4]d|25[0-5]|[01]?dd?).){3}(2[0-4]d|25[0-5]|[01]?dd?)$/;
 	 var matchArray=strIp.match(ipDomainPat);  
 		if(matchArray!=null){
 		 return true;
 		}               
 }
  
  /******************************************************************************/
 //电话号码校验
 //正确的电话号码（包括区号和“-”如0571-1234567[8] 010-1234567[8] ）则返回ture,否则返回false
  function isTelphoneNum(telNum){
      var telphoneNumPat=/^0d{2}-d{7,8}|0d{3}-d{7,8}$/;
   var matchArray=telNum.match(telphoneNumPat);
   if(matchArray!=null){
    return true;
    }
 }
  /******************************************************************************/
  //email校验
  function isEmail(email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	} 
   
/******************************************************************************/
//判断用户名（判断字符由字母和数字，下划线,点号组成.且开头的只能是下划线和字母）
function isAccount(str)
{
if(/^[a-z]\w{3,}$/i.test(str))   //用户名由字母和数字、下划线组成，且只能以字母开头，且长度最小为4位
	//if(/^([a-zA-z]{1})([\w]*)$/g.test(str))//用户名由字母和数字、下划线组成，且只能以字母开头
	{
	return true;
	}
	else{return false;}
}
