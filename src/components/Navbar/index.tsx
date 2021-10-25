import React, { FC} from 'react';
import Avatar from '../../assets/avatar.svg';
import './style.scss';

const NavBar: FC = () => {
    return (
        <div className="main-navbar">
            <div className="current-user ms-auto">
                <div className="info">
                    <span className="balance">$103.1</span>
                    <span className="name">Vishy#1231</span>
                </div>
                <img src={Avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default NavBar;
