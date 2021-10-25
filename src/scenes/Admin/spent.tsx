import React, { FC } from 'react';
import './style.scss';

const Spent: FC = () => {
    return (
        <div className="w-100 h-100">
            <div className="top">
                <div className="titles">
                    <div className="header">Total Spent</div>
                    <div className="detail">24 542 €</div>
                </div>
            </div>
        </div>
    )
}

export default Spent;
