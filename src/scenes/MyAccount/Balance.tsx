import React, { FC, useState} from 'react';
import CustomSelect from '../../components/CustomSelect';

const Balance: FC = () => {

    const [method, setMethod] = useState("Paypal");

    return (
        <div className="balance-part">
            <div className="dashboard-card balance">
                <div className="title">Balance</div>
                <div className="top">
                    <div className="money">
                        <div className="name">Total Balance</div>
                        <div className="number">$300.0</div>
                    </div>
                    <div className="money">
                        <div className="name">Total Spent</div>
                        <div className="number">$300.0</div>
                    </div>
                </div>

                <form >
                    <div className="title">Payment Method</div>
                    <div className="group-input w-100">
                        <CustomSelect options={["Paypal", "Option 2", "Option 3"]} handler={setMethod} selected={method} />
                    </div>
                    <div className="form-bottom">
                        <div className="group-input">
                            <input type="number" placeholder="Enter Amount" min={0} />
                        </div>
                        <button className="btn-card">Top up</button>
                    </div>
                </form>
            </div>
            <div className="dashboard-card login">
                <div className="title">Login</div>
                <form>
                    <div className="group-input w-100">
                        <input type="email" placeholder="Enter Email" required/>
                    </div>
                    <div className="form-bottom">
                        <div className="group-input">
                            <input type="password" placeholder="Enter Password" />
                        </div>
                        <button className="btn-card">{">"}</button>
                    </div>
                </form>
            </div>
            <div className="dashboard-card">
                <div className="title">Web hook</div>
                <form>
                    <div className="group-input w-100">
                        <input type="text" placeholder="Enter Discord Webhook" />
                    </div>
                    <div className="form-bottom">
                        <button className="btn-card w-50">Save</button>
                        <button className="btn-card w-50">Test</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Balance;
