const gsap = require('gsap');
const {TweenMax, Linear, Power0, TimelineLite, TweenLite} = gsap;

const duration = 1.5;

export default {
    showLabel(target, onComplete) {
    },
    show(target, scale, startingPos) {
        TweenMax.fromTo(target, duration, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: scale,
            ease: Power0.easeNone
        });
    },
    hide(target) {
        TweenMax.to(target, duration, {
            opacity: 0,
            scale: 0.5
        })
    }
}