import React, { FC } from 'react';

const Remove: FC<{setCard: Function}> = ({ setCard }) => {
    return (
        <div className="w-100 h-100 fade-in">
            <div className="top">
                <div className="title">
                Remove plan limit
                </div>
                <div className="close" onClick={() => setCard("content")}></div>
            </div>
            <div className="middle">
                <div className="group-input">
                    <div className="text">Are you sure you want to remove plan limit?</div>
                    <button className="btn-main" onClick={() => setCard("success")}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Remove;
