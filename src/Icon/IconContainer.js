import {Transition} from 'react-transition-group';
import React from 'react';
import animations from './animations';
import Icon from './Icon';
import {APPEAR_TIME} from '../constants';

const IconContainer = ({...props}) => (
    <Icon {...props} /> 
);

export default IconContainer;
