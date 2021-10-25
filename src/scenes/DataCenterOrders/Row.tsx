import React, { FC, useState} from 'react';
import Up from '../../assets/icons/keyboard_arrow_up.svg';
import Down from '../../assets/icons/keyboard_arrow_down.svg';

const Row: FC = () => {

    const [state, setState] = useState("down")
    const open = (e: any) => {
        e.preventDefault();
        setState("up");
    }
    const close = (e: any) => {
        e.preventDefault();
        setState("down");
    }

    const collapse = () => {
        if(state  === "up"){
            setState("down");
        }else{
            setState("up");
        }
    }

    return (
        <>
            <tr className="animate__animated animate__fadeInUp" onClick={() => collapse()}>
                <td style={{width: 315}}>50 Monthly Zalando DCs</td>
                <td>2313.323232</td>
                <td>Oct 20, 2021</td>
                <td>1231231235656</td>
                <td className="complete">Complete</td>
                <td>
                    {state  === "up" ? 
                        <img src={Up} alt="up" onClick={(e) => close(e)} />
                    : 
                        <img src={Down} alt="down" onClick={(e) => open(e)}/>
                    }
                </td>
            </tr>
            {state  === "up" && 
            <tr>
                <td className="form-case">
                    <div className="form">
                        <input type="text" placeholder="Enter Subnet" />
                        <button className="btn">Order</button>
                    </div>
                </td>
                <td colSpan={5}>
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
                </td>
            </tr>}
            <tr className="devider animate__animated animate__fadeInUp">
                <td colSpan={6}></td>
            </tr>
        </>
    )
}

export default Row;
