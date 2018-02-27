import {Transition} from 'react-transition-group';
import React from 'react';
import animations from './animations';
import Icon from './Icon';
import {APPEAR_TIME} from '../constants';

const IconContainer = ({iconEntered, scale, startingPos, ...props}) => (
    <Transition
        // When it first mounts 
        onEnter={(el) => {animations.show(el, scale, startingPos)}}
        // When onEnter has completedo
        onEntered={iconEntered}
        onExit={animations.hide}
        appear
        in
        timeout={APPEAR_TIME * 1000}
    >
        <Icon {...props} startingPos={startingPos}/>
    </Transition>
);

export default IconContainer;
