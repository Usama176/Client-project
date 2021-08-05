import React from 'react';
import './howItWorksSection.css';
import ImgOne from '../../assets/images/girl-painting.jpg';
import ImgTwo from '../../assets/images/woman-using-laptop.jpg';
import ImgThree from '../../assets/images/girls-playing-voilen.jpg';
import howItWorksSecTwoImg from '../../assets/images/group-discussion.jpg';
import BulletIcon from '../../assets/icons/bullet-point.png';

const HowItWorksSection = () => {
    return (
        <div className="wrapper">
            {/* Section One */}
            <div className="howItWorks_">
                <h2 className="sectionTitle">How it works</h2>
                <div className="howItWorks_Body">
                    <div className="howItWorks_Conts">
                        <div className="howItWorks_TextCont">
                            <div className="howItWorks_Text">
                                <h3 className="howItWorks_Heading">List yourself for free</h3>
                                <p className="howItWorks_Para">Set your price, add photos, videos, and details, then your listing is ready to be seen by millions of people searching for artists.</p>
                            </div>
                        </div>
                        <div className="howItWorks_MidLineNumCont">
                            <h1 className="howItWorks_Num">1</h1>
                            <div className="howItWorks_Line"></div>
                        </div>
                        <div className="howItWorks_ImgCont">
                            <img className="howItWorks_Img" src={ImgOne} alt=""/>
                        </div>
                    </div>
                    <div className="howItWorks_Conts howItWorks_ContsImgLeft">
                        <div className="howItWorks_ImgCont">
                            <img className="howItWorks_Img" src={ImgTwo} alt=""/>
                        </div>
                        <div className="howItWorks_MidLineNumCont">
                            <h1 className="howItWorks_Num numTwo">2</h1>
                            <div className="howItWorks_Line"></div>
                        </div>
                        <div className="howItWorks_TextCont howItWorks_TextContRight">
                            <div className="howItWorks_Text howItWorks_TextRight">
                                <h3 className="howItWorks_Heading">Accept booking requests</h3>
                                <p className="howItWorks_Para">Message with clients and accept bookings through the ArtsPassage platform after confirming the details of the event.</p>
                            </div>
                        </div>
                    </div>
                    <div className="howItWorks_Conts">
                        <div className="howItWorks_TextCont">
                            <div className="howItWorks_Text">
                                <h3 className="howItWorks_Heading">Get paid every time</h3>
                                <p className="howItWorks_Para">Clients are charged upfront through our secure payment system. Your payout is directly deposited after each booking, minus our service fee.</p>
                            </div>
                        </div>
                        <div className="howItWorks_MidLineNumCont">
                            <h1 className="howItWorks_Num numThree">3</h1>
                            <div className="howItWorks_Line"></div>
                        </div>
                        <div className="howItWorks_ImgCont">
                            <img className="howItWorks_Img" src={ImgThree} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Two */}
            <div className="howItWorks_secTwo">
                <h2 className="sectionTitle">We've got your back</h2>
                <div className="howItWorks_secTwoBody">
                    <div className="howItWorks_secTwoTextCont">
                        <ul>
                            <li>
                                <img className="howItWorks_secTwoIcon" src={BulletIcon} alt=""/>
                                <h4 className="howItWorks_secTwoText">Every ArtsPassage service you offer is covered by the ArtsPassage Guarantee.</h4>
                            </li>
                            <li>
                                <img className="howItWorks_secTwoIcon" src={BulletIcon} alt=""/>
                                <h4 className="howItWorks_secTwoText">A world-class support team that has your back around the clock.</h4>
                            </li>
                            <li>
                                <img className="howItWorks_secTwoIcon" src={BulletIcon} alt=""/>
                                <h4 className="howItWorks_secTwoText">A world-class support team that has your back around the clock.</h4>
                            </li>
                            <li>
                                <img className="howItWorks_secTwoIcon" src={BulletIcon} alt=""/>
                                <h4 className="howItWorks_secTwoText">Every artist is personally evaluated by our team to be approved to the platform.</h4>
                            </li>
                            <li>
                                <img className="howItWorks_secTwoIcon" src={BulletIcon} alt=""/>
                                <h4 className="howItWorks_secTwoText">Every artist is personally evaluated by our team to be approved to the platform.</h4>
                            </li>
                        </ul>
                    </div>
                    <img className="howItWorks_secTwoImg" src={howItWorksSecTwoImg} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksSection;
