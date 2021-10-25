import React, { FC} from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    title: string,
    link: string,
    icon: string,
    active: boolean
}

const SideItem: FC<IProps> = ({title, active, link, icon}) => {
    return (
            <li className={`my-2 ${active && "active"}`}>
                <Link to={link}>
                    <div className="icon">
                        <img src={icon} alt={title} />
                    </div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="r-border"></div>
                </Link>
            </li>
    );
}

export default SideItem;