import {TweenMax, Power0, TimelineMax, Power1} from 'gsap';
import {
    APPEAR_TIME, X_OFFSET, SLIDE_TIME, X_TOTAL_DISTANCE,
    X_MAX, X_MIN, BOUNCE_HEIGHT, BOUNCE_TIME
} from '../constants';
import {randomBetween} from '../utils';

export default {
    show(target, scale, startingPos) {
        TweenMax.to(target, 0, {x: startingPos.x, top: startingPos.y})
        TweenMax.fromTo(target, APPEAR_TIME, 
            {scale: 0.5, opacity: 0},
            {opacity: 1, scale: scale, ease: Power0.easeNone}
        );
    },
    hide(target) {
        TweenMax.to(target, APPEAR_TIME, {opacity: 0, scale: 0.5});
    },
    slide(target, startingPos) {
        const slide = new TimelineMax();
        const initialSlide = new TimelineMax();
        const repeatSlide = new TimelineMax({repeat: -1});

        initialSlide.fromTo(
            target, 
            SLIDE_TIME * (1 - (startingPos.x + X_OFFSET)/X_TOTAL_DISTANCE ),
            {x: startingPos.x, top: startingPos.y},
            {x: X_MAX, ease: Power0.easeNone, top: startingPos.y}
        );
        repeatSlide.fromTo(target, SLIDE_TIME, 
            {x: X_MIN, top: startingPos.y},
            {x: X_MAX, top: startingPos.y, ease: Power0.easeNone}
        );
        slide.add([initialSlide, repeatSlide], "+=0", "sequence");
        return slide;
    },
    bounce(target) {
        const bounce = new TimelineMax({repeat: -1}).yoyo(true);
        bounce.to(target, BOUNCE_TIME, {
            y: -BOUNCE_HEIGHT, 
            ease: Power1.easeInOut
        });
        bounce.timeScale(randomBetween(0.7, 1.3));
        return bounce;
    }
}