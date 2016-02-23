// JavaScript Document

/**
*起始入参2个都是（"yyyy-MM-dd hh:mm:ss"）日期格式的字符串
*返回值：0,1,-1（0：现在时间在起始时间之前，1：现在时间在两段时间中间，-1：现在时间在结束时间之后）
*/
function  DateTimeHelper(){
	    this.isBetweenDate=function(begindate,enddate,date){
		var date ;
		if(date){
			date=Date.parse(date);
		}else{
			date=Date.parse(new Date());	
		}
		var begindatesl=Date.parse(begindate);
		var enddatesl=Date.parse(enddate);
			if(begindate>date){
			
			return 0;
			}else if(begindate<=date && enddate>=date){
			
			return 1;
			}else{
			
			return -1;
			}
		}
		
		this.isBetweenTime=function(begintime,endtime){
			var date=new Date();
			var hh = date.getHours();
			var mm = date.getMinutes();
			var ss = date.getSeconds();
			date=hh+":"+mm+":"+ss;
			if(begintime>date){
				return 0;
			}else if(begintime<=date && endtime>=date){
				return 1;
			}else{
				return -1;
			}
		}
	}
