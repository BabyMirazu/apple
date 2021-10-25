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
            <div className="subtitle">Add Subnet</div>
            <div className="subnet-input">
                <label className="mb-1">Adress</label>
                <input type="string" defaultValue="192.168.545.0"/>
            </div>

            <div className="subnet-input">
                <label className="mb-1">Subnet mask</label>
                <CustomSelect options={["/24", "Option 2", "Option 3"]} handler={setSubnetMask} selected={subnetMask}/>
            </div>

            <div className="subnet-input">
                <label className="mb-1">Category</label>
                <CustomSelect options={["ISP", "Option 2", "Option 3"]} handler={setCategory} selected={category} />
            </div>

            <div className="subnet-input">
                <label className="mb-1">Renewal Date</label>
                <CustomSelect options={["14.11.2021", "Option 2", "Option 3"]} handler={setRenewalDate} selected={renewalDate} />
            </div>

            <div className="subnet-input">
                <label className="mb-1">Unbanned</label>
                <CustomMultiSelect options={["Zalando", "Footlocker", "AW LAB"]} handler={setUnbanned} selected={unbanned} />
            </div>
            {!edit?  <button className="subnet-btn mx-auto admin-btn">Add Subnet</button>: <div>
                <button className="subnet-btn admin-btn" onClick={Edit}>Save Changes</button>
                <button className="subnet-btn admin-btn">Delete Expense</button>
                </div>}
           
        </div>
    )
}

export default AddSubnet;
