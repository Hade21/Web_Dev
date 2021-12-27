import React from "react";
import "./home.css";
import Picture from "../../asssets/IMG_20161203_061616.jpg"

const home = () => {
    return(
        <div>
            <div className="content">
                <div className="left">
                    <img className="photo" src={Picture} alt="" />
                </div>
                <div className="right">
                    <h3>Hi..!</h3>
                    <h1>I'm Rohman</h1>
                    <h5>I'm a Junior FrontEnd Web Developer</h5>
                </div>
            </div>
        </div>
    )
}

export default home;