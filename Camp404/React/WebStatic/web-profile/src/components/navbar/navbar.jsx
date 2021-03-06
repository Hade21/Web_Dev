import React from "react";
import "./navbar.css";

const navbar = () => {
    return(
        <nav>
            <div className="container">
                <div className="left-side">
                    <p><i>&#060;</i>Rohman <i>&#047;&#062;</i></p>
                </div>
                <div className="right-side">
                    <ul>
                        <li><a href="#" className="about">About Me</a></li>
                        <li><a href="#" className="project">Projects</a></li>
                        <li>
                            <div className="btn-contact">
                                <a href="#" className="bton-contact">Contact Me</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar;