import React, {Component} from 'react';
import styles from './Icon.scss';
import animations from './animations';
import {Power0, Power1, TimelineLite, TimelineMax} from 'gsap';
import {X_MAX, X_MIN, X_OFFSET, X_TOTAL_DISTANCE, SLIDE_TIME, BOUNCE_HEIGHT, BOUNCE_TIME} from '../constants';
import {randomBetween} from '../utils';

export default class Icon extends Component {
    componentDidMount() {
    }

    render() {
        const {title} = this.props;
        return (
            <div className={styles.wrapper}>
            Icon
                <span className={styles.label}>{title}</span>
            </div>
        );
    }
}

