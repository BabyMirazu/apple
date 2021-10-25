import React, { FC } from 'react';

const Choose: FC<{setCard: Function}> = ({ setCard }) => {
    return (
        <div className="w-100 h-100 fade-in">
            <div className="top">
                <div className="title" style={{color: "#82DCE2"}}>
                    Residential Plan Settings
                </div>
                <div className="close" onClick={() => setCard("content")}></div>
            </div>
            <div className="top">
                <div className="options-pop-over">
                    <div className="option" onClick={() => setCard("set")}>Set Plan limit</div>
                    <div className="option" onClick={() => setCard("remove")}>Remove Plan limit</div>
                    <div className="option" onClick={() => setCard("top-up")}>Quick Top Up</div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Choose;
