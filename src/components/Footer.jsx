import React from 'react';
import FooterStyles from '../styles/FooterStyles.scss';
import { footerInfo } from '../data';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__top">
                <div className="footer__top-left">
                    <h2>Jefferson Educational <br /> Consulting</h2>
                    <p>
                        Unlocing Potential, Shaping Futures: Elevate Your <br />
                        Educational Journey with jefferson Education Consulting.
                    </p>
                </div>

                <div className="footer__top-middle">
                    {footerInfo.map((item, index) => (
                        <div className="footer__top-middle-info">
                            <h2>{item.title}</h2>
                            <Link to={item.path} className="name">{item.name}</Link>
                            <Link to={item.path1} className="name">{item.name1}</Link>
                            <Link to={item.path2} className="name">{item.name2}</Link>
                            <span className="name">{item.name3}</span>
                            <span className="name">{item.name4}</span>
                            <span className="name">{item.name5}</span>
                        </div>
                    ))}
                </div>

                <div className="footer__top-right">
                    <h2>Head Office</h2>
                    <p>
                        201 Dauntly St. Upper Marlboro, MD 20774
                    </p>

                    <span>+1 (240) 475 4592</span>
                    <span>info@jeffersonconsults.org</span>
                </div>
            </div>

            <hr />

            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <span>Copyright @ 2023 - </span>
                    <span>Jefferson Educational Consulting</span>
                </div>
                <div className="footer__bottom-right">
                    <span>Terms & Condition</span> |
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer