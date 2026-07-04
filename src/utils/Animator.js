"use strict";

export function animateNumber(

element,

start,

end,

duration=600

){

    let startTime=null;

    function animate(currentTime){

        if(!startTime)

            startTime=currentTime;

        const progress=Math.min(

            (currentTime-startTime)/duration,

            1

        );

        const value=Math.floor(

            start+

            (end-start)*progress

        );

        element.textContent=value;

        if(progress<1)

            requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

}
