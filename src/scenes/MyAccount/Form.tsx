import React, { FC, useState} from 'react';
import CustomSelect from '../../components/CustomSelect';
import Add from '../../assets/icons/add_white.svg';
import Edit from '../../assets/icons/edit.svg';
import Visa from '../../assets/VISA.svg';
import BG from '../../assets/bg.png';
import { maskCardNumber } from '../../utils/util';
import ReactCardFlip from 'react-card-flip';
import {
    CSSTransition,
    TransitionGroup,
    SwitchTransition
} from 'react-transition-group';

const Form: FC<{ type: string, setType: Function }> = ({ type, setType }) => {

    const [year, setYear] = useState("2021");
    const [month, setMonth] = useState("01");
    const [name, setName] = useState("Name holder");
    const [activeInput, setActiveInput] = useState("");
    const [CVV, setCVV] = useState("");
    const [number, setNumber] = useState("1234 1234 1234 1234");

    const onCardNumberChange = (event: any) => {
        let { value } = event.target;
        let cardNumber = value;
        value = value.replace(/\D/g, '');
        if (/^\d{0,16}$/.test(value)) {
            // regular cc number, 16 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
                .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
        }

        setNumber(cardNumber.trimRight());
    };

    return (
        <div className="fade-in">
            <div className="title" style={{textTransform: "capitalize"}}>{type}</div>
            <div className="credit-cards mb-4">
                <div className="credit-card interactive">
                    <ReactCardFlip isFlipped={activeInput === "cvv"}>
                        <div className="credit-inside">
                            <div className="top">
                                    <div className="name">
                                    <TransitionGroup
                                            component="div"
                                            className="slide-fade-up"
                                        >
                                        {name
                                            .split('')
                                            .map((val, index) => (
                                                <CSSTransition
                                                    timeout={250}
                                                    classNames="slide-fade-right"
                                                    key={index}
                                                >
                                                    <span className={val === " " ? "me-1" : ""}>
                                                        {val}
                                                    </span>
                                                </CSSTransition>
                                            ))}
                                        </TransitionGroup>
                                    </div>
                                    <img src={Visa} alt="visa" />
                                </div>
                                <div className="middle">
                                    <TransitionGroup
                                            component="div"
                                            className="slide-fade-up"
                                        >
                                            {maskCardNumber(number).map((val, index) => (
                                                <CSSTransition
                                                    classNames="slide-fade-up"
                                                    timeout={250}
                                                    key={index}
                                                >
                                                    <span>
                                                        {val}
                                                    </span>
                                                </CSSTransition>
                                            ))}
                                    </TransitionGroup>

                                </div>
                                <div className="bottom">
                                        <SwitchTransition in-out>
                                            <CSSTransition
                                                classNames="slide-fade-up"
                                                timeout={200}
                                                key={month}
                                            >
                                                <span>
                                                    {!month ? 'MM' : month}{' '}
                                                </span>
                                            </CSSTransition>
                                        </SwitchTransition>
                                    <span>/</span>
                                    <span>
                                        <SwitchTransition in-out>
                                            <CSSTransition
                                                classNames="slide-fade-up"
                                                timeout={200}
                                                key={year}
                                            >
                                                <span>
                                                    {!year ? 'YY' : year.substr(-2)}{' '}
                                                </span>
                                            </CSSTransition>
                                        </SwitchTransition>
                                    </span>
                                </div>
                            </div>
                        <div className="credit-inside back">
                            <div className="top">
                                <div className="name">
                                    <TransitionGroup
                                            component="div"
                                            className="slide-fade-up"
                                        >
                                            <span className="me-2">CVV</span>
                                        {CVV
                                            .split('')
                                            .map((val, index) => (
                                                <CSSTransition
                                                    timeout={250}
                                                    classNames="slide-fade-right"
                                                    key={index}
                                                >
                                                    <span className="blue">
                                                        {index < 2 ? "*" : val}
                                                    </span>
                                                </CSSTransition>
                                            ))}
                                        </TransitionGroup>
                                </div>
                                <img src={Visa} alt="visa" />
                            </div>
                            <img src={BG} alt="" />
                        </div>
                    </ReactCardFlip>
                </div>
            </div>
             <form>
                <div className="group-input w-100 mt-4 mb-2">
                    <label className="title mb-2">Card Number</label>
                    <input type="text" placeholder="Ex: 5123 1232 1322 2223" maxLength={19} value={number} onChange={onCardNumberChange} required/>
                </div>
                <div className="group-input w-100 mt-4 mb-2">
                    <label className="title mb-2">Card Name</label>
                    <input type="text" placeholder="Ex: Vishy Fishy" value={name} onChange={(e) => setName(e.currentTarget.value)} required/>
                </div>
                <div className="expiry-cvv">
                    <div className="group-input mt-4">
                        <label className="title mb-2">Expiry</label>
                        <div className="split-2">
                            <CustomSelect options={["2021", "2022","2022", "2024", "2025"]} handler={setYear} selected={year} />
                            <CustomSelect options={Array(12).fill(0).map((item,idx) => `${idx < 9 ? "0" : ""}${idx + 1}`)} handler={setMonth} selected={month} />
                        </div>
                        
                    </div>
                    <div className="group-input mt-4">
                        <label className="title mb-2" >CVV</label>
                        <input type="text" placeholder="***" maxLength={3} value={CVV} 
                        onChange={(e) => setCVV(e.currentTarget.value)} onFocus={(e) => setActiveInput('cvv')}
                        onBlur={(e) => setActiveInput('')} required/>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn-card" onClick={() => setType("cards")}>Cancel</button>
                    <button className="btn-card">
                        <img src={type === "add" ? Add : Edit} alt="" /> {type} card</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
