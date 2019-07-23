import React from 'react';

const button = props => (
    <button type={props.type ? props.type : 'button'}>
        {props.title}
    </button>
)

export default button;