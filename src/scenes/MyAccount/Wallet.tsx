import React, { FC, useState} from 'react';
import Visa from '../../assets/VISA.svg';
import CardInfo from './CardInfo';
import Form from './Form';

const Wallet: FC = () => {

    const [content, setContent] = useState("cards");
    const [selectedCard, setSelectedCard] = useState(0);

    return (
        <div className="dashboard-card wallet">
            
            {content === "cards" ?
                <div className="fade-in">
                <div className="title">Wallet</div>
                <div className="credit-cards">
                    <div className="other-card o-2"></div>
                    <div className="other-card o-1"></div>
                    <div className="credit-card">
                        <div className="credit-inside">
                            <div className="top">
                                <div className="name">Vishy Fishy</div>
                                <img src={Visa} alt="visa" />
                            </div>
                            <div className="middle">
                                <div>****</div>
                                <div>****</div>
                                <div>****</div>
                                <div>2223</div>
                            </div>
                            <div className="bottom">09/22</div>
                        </div>
                    </div>
                </div>

                <div className="added-cards">
                    <button className="btn-card mx-auto add-card" onClick={() => setContent("add")}>+ Add card</button>
                    <div className="title">Cards Added <span>(3)</span></div>
                    <div className="cards-list">
                        {Array(3).fill(0).map((item,idx) =>
                            <CardInfo 
                                key={"card-" + idx}
                                setCard={setSelectedCard}
                                idx={idx}
                                selected={selectedCard === idx} 
                                setContent={setContent}
                            />
                        )}
                    </div>
                    <button className="btn-card mx-auto">Remove all</button>
                </div> 
            </div>
            : 
                <Form type={content} setType={setContent} /> 
            }
            
        </div>
    )
}

export default Wallet;
