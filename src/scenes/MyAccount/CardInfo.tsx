import React, { FC} from 'react';
import VisaGray from '../../assets/VISA_gray.svg';
import Star from '../../assets/star.svg';

interface IProps{
    selected?: boolean, 
    setContent: Function, 
    setCard: Function,
    idx: number
}

const CardInfo: FC<IProps> = ({ selected, setContent, setCard, idx }) => {
    return (
        <div className="card-info">
            <div className="img-cont">
                <div className="visa-cont" onClick={() => setCard(idx)}>
                    <img src={VisaGray} alt="visa" />
                </div>
                {selected && <img src={Star} alt="selected" className="star" />}
            </div>
            <div className="texts my-auto">
                <div className="ending mt-auto">Card ending with <span>**223</span></div>
                <div className="edit mb-auto" onClick={() => setContent("edit")}>Edit</div>
            </div>
        </div>
    )
}

export default CardInfo;
