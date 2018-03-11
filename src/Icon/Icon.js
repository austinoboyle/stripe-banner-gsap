import React, {Component} from 'react';
import styles from './Icon.scss';
import animations from './animations';

export default class Icon extends Component {
    componentDidMount() {
        const {startingPos, timeline} = this.props;

        timeline.add([
            animations.slide(this.icon, startingPos),
            animations.bounce(this.icon)
        ], "start");
    }

    render() {
        const {title, image} = this.props;
        return (
            <div 
                className={styles.wrapper}
                ref={(el) => {this.icon = el;}}
                style={{backgroundImage: `url(${image})`}}
            >
                <span className={styles.label}>{title}</span>
            </div>
        );
    }
}

