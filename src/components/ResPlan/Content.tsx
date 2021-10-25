import React, { FC } from 'react';
import Icon from '../../assets/icons/assignment_late.svg'
import './style.scss';
import MoreIcon from '../../assets/icons/more.svg'

const Content: FC<{setCard: Function}> = ({ setCard }) => {
    return (
            <div className="w-100 h-100 fade-in">
                <div className="top">
                    <div className="icon my-auto">
                        <img src={Icon} alt="assignment late" />
                    </div>
                    <div className="title-date">
                        <span className="title">Residential Plan</span>
                        <span className="date">20th Jan 2021</span>
                    </div>
                    <img src={MoreIcon} className="show-more" alt="Show more" 
                        onClick={() => setCard("choose")} />
                </div>
                <div className="bottom">
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <div className="data">
                    <div className="used-data">
                        <div className="size">4 GB</div>
                        <div className="name">Used Data</div>
                    </div>
                    <div className="used-data">
                        <div className="size">4 GB</div>
                        <div className="name">Used Data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
