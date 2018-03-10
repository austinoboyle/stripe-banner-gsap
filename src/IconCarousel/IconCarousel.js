import React, {Component} from 'react';
import IconContainer from '../Icon/IconContainer';
import {TimelineMax} from 'gsap';
import styles from './IconCarousel.scss';

export default class IconCarousel extends Component {
    constructor(props) {
        super(props);
        let main = new TimelineMax({paused: true});
        main.add("start");
        this.state = {
            numIconsLoaded: 0,
            timeline: main
        };
    }

    // This checks when all icons have loaded, and then starts the main timeline
    // Not necessarily desirable behaviour for how the animation should look, just used
    // to demonstrate the usage of the Transition callbacks functions
    checkAllLoaded() {
        if (this.state.numIconsLoaded === this.props.icons.length) {
            this.state.timeline.play()
        }
    }
    
    // This is used as a callback for the IconContainer -> Transition:onEntered
    iconEntered() {
        this.setState({numIconsLoaded: this.state.numIconsLoaded + 1}, this.checkAllLoaded);
    }

    render() {
        const {icons} = this.props;
        const {timeline} = this.state;
        return (
            <div className={styles.wrapper}>
                {icons.map((icon, index) => (
                    <IconContainer 
                        image={icon.image}
                        title={icon.title}
                        timeline={timeline}
                        iconEntered={() => this.iconEntered()} 
                        startingPos={{x: icon.x, y: icon.y}}
                        scale={icon.s}
                    />
                ))}
            </div>
        );
    }
}