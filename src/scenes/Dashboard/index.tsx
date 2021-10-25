import React, { FC } from 'react';
import NavBar from '../../components/Navbar';
import ResPlan from '../../components/ResPlan';
import AddPlan from './AddPlan';
import Announcments from './Announcments';
import Checkouts from './Checkouts';
import Filters from './Filters';
import Log from './Log';
import './style.scss';

const Dashboard: FC = () => {
    return (
        <div className="fade-in"> 
            <div className="row">
                <NavBar />
            </div>
            <div className="content">
                <div className="row  mt-4">
                    <div className="col-lg-3 col-md-6">
                        <ResPlan />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ResPlan />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <AddPlan />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Announcments />
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <Filters />
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-12">
                            <Log />
                        </div>
                        <div className="col-lg-3 col-md-6 order-md-first order-lg-last">
                            <Checkouts />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Dashboard;