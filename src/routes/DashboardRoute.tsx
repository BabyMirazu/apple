import React, { FC, ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import SideBar from '../components/SideBar';

interface Props extends RouteProps {
    component: ComponentType;
}

const DashboardRoute: FC<Props & RouteProps> = ({ component: Component, path, ...rest }) => {

    return (
        <div className="dashboard-layout">
            <SideBar />
            <div className="main-content">
                <Route {...rest} render={props => <Component {...props} />} />
            </div>
        </div>
    );
}

export default DashboardRoute;