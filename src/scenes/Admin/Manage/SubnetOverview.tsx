import { FC } from 'react'

const SubnetOverview:FC<{setEdit: Function, handleShow: Function, setTarget: Function, target: any }> = ({setEdit, handleShow, setTarget, target })=>{
    const Edit = (e : any)=>{
        setEdit(true)
        e.target.style.color = "#92F8FF"
        setTarget(e.target)
    }
    const Show = (e : any)=>{
        e.target.style.color = "#92F8FF"
        setTarget(e.target)
        handleShow(true)
    }
    return(
        <div className="subnetoverview col-lg-7 dashboard-card">
            <div className="subtitle">Subnet Overview</div>
            <div className='table-container'>
            <table className="subnet-table">
                <tr>
                    <th className="th-Mask">ID</th>
                    <th className="th-Catergory">Date</th>
                    <th className="th-Adress">Name</th>
                    <th className="th-RenewalDate">Category</th>
                    <th className="th-Free">Monthly</th>
                    <th className="th-Sitelist">Amount</th>
                    <th className="th-Update">Update</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free">YES</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free">YES</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free">YES</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free">YES</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free" style={{color: "#FF1D1D"}}>No</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free">YES</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18.10.2021</td>
                    <td>Netnut 100 GB Renewal</td>
                    <td>Residential</td>
                    <td className="td-free">YES</td>
                    <td className="td-Status" onClick={(e) => Edit(e)} style={{cursor: "pointer"}}>799,00 €</td>
                    <td onClick={Edit}><button className="edit-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 9.45788V11.1045C1.625 11.2562 1.74417 11.3754 1.89583 11.3754H3.5425C3.61292 11.3754 3.68333 11.3483 3.73208 11.2941L9.64708 5.38454L7.61583 3.35329L1.70625 9.26288C1.65208 9.31704 1.625 9.38204 1.625 9.45788ZM11.2179 3.81371C11.4292 3.60246 11.4292 3.26121 11.2179 3.04996L9.95042 1.78246C9.73917 1.57121 9.39792 1.57121 9.18667 1.78246L8.19542 2.77371L10.2267 4.80496L11.2179 3.81371Z" fill="white"/>
</svg></button>
</td>
                </tr>
            </table>
            </div>
        </div>
    )
} 
export default SubnetOverview