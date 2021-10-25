import React, {FC, useState} from 'react'
import CustomSelect from '../../../components/CustomSelect';

const UserProxy: FC = () => {

    const [plan, setPlan] = useState('Zalando DCs');
    const val : string = '0';
    const id : string = 'Enter Discord ID';
    return (
        <div className="userproxy">
            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <div className="userproxy-card">
                        <div className="userproxy-title1">Edit Datacenter Stock</div>
                        <div className="userproxy-title2">Select Plan</div>
                        <div className="group-input">
                            <CustomSelect options={[""]} handler={setPlan} selected={plan} />
                        </div>
                        <input type='text' className="input-text" value={val}></input>
                        <div className="btn-groups">
                            <button className="add">Add Stock</button>
                            <button className='delete'>Remove Stock</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8">
                    <div className="userproxy-card1">
                        <div className="userproxy-title1">Show Proxies of User</div>
                        <div className="header-group">
                            <div className='row'>
                                <div className='col-sm-4 col-md-4'>
                                    <input type='text' className='input' value = {id}></input>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div className="group-input">
                                        <CustomSelect options={[""]} handler={setPlan} selected={plan} />
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div className='group'>
                                        <div className='row'>
                                            <div className='col-sm-6 col-md-6'>
                                                <button className='search'>Search</button>
                                            </div>
                                            <div className='col-sm-6 col-md-6'>
                                                <button className='copy'>Copy Proxies</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='boxes'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProxy;