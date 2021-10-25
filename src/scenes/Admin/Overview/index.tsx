import React, { FC, useState } from 'react'
import './index.scss';
import CustomSelect from '../../../components/CustomSelect';

const Overview: FC = () => {

    const [plan, setPlan] = useState('October');
    return (

        <div className="overview">
            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <div className="card1">
                        <div className="overview-title1">Accouncement</div>
                        <div className="overview-title2">Add News</div>
                        <div className="box"></div>
                        <div className="btn-group">
                            <button className="add">Add News</button>
                            <button className="delete">Delete last News</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="card1">
                        <div className="header">
                            <div className="overview-title1">Monthly Overview</div>
                            <div className="group-input">
                                <CustomSelect options={[""]} handler={setPlan} selected={plan} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <div className="month">Sold this Month</div>
                                <div className="price">5542 €</div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="month">Spent this Month</div>
                                <div className="price">2542 €</div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="month">Estimated Profit</div>
                                <div className="price">2542 €</div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="row" style={{ position: 'sticky', backgroundColor: '#131419', top: 0, marginTop: '20px' }}>
                                <div className="col-sm-6 col-md-6">
                                    <div className="plan">Plan</div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="quantity">Quantity</div>
                                </div>
                            </div>
                        </div>
                        <div className="overview-content1">

                            <div className='animate__animated animate__fadeInUp'>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                        <div className="plan-title">Daily Datacenter Proxies</div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                        <div className="quantity-title">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="card1">
                        <div className="header">
                            <div className="overview-title1">Orders</div>
                        </div>
                        <div className='animate__animated animate__fadeInUp'>
                            <div className="row" style={{ position: 'sticky', backgroundColor: '#131419', top: 0 }}>
                                <div className="col-sm-4 col-md-4">
                                    <div className="plan">Plan</div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div className="quantity">Quantity</div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="quantity">User</div>
                                </div>
                                <div className="overview-content2">
                                    <div className='devider animate__animated animate__fadeInUp'>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4">
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                                <div className="plan-title">Residential Mesh</div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                                <div className="quantity-title">2</div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                                <div className="quantity-title">Vishy#23123</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Overview;