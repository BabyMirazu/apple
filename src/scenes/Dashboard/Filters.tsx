import React, { FC, useState} from 'react';
import CustomSelect from '../../components/CustomSelect';

const Filters: FC = () => {

    const [plan, setPlan] = useState("Static")
    const [type, setType] = useState("Premium")
    const [location, setLocation] = useState("Random")

    return (
        <div className="dashboard-card filters">
            <div className="group-input">
                <label className="mb-3">Residential Plan</label>
                <CustomSelect options={["Static", "Dynamic", "Item"]} handler={setPlan} selected={plan} blue />
            </div>

            <div className="group-input mt-3">
                <label className="mb-3">Type</label>
                <CustomSelect options={["Premium", "Option 2", "Option 3"]} handler={setType} selected={type} />
            </div>

            <div className="group-input mt-3">
                <label className="mb-3">Location</label>
                <CustomSelect options={["Random", "Option 2", "Option 3"]} handler={setLocation} selected={location} />
            </div>

            <div className="group-input mt-3">
                <label className="mb-3">Amount</label>
                <input type="number" defaultValue="0" min={0} />
            </div>
        </div>
    )
}

export default Filters;
