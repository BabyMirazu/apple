import { FC, useState } from 'react'
 import AddSubnet from './AddSubnet'
 import SubnetOverview from './SubnetOverview'
 import SiteList from './SiteList'


const Subnet:FC = ()=>{
    const [edit , setEdit] = useState(false)
    const [show, handleShow] = useState(false)
    const [target, setTarget] = useState()
    return(
        <div className="subnet d-flex">
           {show? <SiteList handleShow={handleShow} target={target} setTarget={setTarget}/>: <AddSubnet edit={edit} setEdit = {setEdit}/>
            }<SubnetOverview setEdit = {setEdit} handleShow={handleShow} setTarget = {setTarget} target={target}/>
        </div>
    )
} 
export default Subnet