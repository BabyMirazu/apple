import React, {FC, useEffect} from 'react';
import SuccessIcon from '../../assets/icons/success.gif'
const Success: FC<{setCard: Function}> = ({ setCard }) => {
    useEffect(()=>{
        setTimeout(()=>{
            setCard('content')
        }, 2500);

        return () => {

        }
    }, [setCard])
    return (
        <div className="w-100 h-100 fade-in">

            <div className="middle">
                <div className="middle-icon">
                    <img src={SuccessIcon} className="success-icon" alt="Success"/>
                </div>
                <div className="success-content">
                    Successfully topped up plan
                </div>
            </div>
        </div>
    )
}

export default Success;