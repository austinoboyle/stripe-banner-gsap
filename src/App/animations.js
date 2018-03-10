import {TweenMax, Elastic} from 'gsap';

const duration = 0.5;

export default  {
    show(target) {
        return TweenMax
            .fromTo(target, duration, {
                opacity: 0,
                height: 0,
            }, {
                opacity: 1,
                height: 100
            }
        );
    },
    hide(target) {
        return TweenMax
            .to(target, duration, {
                opacity: 0,
                height: 0,
            });
    }
};

