import {TweenMax, Power0} from 'gsap';
import {APPEAR_TIME, X_OFFSET} from '../constants';

export default {
    showLabel(target, onComplete) {
    },
    show(target, scale, startingPos) {
        console.log("SHOWING");
        TweenMax.to(target, 0, {opacity: 0});
        TweenMax.to(target, 0, {x: startingPos.x + X_OFFSET, top: startingPos.y})
        TweenMax.fromTo(target, APPEAR_TIME, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: scale,
            ease: Power0.easeNone
        });
    },
    hide(target) {
        TweenMax.to(target, APPEAR_TIME, {
            opacity: 0,
            scale: 0.5
        })
    }
}