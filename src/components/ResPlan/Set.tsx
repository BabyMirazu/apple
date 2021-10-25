import React, { FC } from 'react';

const Set: FC<{setCard: Function}> = ({ setCard }) => {
    return (
        <div className="w-100 h-100 fade-in">
            <div className="top">
                <div className="title">
                    Set Plan limit
                </div>
                <div className="close" onClick={() => setCard("content")}></div>
            </div>
            <div className="middle">
                <div className="group-input">
                    <input type="number" placeholder="Amount (in GB)" min={0} />
                    <button className="btn-main" onClick={() => setCard("success")}>Set</button>
                </div>
            </div>
        </div>
    )
}

export default Set;
