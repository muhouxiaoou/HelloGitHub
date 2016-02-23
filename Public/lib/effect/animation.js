var animation=function(element){
    //左右震动
    var shakestate;
    this.shakestart=function (){
        zd();
        shakestate=setInterval(zd,2000);
    }

    this.shakestop=function(){
        clearInterval(shakestate);
    }
    function zd(){
        var tm=new TimelineMax ({repeat: 5});
        var a=TweenMax.to(element,0.05,{rotation:20});
        var b=TweenMax.to(element,0.05,{rotation:0});
        var c=TweenMax.to(element,0.05,{rotation:-20});
        var d=TweenMax.to(element,0.05,{rotation:0});
        tm.add(a);
        tm.add(b);
        tm.add(c);
        tm.add(d);
    }

    //忽大忽小 s(0~1)
    var heartbeatstate;
    this.heartbeatstart=function(s,time){

		time=time||2
		s=s||0.3
        xt(s,time);
        heartbeatstate=setInterval(xt,time*1000,s,time);
    }
    this.heartbeatstop=function(){
        clearInterval(heartbeatstate);
    }
    function xt(s,time){
        var tm=new TimelineMax ();
        var a=TweenMax.to(element,time/4,{scale:1+s,ease: Power0.easeNone});
        var b=TweenMax.to(element,time/4,{scale:1,ease: Power0.easeNone});
        var c=TweenMax.to(element,time/4,{scale:1-s,ease: Power0.easeNone});
        var d=TweenMax.to(element,time/4,{scale:1,ease: Power0.easeNone});
        tm.add(a);
        tm.add(b);
        tm.add(c);
        tm.add(d);
    }

    //上下左右移动
    var movestate;
    this.movestart=function (x,y,time){
        time=time||2
        x=x||0;
        y=y||0;
        yd(x,y,time);
        movestate=setInterval(yd,time*1000,x,y,time);
    }
    this.movestop=function(){
        clearInterval(movestate);
    }
    function yd(xm,ym,time){
        var tm=new TimelineMax();
        var a=TweenMax.to(element,time/4,{x:xm,y:ym,ease: Power0.easeNone});
        var b=TweenMax.to(element,time/4,{x:0,y:0,ease: Power0.easeNone});
        var c=TweenMax.to(element,time/4,{x:-xm,y:-ym,ease: Power0.easeNone});
        var d=TweenMax.to(element,time/4,{x:0,y:0,ease: Power0.easeNone});
        tm.add(a);
        tm.add(b);
        tm.add(c);
        tm.add(d);
    }
}
