import React from "react";
import "./contact.css"
import WALogo from "../../asssets/WhatsappLogo.png";
import TWLogo from "../../asssets/TwitterLogo.png";
import FBLogo from "../../asssets/FacebookLogo.png";
import LinkedLogo from "../../asssets/LinkedinLogo.png";
import GithubLogo from "../../asssets/GithubLogo.png"

const contact = () => {
    return(
        <div className="contact-wrapper">
            <div className="about-me">
                <p className="def-title">About Me</p>
                <p id="about-desc">I’m a Junior FrontEnd Web Developer. I'm master in html,  css, javascript and also React.js to build an interctive and responsive website. You can check it in my Github account below and see my repositories on Github.</p>
            </div>
            <div className="contact">
                <p className="def-title">Contact Me</p>
                <div className="list-contact">
                    <div className="btn wa">
                        <img src={WALogo} alt="" />
                        <a href="http://wa.me/6285641889512">WhatsApp</a>
                    </div>
                    <div className="btn tw">
                        <img src={TWLogo} alt="" />
                        <a href="">Twitter</a>
                    </div>
                    <div className="btn fb">
                        <img src={FBLogo} alt="" />
                        <a href="">Facebook</a>
                    </div>
                    <div className="btn lkd">
                        <img src={LinkedLogo} alt="" />
                        <a href="">LinkedIn</a>
                    </div>
                    <div className="btn git">
                        <img src={GithubLogo} alt="" />
                        <a href="">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact;