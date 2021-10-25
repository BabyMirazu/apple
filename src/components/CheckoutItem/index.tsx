import React, { FC} from 'react';
import Icon from '../../assets/icons/assignment_late.svg';
import Invoice from '../../assets/icons/invoice.svg';
import './style.scss';

const CheckoutItem: FC<{ withInvoice?: boolean }> = ({ withInvoice }) => {

    return (
        <div className={`checkout-item my-3 animate__animated animate__fadeInUp ${withInvoice ? "with-invoice" : ""}`}>
            <div className="icon my-auto">
                <img src={Icon} alt="assignment late" />
            </div>
            <div className="title-date">
                <span className="title">Residential Proxies</span>
                <span className="date">17th Sep 2021</span>
            </div>
            {withInvoice && <div className="invoice">
                <img src={Invoice} alt="invoice" />
                <span>Invoice</span>
            </div>}
            <div className="price">
                $323
            </div>
        </div>
    )
}

export default CheckoutItem;
