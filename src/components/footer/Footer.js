import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';
import HeadphoneIcon from '../../assets/icons/headphones.png';
import GroupIcon from '../../assets/icons/group.png';
import VerifiedIcon from '../../assets/icons/verified.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import InstgramIcon from '../../assets/icons/instagram.png';
import TwitterIcon from '../../assets/icons/twitter.png';

const Footer = () => {
    return (
        <div className="footer_Container">
            <div className="footer_Body">
                <div className="footer_SecOne">
                    <div className="footer_IconTextCont">
                        <div className="iconCont">
                            <img src={HeadphoneIcon} className="footer_Icon" alt=""/>
                        </div>
                        <span className="iconText">24/7 customer support</span>
                    </div>
                    <div className="footer_IconTextCont">
                        <div className="iconCont">
                            <img src={GroupIcon} className="footer_Icon" alt=""/>
                        </div>
                        <span className="iconText">Great artist guarantee</span>
                    </div>
                    <div className="footer_IconTextCont">
                        <div className="iconCont">
                            <img src={VerifiedIcon} className="footer_Icon" alt=""/>
                        </div>
                        <span className="iconText">Verified ID</span>
                    </div>
                </div>
                <hr className="footer_Divider"/>
                <div className="footer_SecTwo">
                    <div className="footer_TextLinks">
                        <div className="linkCont">
                            <h4 className="linkHeading">ArtsPassage</h4>
                            <Link to="" className="footer_Link">About</Link>
                            <Link to="" className="footer_Link">Contact us</Link>
                        </div>
                        <div className="linkCont">
                            <h4 className="linkHeading">Discover</h4>
                            <Link to="" className="footer_Link">Trust & Safety</Link>
                            <Link to="" className="footer_Link">Travel Credit</Link>
                        </div>
                        <div className="linkCont">
                            <h4 className="linkHeading">Artist</h4>
                            <Link to="" className="footer_Link">Become an Artist</Link>
                            <Link to="" className="footer_Link">Terms & Privacy</Link>
                        </div>
                    </div>
                    <div className="footer_SocialLinksCont">
                        <div className="footer_SocialLinks">
                            <a href="#">
                                <img src={FacebookIcon} className="socialIcon" alt=""/>
                            </a>
                            <a href="#">
                                <img src={InstgramIcon} className="socialIcon" alt=""/>
                            </a>
                            <a href="#">
                                <img src={TwitterIcon} className="socialIcon" alt=""/>
                            </a>
                        </div>
                        <span className="footer_Copyright">© ArtsPassage</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
