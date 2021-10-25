import React, { FC } from 'react';

const TopUp: FC<{setCard: Function}> = ({ setCard }) => {

    return (
        <div className="w-100 h-100 fade-in">
            <div className="top">
                <div className="title">
                    Quick Top up
                </div>
                <div className="close" onClick={() => setCard("content")}></div>
            </div>
            <div className="middle">
                <div className="group-input">
                    <input type="text" placeholder="Plan : Residential Plan" />
                </div>
                <div className="group-input top-up-group">
                    <input type="number" placeholder="Amount (in GB)" min={0} />
                    <button className="btn-main" onClick={() => setCard("success")}>Top up</button>
                </div>
            </div>
        </div>
    )
}

export default TopUp;
