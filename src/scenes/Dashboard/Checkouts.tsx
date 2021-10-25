import React, { FC} from 'react';
import CheckoutItem from '../../components/CheckoutItem';

const Checkouts: FC = () => {
    return (
        <div className="dashboard-card checkouts">
            <div className="title mb-4">Recent Checkouts</div>
            <div className="checks mt-4">
                {Array(8).fill(0).map((item, idx) => <CheckoutItem key={"checkout-item-" + idx} />)}
            </div>
        </div>
    )
}

export default Checkouts;
