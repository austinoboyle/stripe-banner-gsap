import React from 'react';
import styles from './Button.scss';
import className from 'classnames';

const Button = ({color, background, href, Component, children, buttonClass}) => {
    const buttonClasses = className(styles.wrapper, buttonClass);
    return (
        <Component 
            href={href} 
            className={buttonClasses} 
            style={{background, color}}
        >
            {children}
        </Component>
    );
}

Button.defaultProps = {
    Component: 'a',
    color: '#6772e5',
    background: 'white'
}

export default Button;