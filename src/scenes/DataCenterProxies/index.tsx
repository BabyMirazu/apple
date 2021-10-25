import React, {FC, useState} from 'react';
import NavBar from "../../components/Navbar";
import CustomSelect from "../../components/CustomSelect";
import Card from "./Card";
import './style.scss';

const DataCenterProxies: FC = () => {
    const [plan, setPlan] = useState("Infinity Zalanda DCs");

    return (
        <div className="datacenter-proxies fade-in">
            <div className="row">
                <NavBar />
            </div>
            <div className="content">
                <div className="row">
                    <div className="title mt-4">Switch Plans</div>
                </div>
                <div className="row">
                    <div className="group-input">
                        <CustomSelect options={["Infinity Zalanda DCs", "Option 2", "Option 3"]} handler={setPlan} selected={plan} />
                    </div>
                </div>

                <div className="row">
                    <Card/>
                    <Card/>
                </div>
            </div>

        </div>
    );
}

export default DataCenterProxies;