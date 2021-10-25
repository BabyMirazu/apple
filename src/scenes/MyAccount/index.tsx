import React, { FC } from 'react';
import NavBar from '../../components/Navbar';
import Balance from './Balance';
import Checkouts from './Checkouts';
import './style.scss';
import Wallet from './Wallet';

const MyAccount: FC = () => {
    return (
        <div className="my-account fade-in">
            <div className="row">
                <NavBar />
            </div>
            <div className="content">
                <div className="row mt-4">
                    <div className="col-md-6 col-lg-3">
                        <Wallet />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Balance />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <Checkouts />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MyAccount;