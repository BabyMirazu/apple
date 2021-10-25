import React, { FC } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Admin from '../scenes/Admin';
import Dashboard from '../scenes/Dashboard';
import DataCenterProxies from '../scenes/DataCenterProxies';
import FAQ from '../scenes/FAQ';
import MyAccount from '../scenes/MyAccount';
import Shop from '../scenes/Shop';
import DataCenterOrders from "../scenes/DataCenterOrders";
import DashboardRoute from './DashboardRoute';
import Login from '../pages/Login';
import Register from '../pages/register';

const Router: FC = () => {

    const location = useLocation();

    return (
        <Switch location={location} key={location.pathname}>
            <DashboardRoute exact path={'/dashboard'} component={Dashboard} />
            <DashboardRoute exact path={'/data_center_proxies'} component={DataCenterProxies} />
            <DashboardRoute exact path={'/shop'} component={Shop} />
            <DashboardRoute exact path={'/my_account'} component={MyAccount} />
            <DashboardRoute exact path={'/admin'} component={Admin} />
            <DashboardRoute exact path={'/datacenter_orders'} component={DataCenterOrders} />
            <DashboardRoute exact path={'/faq'} component={FAQ} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/register'} component={Register} />
            <Redirect to="/login" />
        </Switch>
    );
}

export default Router