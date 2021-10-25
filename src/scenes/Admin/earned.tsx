import React, { FC } from 'react';
import './style.scss';

const Earned: FC = () => {
    return (
        <div className="w-100 h-100">
            <div className="top">
                <div className="titles">
                    <div className="header">Total Earned</div>
                    <div className="detail">50 542 €</div>
                </div>
            </div>
        </div>
    )
}

export default Earned;
