import React, { FC} from 'react';

const Announcments: FC = () => {
    return (
        <div className="dashboard-card announcements">
            <div className="title">Announcements</div>
            <div className="news mt-1">
                <div className="animate__animated animate__fadeInUp">
                    <p>For all who needs some blazing fast Premium Data use code: 20OFF for 20% off.</p>
                    <div className="date my-2">
                        21th Jan 2020
                    </div>
                </div>
                <div className="animate__animated animate__fadeInUp">
                    <p>We added new Pools. FTL 1 and FTL 2. You can run both with around 30% and 70% the Country Region you are botting.</p>
                    <div className="date my-2">
                        21th Jan 2020
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Announcments;
