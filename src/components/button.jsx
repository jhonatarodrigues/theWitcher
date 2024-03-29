import React from 'react';

const button = props => (
    <button className={props.class} onClick={props.click} type={props.type ? props.type : 'button'}>
        {props.title}
    </button>
)

export default button;