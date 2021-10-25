import React, { FC, useState } from 'react';
import NavBar from '../../components/Navbar';
import CustomSelect from '../../components/CustomSelect';
import './style.scss';
import Proxy from "./proxy";
import Earned from "./earned";
import Spent from "./spent";
import Users from "./users";
import Paid from "./paid";
import Overview from "./Overview";
import Balance from './Balance';
import Manage from "./Manage";
import Subnet from './Subnet';
import UserProxy from './UserProxy'


const Admin: FC = () => {
    const [plan, setPlan] = useState("Overview");
    return (
        <div className="admin fade-in">
            <div className = "row">
                <NavBar />
            </div>
            <div className = 'content'>
                <div className="admin-panel">
                    <div className="title mt-4">Admin Panel</div>
                </div>
                <div className="top">
                    <div>
                        <div className="title1 mt-4">Switch Panels</div>
                        <div className="row">
                            <div className="group-input">
                                <CustomSelect options={["Overview", "User Proxy", "Balance", "Manage Expenses", "Subnet Manager"]} handler={setPlan} selected={plan} />
                            </div>
                        </div>
                    </div>
                    <Proxy />
                    <Earned />
                    <Spent />
                    <Users />
                    <Paid />
                </div>
                <div className="card-content">
                    {plan === "Overview" ? <Overview /> :
                    plan === "User Proxy" ? <UserProxy /> :
                       plan === "User Proxy" ? <UserProxy /> : 
                             plan === "Balance" ? <Balance /> : 
                                 plan === "Manage Expenses" ? <Manage /> :
                                     <Subnet />}
                </div>
            </div>
        </div >
    );
}

export default Admin;