import  { FC, useState} from 'react';
import CustomSelect from '../../../components/CustomSelect';
import CustomMultiSelect from '../../../components/CustomMultiSelect'

const AddSubnet: FC<{ edit: boolean, setEdit: Function}> = ({edit, setEdit})=> {

    const [subnetMask, setSubnetMask] = useState("/24")
    const [category, setCategory] = useState("ISP")
    const [renewalDate, setRenewalDate] = useState("14.11.2021")
    const [unbanned, setUnbanned] = useState(["Zalando", "Footlocker", "AW LAB"])
    const Edit = ()=>{
        setEdit(false)
    }
    return (
        <div className="dashboard-card admin-card col-lg-5 add-subnet">
            <div className="subtitle">Add Expense</div>
            <div className="subnet-input">
                <label className="mb-1">Amount</label>
                <input type="string" defaultValue="799,00 €"/>
            </div>

            <div className="subnet-input">
                <label className="mb-1">Name</label>
                <input type="string" defaultValue="Netnut 100 GB Renewal"/>
            </div>

            <div className="subnet-input">
                <label className="mb-1">Category</label>
                <CustomSelect options={["Residential Proxy cost", "Option 2", "Option 3"]} handler={setCategory} selected={category} />
            </div>

            <div className="subnet-input">
                <label className="mb-1">Monthly renewal</label>
                <CustomSelect options={["Yes", "Option 2", "Option 3"]} handler={setRenewalDate} selected={renewalDate} />
            </div>

            <div className="subnet-input">
                <label className="mb-1">Date</label>
                <CustomSelect options={["18.10.2021", "Footlocker", "AW LAB"]} handler={setRenewalDate} selected={renewalDate} />
            </div>
            {!edit?  <button className="subnet-btn mx-auto admin-btn">Add Expense</button>: <div>
                <button className="subnet-btn admin-btn" onClick={Edit}>Save Changes</button>
                <button className="subnet-btn admin-btn">Delete Subnet</button>
                </div>}
           
        </div>
    )
}

export default AddSubnet;
