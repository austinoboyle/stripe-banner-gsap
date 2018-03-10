import React, {Component} from 'react';
import IconContainer from '../Icon/IconContainer';
import {TimelineMax} from 'gsap';
import styles from './IconCarousel.scss';

export default class IconCarousel extends Component {
    constructor(props) {
        super(props);
    }

    // This checks when all icons have loaded, and then starts the main timeline
    // Not necessarily desirable behaviour for how the animation should look, just used
    // to demonstrate the usage of the Transition callbacks functions
    checkAllLoaded() {
    }
    
    // This is used as a callback for the IconContainer -> Transition:onEntered
    iconEntered() {
    }

    render() {
        return (
            <div className={styles.wrapper}>
                IconCarousel
            </div>
        );
    }
}