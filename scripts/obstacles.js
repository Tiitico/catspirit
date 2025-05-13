
    let accontroll = 6000;
    function aceleration(){
        if (lifestats>0) {
            
        
        if (pause === false&& bossstats === false ) {
if (accontroll> 0) {
    accontroll -= 10
    requestAnimationFrame(aceleration)
}else{

        if (moving <2 ) {
            moving+=0.1
timer -=0.5
accontroll = 8000
requestAnimationFrame(aceleration)
}
}
}else{requestAnimationFrame(aceleration)}
        }
    }
    function obchoce() {
         if (colision === false) {
            if ( bossstats === false) {
                requestAnimationFrame(obsmoving)   
             }
         }
    }

        function obsmoving() {
            if (powerr=== false) {
                requestAnimationFrame(skinselector)
                    if (ox > 0) {
                        if(lifestats>0){
                        obstacle.style.display = 'flex'
                        if (pause === false && colision === false) {
                            ox -= moving;
                            requestAnimationFrame(obstaclecolision)
                        }}
requestAnimationFrame(obsmoving)
            } else {
obschoice = parseInt(Math.random() * 40) + 1; 

if (obschoice < 10 ) {
   obschoice = 7
}
requestAnimationFrame(skincontrol)
                ox = 101;
                obstacle.style.display = 'none'
                if (bossstats===false) {
                    requestAnimationFrame(obsmoving2)
                    }
            }
            obstacle.style.left = `${ox}%`
              obstacle.style.bottom = `${obschoice}%`
            
            }else{requestAnimationFrame(obsmoving2)}
        
        }
        function obsmoving2() {
            if (powerr=== false) {
                requestAnimationFrame(skinselector)
                 if (ox > 0 ) {
                    if (lifestats>0) {
                    obstacle2.style.display = 'flex'
                    if (pause === false && colision === false) {
                         ox -= moving;
                         requestAnimationFrame(obstaclecolision);

                    }}
requestAnimationFrame(obsmoving2)     
            } else {
                obschoice = parseInt(Math.random() * 20) + 1; 

                if (obschoice < 10 ) {
                   obschoice = 7
                }
                requestAnimationFrame(skincontrol)
                ox = 101; 
                obstacle2.style.display = 'none'
                if (bossstats===false) {
                    obschoice = parseInt(Math.random() * 20) + 1; 

                    if (obschoice < 10 ) {
                       obschoice = 7
                    }
                    requestAnimationFrame(skincontrol)
                    if (colision === false) {
                       if ( bossstats === false) {
                           requestAnimationFrame(obsmoving)   
                        }
                    }                }
            }
            obstacle2.style.left = `${ox}%`
              obstacle2.style.bottom = `${obschoice}%`
            
            }else{
                requestAnimationFrame(obchoce)
            }
 
        }
   
    
    
