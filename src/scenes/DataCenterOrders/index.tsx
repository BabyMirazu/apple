import React, {FC, useState} from 'react';
import NavBar from "../../components/Navbar";
import CustomSelect from "../../components/CustomSelect";
import Table from "./Table";
import './style.scss';

const DataCenterOrders: FC = () => {
    const [plan, setPlan] = useState("Infinity Zalanda DCs");

    return (
        <div className="datacenter-panel fade-in">
            <div className="row">
                <NavBar />
            </div>
            <div className="content">
                <div className="row">
                    <div className="w-100 mt-4 justify-content-space-between align-center">
                        <div className="title my-auto">Manage Datacenter Panel</div>
                        <div className="group-input ms-auto">
                            <CustomSelect options={["Infinity Zalanda DCs", "Option 2", "Option 3"]} handler={setPlan} selected={plan} />
                        </div>
                    </div>
                    <div className="table-responsive">
                        <Table />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DataCenterOrders;