import React from 'react';
import './Footer.css'
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer">
           <div className="logo">
               <img src={logo} alt="" />
             
           </div>
           <div className="about">
               <p>About online food</p>
               <p>Read our blog</p>
               <p>Sign up to deliver</p>
               <p>Add your restaurant </p>
           </div>
           <div className="contact">
           <p>Get help</p>
               <p>Read FAQs</p>
               <p>View all cities</p>
               <p>Restaurant near me </p>
           </div>
        </div>

        <div className="copy-container">
            <div >
            <p className="copyright">copyright <span className="copyright-icon"><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></span> 2022 online food </p>
            </div>
            <div className="terms">
                <p>Privacy Policy</p>
                <p>Terms of use</p>
                <p>Pricing</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;