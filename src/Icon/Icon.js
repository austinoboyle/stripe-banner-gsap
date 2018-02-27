import React, {Component} from 'react';
import styles from './Icon.scss';
import animations from './animations';
import {Power0, Power1, TimelineLite, TimelineMax} from 'gsap';
import {X_MAX, X_MIN, X_OFFSET, X_TOTAL_DISTANCE, SLIDE_TIME, BOUNCE_HEIGHT, BOUNCE_TIME} from '../constants';
import {randomBetween} from '../utils';

export default class Icon extends Component {
    componentDidMount() {
        const {title, initialProgress, startingPos} = this.props;
        const {main} = this.props.tls;

        let initialSlide = new TimelineMax();
        let repeatSlide = new TimelineMax({repeat: -1});
        this.slide = new TimelineMax();

        this.bounce = new TimelineMax({repeat: -1}).yoyo(true);
        
        initialSlide.fromTo(
            this.el, 
            SLIDE_TIME * (1 - startingPos.x/X_TOTAL_DISTANCE),
            {x: startingPos.x + X_OFFSET, top: startingPos.y},
            {x: X_MAX, ease: Power0.easeNone, top: startingPos.y}
        );
        repeatSlide.fromTo(
            this.el,
            SLIDE_TIME, 
            {x: X_MIN, top: startingPos.y},
            {x: X_MAX, top: startingPos.y, ease: Power0.easeNone}
        );

        this.slide.add(initialSlide);
        this.slide.add(repeatSlide);

        this.bounce.to(
            this.el,
            BOUNCE_TIME,
            {y: -BOUNCE_HEIGHT, ease: Power1.easeInOut}
        );
        this.bounce.timeScale(randomBetween(0.7, 1.3));
        this.slide.timeScale(0.5);
        main.add(this.bounce, "start");
        main.add(this.slide, "start");
    }

    render() {
        const {title, image} = this.props;
        return (
            <div 
                className={styles.wrapper}
                ref={(el) => {this.el = el;}}
                style={{backgroundImage: `url(${image})`}}
            >
                <span className={styles.label}>{title}</span>
            </div>
        );
    }
}

