import React, { FC, useState} from 'react';
import Choose from './Choose';
import Content from './Content';
import Remove from './Remove';
import Set from './Set';
import './style.scss';
import TopUp from './TopUp';
import Success from "./Success";
const ResPlan: FC = () => {

    const [card, setCard] = useState("content")

    return (
        <div className="dashboard-card res-plan">
            {card === "choose" ? <Choose setCard={setCard} /> :
                card === "set" ? <Set setCard={setCard} /> : 
                    card === "remove" ? <Remove setCard={setCard} /> : 
                        card === "top-up" ? <TopUp setCard={setCard} /> :
                            card === "success" ? <Success setCard={setCard}/> : <Content setCard={setCard} />}
        </div>
    )
}

export default ResPlan;
