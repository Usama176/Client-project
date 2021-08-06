import React from 'react';
import './twoWaysSec.css';
import PrivateLessonIcon from '../../assets/icons/private-lessons-icon.png';
import EventsIcon from '../..//assets/icons/events-icon.png';

const TwoWaysSec = () => {
    return (
        <div className="wrapper">
            <div className="twoWaysSec">
                <h2 className="sectionTitle">Tow ways to earn</h2>
                <div className="twoWaysSec_Body">
                    <div className="twoWaysSec_TextCont">
                        <img src={EventsIcon} className="twoWaysSec_Icon" alt=""/>
                        <div className="twoWaysSec_Text">
                            <span className="twoWaysSec_Heading">Events</span>
                            <p className="twoWaysSec_Para">Showcase your talent. Our platform will attract the clients for you and all you will need to do is show up, perform and create a great experience for your audience.</p>
                        </div>
                    </div>
                    <div className="twoWaysSec_TextCont">
                        <img src={PrivateLessonIcon} className="twoWaysSec_Icon" alt=""/>
                        <div className="twoWaysSec_Text">
                            <span className="twoWaysSec_Heading">Private Lessons</span>
                            <p className="twoWaysSec_Para">Earn when you teach your craft to our clients. You will have the option to teach classes in person or remotely so that other people could learn to produce the art you do.</p>
                        </div>
                    </div>
                </div>
                <button className="twoWaysSec_Btn">Become an Artist</button>
            </div>
        </div>
    );
}

export default TwoWaysSec;
