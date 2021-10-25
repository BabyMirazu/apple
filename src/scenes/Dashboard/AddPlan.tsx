import React, { FC} from 'react';
import Icon from '../../assets/icons/add.svg'

const AddPlan: FC = () => {
    return (
        <div className="dashboard-card add-plan">
            <img src={Icon} alt="Add" />
            <span>Add a proxy plan</span>
        </div>
    )
}

export default AddPlan;
