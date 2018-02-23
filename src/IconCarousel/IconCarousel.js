import React, {Component} from 'react';
import IconContainer from '../Icon/IconContainer';
import {TweenMax, Linear, Power0, TimelineMax, TweenLite} from 'gsap';
import styles from './IconCarousel.scss';

export default class IconCarousel extends Component {
    constructor(props) {
        super(props);
        let main = new TimelineMax();
        main.add("start");
        this.state = {
            numIconsLoaded: 0,
            tls: {
                main
            }
        };
    }

    checkAllLoaded() {
        if (this.state.numIconsLoaded === this.props.icons.length) {
            this.playAll()
        }
    }
    
    iconEntered() {
        this.setState({numIconsLoaded: this.state.numIconsLoaded + 1}, this.checkAllLoaded);
    }

    playAll() {
        this.state.tls.main.play();
    }

    render() {
        const {icons} = this.props;
        const {main} = this.state.tls;
        return (
            <div className={styles.wrapper}>
                {icons.map((icon, index) => (
                    <IconContainer 
                        image={icon.image}
                        title={icon.title}
                        tls={{main}}
                        iconEntered={() => this.iconEntered()} 
                        startingPos={{x: icon.x, y: icon.y}}
                        scale={icon.s}
                    />
                ))}
            </div>
        );
    }
}