import React from 'react';
import logoDark from '../images/logo_dark.png';
import logoLight from '../images/logo_light.png';

const light = props => (
    <img src={logoLight} alt="The Whitcher 3" />
)

const dark = props => (
    <img src={logoDark} alt="The Whitcher 3"/>
)

export {light, dark};