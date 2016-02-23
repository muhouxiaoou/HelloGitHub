/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Flutter = function(container,imgs){
                /* Define the number of leaves to be used in the animation */
            // this.count = c;
             var _images = imgs; //array
			 var _container = container;  //DOM target
            
			/* 
                Called when the "Falling Leaves" page is completely loaded.
            */
			//开始飘零
            this.initleaves= function(count)
            {
              
                //var container = document.getElementById('wrapper');
                /* Fill the empty container with new leaves */
                if(count==null) count =7;
                for (var i = 0; i < count; i++) 
                {
                    _container.appendChild(createALeaf());
                }
            }
			
			//开始飘零
			this.start=function(){
				this.initleaves();
			}
			
			//清除
			this.clear=function(){
				   _container.innerHTML="";
				}
			

            /*
                Receives the lowest and highest values of a range and
                returns a random integer that falls within that range.
            */
            function randomInteger(low, high)
            {
                return low + Math.floor(Math.random() * (high - low));
            }


            /*
               Receives the lowest and highest values of a range and
               returns a random float that falls within that range.
            */
            function randomFloat(low, high)
            {
                return low + Math.random() * (high - low);
            }


            /*
                Receives a number and returns its CSS pixel value.
            */
            function pixelValue(value)
            {
                return value + 'px';
            }


            /*
                Returns a duration value for the falling animation.
            */

            function durationValue(value)
            {
                return value + 's';
            }


            /*
                Uses an img element to create each leaf. "Leaves.css" implements two spin 
                animations for the leaves: clockwiseSpin and counterclockwiseSpinAndFlip. This
                function determines which of these spin animations should be applied to each leaf.

            */
            var createALeaf=function ()
            {
                /* Start by creating a wrapper div, and an empty img element */
                var leafDiv = document.createElement('div');
                var image = document.createElement('img');

                /* Randomly choose a leaf image and assign it to the newly created element */
                image.src = _images[randomInteger(0, _images.length)];

                leafDiv.id = "leafid";
                leafDiv.style.top = "-70px";

                /* Position the leaf at a random location along the screen */
                leafDiv.style.left = pixelValue(randomInteger(50, 700));

                /* Randomly choose a spin animation */
                var spinAnimationName = (Math.random() < 0.5) ? 'flutter_clockwiseSpin' : 'flutter_counterclockwiseSpinAndFlip';

                /* Set the -webkit-animation-name property with these values */
                leafDiv.style.webkitAnimationName = 'flutter_fade, flutter_drop';
                image.style.webkitAnimationName = spinAnimationName;

                /* Set the -moz-animation-name property with these values */
                leafDiv.style.animationName = 'flutter_fade, flutter_drop';
                image.style.animationName = spinAnimationName;

                /* Figure out a random duration for the fade and drop animations */
                var fadeAndDropDuration = durationValue(randomFloat(6, 11));

                /* Figure out another random duration for the spin animation */
                var spinDuration = durationValue(randomFloat(4, 8));
                /* Set the -webkit-animation-duration property with these values */
                leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

                /* Set the -moz-animation-duration property with these values */
                leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

                var leafDelay = durationValue(randomFloat(0, 5));
                leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
                leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;

                image.style.webkitAnimationDuration = spinDuration;
                image.style.animationDuration = spinDuration;

                // add the <img> to the <div>
                leafDiv.appendChild(image);

                /* Return this img element so it can be added to the document */
                return leafDiv;
            }
    
}