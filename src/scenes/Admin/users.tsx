import React, { FC } from 'react';
import './style.scss';

const Users: FC = () => {
    return (
        <div className="w-100 h-100">
            <div className="top">
                <div className="titles">
                    <div className="header">Total Users</div>
                    <div className="detail">5542</div>
                </div>
            </div>
        </div>
    )
}

export default Users;
