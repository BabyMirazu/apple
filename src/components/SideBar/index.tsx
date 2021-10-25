import React, { FC} from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes/routes'
import SideItem from './SideItem';
import Logo from '../../assets/small-logo.svg'
import LogoutIcon from '../../assets/icons/logout.svg'
import './style.scss';

const SideBar: FC = () => {

    const location = useLocation();
    let prefix = location.pathname.split("/")[1];

    return (
        <div className="sidebar pt-2">
            <div className="logo my-4">
                <Link to="/dashboard">
                    <img src={Logo} alt="" />
                    <h1>INFINITY</h1>
                </Link>
            </div>
            <div className="divider mt-2"></div>
            <ul className="mt-4">
                {routes.map(item => 
                    <SideItem
                        key={item.title} 
                        title={item.title}
                        icon={prefix === item.prefix ? item.activeIcon : item.icon}
                        link={`/${item.prefix}${item.link}`}
                        active={prefix === item.prefix}
                    />
                )}
            </ul>
            <div className="mt-4 d-flex">
                <div className="logout-btn  mx-auto">
                    <img src={LogoutIcon} alt="logout" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}

export default SideBar;