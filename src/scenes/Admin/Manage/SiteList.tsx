import { FC } from 'react'


const SiteList:FC<{handleShow: Function, target: any, setTarget: Function}> = ({handleShow, target, setTarget})=>{
    const close = ()=>{
        target.style.color = "#6F6F6F"
        setTarget(target);
        handleShow(false)
    }
    return(
        <div className="sitelist dashboard-card col-lg-5 col-md-12">
                <div className="subtitle">Sitelist</div>
                <div className="case">Unbanned on</div>
                <div className="unbanned">
                    <div className="d-flex">
                        <button className="ban-btn"><span style={{color: "#ffffff", marginRight: "10px"}}>X</span>Zalando</button>
                        <button className="ban-btn"><span style={{color: "#ffffff", marginRight: "10px"}}>X</span>Footlocker</button>
                        <button className="ban-btn"><span style={{color: "#ffffff", marginRight: "10px"}}>X</span>AW LAB</button>
                    </div>
                </div>
                <div className="case">Banned on</div>
                <div className="banned">
                    <div className="d-flex">
                        <button className="unban-btn"><span style={{color: "#ffffff", marginRight: "10px"}}>X</span>FTL Queue</button>
                        <button className="unban-btn"><span style={{color: "#ffffff", marginRight: "10px"}}>X</span>SNS</button>
                        <button className="unban-btn"><span style={{color: "#ffffff", marginRight: "10px"}}>X</span>KICKZ</button>
                    </div>
                </div>
                <button className="subnet-btn" onClick={close}>Close Sitelist</button>
        </div>
    )
} 
export default SiteList