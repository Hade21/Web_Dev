import React from "react";
import "./card.css";

const card = (props) => {
    return(
        <div className="card">
            <img id="thumbnail" src={props.image} alt="" />
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default card;