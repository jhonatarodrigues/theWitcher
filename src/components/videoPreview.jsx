import React from 'react';

export default props => (
    <div className="boxVideo">
        <div className="space">
            <div className="content" style={{ background: 'url(' + props.thumb + ') center no-repeat' }}>

                <div className="title">
                    {props.title}
                </div>
            </div>
        </div>
    </div>
)