import React, {FC, useState} from 'react';
import CustomSelect from "../../components/CustomSelect";
import SuccessIcon from '../../assets/icons/success.gif'

const Card: FC = () => {
    const [view, setView] = useState("");
    const [method, setMethod] = useState("Balance")
    const [renew, setRenew] = useState("Yes");
    const [renewed, setRenewed] = useState(false);

    const [saved, setSaved] = useState(false);
    const [isRenew, setIsRenew] = useState(true);
    const [isSaved, setIsSaved] = useState(true);

    const renewEvent = () => {
        setRenewed(true);
        setTimeout(()=>{
            setIsRenew(false);
        }, 2500);
    }

    const saveEvent = () => {
        setSaved(true);
        setTimeout(()=>{
            setIsSaved(false);
        }, 2500);
    }

    return (
        <div className="main-card plan-card animate__animated animate__fadeInUp">
            <div className="plan-card-content">
                <div className="left">
                    <div className="title">DCS ISPS</div>
                    <div className="number">25</div>
                    <div className="date">Valid Until <span>21st Jan 2021</span></div>
                    <div className="renewal">Auto Renewal <span>Enabled</span></div>
                </div>
                <div className="right">
                    <button className="btn" onClick={() => setView("renew")}>Renew</button>
                    <button className="btn" onClick={() => setView("view")}>View</button>
                </div>
            </div>
            {
                view === "view" ?
                    <>
                        <div>
                            <div className="cont">
                                <div className="square-log">
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                    192.168.1.1:InfinityWertus:AUeawe21123<br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="bottom-buttons">
                                <button className="btn">Copy</button>
                                <button className="btn">Export</button>
                            </div>
                        </div>
                    </>
                    : view === "renew" ?
                    <>
                        <div className="renew-plan">
                            <div className="group-input">
                                <label className="mb-3">Payment Methode</label>
                                <CustomSelect options={["Balance", "Dynamic", "Item"]} handler={setMethod} selected={method} />
                                <button className="mt-3 btn" onClick={()=>renewEvent()}>
                                    {
                                        renewed ?
                                            <div className="success">
                                                {
                                                    isRenew &&
                                                    <img src={SuccessIcon} className="success-icon" alt="Success"/>
                                                }
                                                <span className={`${isRenew ? "success-open": "success-close"}`}>Renewed</span>
                                            </div>
                                            : "Renew"
                                    }
                                </button>
                            </div>
                            <div className="group-input">
                                <label className="mb-3">Auto Renewal</label>
                                <CustomSelect options={["Yes", "No"]} handler={setRenew} selected={renew} />
                                <button className={`mt-3 btn `} onClick={()=>saveEvent()} >
                                    {
                                        saved ?
                                            <div className={`success`}>
                                                {
                                                    isSaved &&
                                                    <img src={SuccessIcon} className="success-icon" alt="Success"/>
                                                }<span className={`${isSaved ? "success-open": "success-close"}`}>Saved</span>
                                            </div>
                                            :"Save"
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="renewal-date">Valid after renewal: <span>21st Feb 2021</span></div>
                        </div>
                    </> : null
            }

        </div>
    )
}

export default Card;
