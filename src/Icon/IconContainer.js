import {Transition} from 'react-transition-group';
import React from 'react';
import animations from './animations';
import Icon from './Icon';

const IconContainer = ({iconEntered, scale, startingPos, ...props}) => (
    <Transition
        onEnter={(el) => {animations.show(el, scale, startingPos)}}
        onEntered={iconEntered}
        onExit={animations.hide}
        appear
        in
        timeout={0}
    >
        <Icon {...props} startingPos={startingPos}/>
    </Transition>
);

export default IconContainer;
