import React, {FC, useState} from 'react'
import './index.scss';
import CustomSelect from '../../../components/CustomSelect';

const Balance: FC = () => {

    const [plan, setPlan] = useState('Username');
    const val : string = '0';
    const amount : string = '(Min 5)';
    return (
        <div className="balance">
            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <div className="balance-card1">
                        <div className="balance-title1">Add Balance</div>
                        <div className="balance-title2">Amount</div>
                        <div style={{height: '44px', width: '100%'}}>
                            <input type='text' className='input-balance' value={val} />
                        </div>
                        <div className="name">Username</div>
                        <div className="group-input">
                            <CustomSelect options={[""]} handler={setPlan} selected={plan} />
                        </div>
                        <button className="add-balance">Add Balance</button>
                    </div>
                    <div className="balance-card2">
                        <div className="balance-title1">Remove Balance</div>
                        <div className="balance-title2">Amount</div>
                        <div style={{height: '44px', width: '100%'}}>
                            <input type='text' className='input-balance' value={amount} />
                        </div>
                        <div className="name">Username</div>
                        <div className="group-input">
                            <CustomSelect options={[""]} handler={setPlan} selected={plan} />
                        </div>
                        <button className="add-balance">Remove Balance</button>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8">
                    <div className="balance-card3">
                        <div className="balance-header">
                            <div className="balance-title1">Orders</div>
                            <div className="group-input">
                                <CustomSelect options={[""]} handler={setPlan} selected={plan} />
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className="balance-content">
                            <table className="my-table table-responsive" style={{width: '100%'}}>
                                <thead>
                                    <tr style={{textAlign: 'center'}}>
                                        <th className='table-head'>ID</th>
                                        <th className='table-head'>Username</th>
                                        <th className='table-head'>Email</th>
                                        <th className='table-head'>Balance</th>
                                        <th className='table-head'>Rank</th>
                                        <th className='table-head'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr style={{textAlign: 'center'}}>
                                        <td className='table-body'>2</td>
                                        <td className='table-body'>Vishy</td>
                                        <td className='table-body'>qwerty@gmail.com</td>
                                        <td className='table-body'>323.3$</td>
                                        <td className='table-body'>Admin</td>
                                        <td style={{display:'flex', justifyContent:'center'}}>
                                            <tr>
                                                <td>
                                                    <button className="delete-balance">Delete</button>
                                                    <button className="ban-balance">Ban</button>
                                                    <button className="remove-balance">Remove Account</button>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;