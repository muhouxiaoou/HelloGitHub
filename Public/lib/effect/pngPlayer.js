/**
 * Created by raymond on 2015/9/6.
 */


var  PngPlayer = function(dom){

    var _dom = dom;
    var _imgs;
    var _isPause=false;
    _init();
    var _timer=1;
    var _fps = 30;
    var _interval=1000/_fps;
    var _current = 0;
    var _isLoop=true;
    var _self=this;

    this.complete=null;

    function _init(){

        _imgs = _dom.find("img");
        _imgs.hide();
        _imgs.first().show();
    }

    this.setFPS=function(val){
        _fps = val;
        _interval=1000/_fps
    }

    this.getInterval=function(){
        return _interval;
    }

    this.setLoop=function(val){
        _isLoop = val;
    }

    this.run=function(val){
        if(val==null){
            val = 300;
        }
        _timer = setInterval(function(){
            if(!_isPause){
                _current++;
                if(_current>=_imgs.length){
                    if(!_isLoop){
                        clearInterval(_timer);
                        if(_self.complete!=null){
                            _self.complete();
                        }
                        return;
                    }else{
                        if(_self.complete!=null){
                            _self.complete();
                        }
                    }
                    _current=0;
                }
                _imgs.hide();
                $(_imgs[_current]).show();
            }
        },val);

    }


    this.setState=function(val){
        _isPause=!val;
    }

    this.stop=function(){
        clearInterval(_timer);
    }


}