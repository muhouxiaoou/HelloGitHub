var filp=function(element){
	//CSSPlugin.defaultTransformPerspective = 600;
	
	tops=element.find(".filp-front-plane");
	bottoms=element.find(".filp-back-plane");
	TweenMax.set(tops, {css:{transformPerspective:1000}});
	TweenMax.set(bottoms, {css:{transformPerspective:1000}});

	this.Location;
	this.number=0;
	this.topangle=0;
	this.bottomangle=0;
    this.leftnumber=0;
    this.rightnumber=0;
	this.right=function(time,f){

		if(this.number%2==0){
            if(this.Location=='left'){
                TweenMax.set(tops, {rotationY: this.topangle});
                TweenMax.set(bottoms, {rotationY: this.bottomangle});
                TweenMax.to(tops,time/2,{rotationY:this.topangle+90,ease: Power0.easeNone});
                TweenMax.to(bottoms,time/2,{rotationY:this.bottomangle+90,delay :time/2,ease: Power0.easeNone,onComplete:
                    function(){
                        if(f){
                            f();
                        }
                    }});
                this.topangle=this.topangle+90;
                this.bottomangle=this.bottomangle+90;
            }else{
                if(this.number==0){this.topangle=0;this.bottomangle=90}
                TweenMax.set(tops,{rotationY:this.topangle});
                TweenMax.set(bottoms,{rotationY:180+this.bottomangle});

                TweenMax.to(tops,time/2,{rotationY:this.topangle+90,ease: Power0.easeNone});
                TweenMax.to(bottoms,time/2,{rotationY:this.bottomangle+270,delay :time/2,ease: Power0.easeNone,onComplete:
                       function(){
                            if(f){
                                f();
                            }
                           }});
                this.topangle=this.topangle+90;
                this.bottomangle=this.bottomangle+270;
            }
		}else{
            if(this.Location=='left'){
                TweenMax.set(tops, {rotationY: this.topangle});
                TweenMax.set(bottoms, {rotationY: this.bottomangle});
                TweenMax.to(bottoms,time/2,{rotationY:this.bottomangle+90,ease: Power0.easeNone});
                TweenMax.to(tops,time/2,{rotationY:this.topangle+90,delay :time/2,ease: Power0.easeNone,onComplete:
                    function(){
                        if(f){
                            f();
                        }
                    }});
                this.topangle=this.topangle+90;
                this.bottomangle=this.bottomangle+90;
            }else{
                TweenMax.set(tops,{rotationY:this.topangle+180});
                TweenMax.set(bottoms,{rotationY:this.bottomangle});

                TweenMax.to(tops,time/2,{rotationY:this.topangle+270,delay :time/2,ease: Power0.easeNone,onComplete:
                       function(){
                            if(f){
                                f();
                            }
                           }});
                TweenMax.to(bottoms,time/2,{rotationY:this.bottomangle+90,ease: Power0.easeNone});

                this.topangle=this.topangle+270;
                this.bottomangle=this.bottomangle+90;
            }
		}
		

        this.Location='right';
		this.number++;
        this.rightnumber++;
	}
	this.left=function(time,f){
		
		if(this.number%2==0){
            if(this.Location=='right'){
                TweenMax.set(tops, {rotationY: this.topangle});
                TweenMax.set(bottoms, {rotationY: this.bottomangle});
                TweenMax.to(tops,time/2,{rotationY:this.topangle-90,ease: Power0.easeNone});
                TweenMax.to(bottoms,time/2,{rotationY:this.bottomangle-90,delay :time/2,ease: Power0.easeNone,onComplete:
                    function(){
                        if(f){
                            f();
                        }
                    }});
                this.topangle=this.topangle-90;
                this.bottomangle=this.bottomangle-90;
            }else {
                if (this.number == 0) {
                    this.topangle = 0;
                    this.bottomangle = -90
                }
                TweenMax.set(tops, {rotationY: this.topangle});
                TweenMax.set(bottoms, {rotationY: -180 + this.bottomangle});

                TweenMax.to(tops, time / 2, {rotationY: this.topangle - 90, ease: Power0.easeNone});
                TweenMax.to(bottoms, time / 2, {rotationY: this.bottomangle - 270, delay: time / 2, ease: Power0.easeNone, onComplete: function () {
                    if (f) {
                        f();
                    }
                }});
                this.topangle = this.topangle - 90;
                this.bottomangle = this.bottomangle - 270;
            }
		}else{
            if(this.Location=='right'){
                TweenMax.set(tops, {rotationY: this.topangle});
                TweenMax.set(bottoms, {rotationY: this.bottomangle});
                TweenMax.to(bottoms,time/2,{rotationY:this.bottomangle-90,ease: Power0.easeNone});
                TweenMax.to(tops,time/2,{rotationY:this.topangle-90,delay :time/2,ease: Power0.easeNone,onComplete:
                    function(){
                        if(f){
                            f();
                        }
                    }});
                this.topangle=this.topangle-90;
                this.bottomangle=this.bottomangle-90;
            }else {
                TweenMax.set(tops, {rotationY: this.topangle - 180});
                TweenMax.set(bottoms, {rotationY: this.bottomangle});

                TweenMax.to(tops, time / 2, {rotationY: this.topangle - 270, delay: time / 2, ease: Power0.easeNone, onComplete: function () {
                    if (f) {
                        f();
                    }
                }});
                TweenMax.to(bottoms, time / 2, {rotationY: this.bottomangle - 90, ease: Power0.easeNone});

                this.topangle = this.topangle - 270;
                this.bottomangle = this.bottomangle - 90;
            }
		}
        this.Location='left';
        this.number--;
        this.leftnumber++;
	}

    this.setFront=function(html){
        tops.html("");
        tops.html(html);
    }

    this.setBack=function(html){
        bottoms.html("");
        bottoms.html(html);
    }

    this.loopLeft=function(time,a,f){


        if(this.number%2==0){
            if (this.number == 0) {
                this.topangle = 0;
                this.bottomangle = -90
            }
            TweenMax.set(tops, {rotationY: this.topangle,rotation:0});
            TweenMax.set(bottoms, {rotationY: this.bottomangle,rotation:0});
            TweenMax.to(tops,time,{rotation:-360*a,onComplete: function () {
                if (f) {
                    f();
                }
            }});
        }else{

            TweenMax.to(bottoms,time,{rotation:-360*a,onComplete: function () {
                if (f) {
                    f();
                }
            }});
        }

    }

    this.loopRight=function(time,a,f){
        if (this.number == 0) {
            this.topangle = 0;
            this.bottomangle = 90
        }
        TweenMax.set(tops, {rotationY: this.topangle,rotation:0});
        TweenMax.set(bottoms, {rotationY: this.bottomangle,rotation:0});

        if(this.number%2==0){

            TweenMax.to(tops,time,{rotation:360*a,onComplete: function () {
                if (f) {
                    f();
                }
            }});
        }else{

            TweenMax.to(bottoms,time,{rotation:360*a,onComplete: function () {
                if (f) {
                    f();
                }
            }});
        }

    }
}