import React from 'react';
import './twoWaysSec.css';
import PrivateLessonIcon from '../../assets/icons/private-lessons-icon.png';
import EventsIcon from '../..//assets/icons/events-icon.png';

const TwoWaysSec = () => {
    return (
        <div className="wrapper">
            <div className="secFour">
                <h2 className="sectionTitle">Tow ways to earn</h2>
                <div className="secFourBody">
                    <div className="secFourTextCont">
                        <img src={EventsIcon} className="secFourIcon" alt=""/>
                        <div className="secFourText">
                            <span className="secFourHeading">Events</span>
                            <p className="secFourPara">Showcase your talent. Our platform will attract the clients for you and all you will need to do is show up, perform and create a great experience for your audience.</p>
                        </div>
                    </div>
                    <div className="secFourTextCont">
                        <img src={PrivateLessonIcon} className="secFourIcon" alt=""/>
                        <div className="secFourText">
                            <span className="secFourHeading">Private Lessons</span>
                            <p className="secFourPara">Earn when you teach your craft to our clients. You will have the option to teach classes in person or remotely so that other people could learn to produce the art you do.</p>
                        </div>
                    </div>
                </div>
                <button className="secFourBtn">Become an Artist</button>
            </div>
        </div>
    );
}

export default TwoWaysSec;
