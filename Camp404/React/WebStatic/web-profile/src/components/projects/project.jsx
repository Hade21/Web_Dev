import React from "react";
import "./project.css";
import Card from "./card/card.jsx";
import Thumbnail from "../../asssets/Screenshot 2021-12-27 193445.png"

const project = () => {
    return(
        < div className="project-wrapper">
            <p className="page-title">Here's some of my Projects</p>
            <div className="card-wrapper">
                <Card 
                    image={Thumbnail}
                    title="Project 1" 
                    desc="Fugiat dolore minim qui quis aliquip occaecat consequat." />
                <Card
                    image={Thumbnail}
                    title="Project 2"
                    desc="Lorem impsum sit dolor amet fugiat consequet minim quis occaecat." />
                <Card 
                    image={Thumbnail}
                    title="Project 3"
                    desc="Fugiat dolore minim qui quis aliquip occaecat consequat." />
                <Card
                    image={Thumbnail}
                    title="Project 4"
                    desc="Lorem impsum sit dolor amet fugiat consequet minim quis occaecat." />
                <Card 
                    image={Thumbnail}
                    title="Project 5"
                    desc="Fugiat dolore minim qui quis aliquip occaecat consequat." />
                <Card 
                    image={Thumbnail}
                    title="Project 6" 
                    desc="Fugiat dolore minim qui quis aliquip occaecat consequat." />
                <Card
                    image={Thumbnail}
                    title="Project 7"
                    desc="Lorem impsum sit dolor amet fugiat consequet minim quis occaecat." />
                <Card 
                    image={Thumbnail}
                    title="Project 8"
                    desc="Fugiat dolore minim qui quis aliquip occaecat consequat." />
                <Card
                    image={Thumbnail}
                    title="Project 9"
                    desc="Lorem impsum sit dolor amet fugiat consequet minim quis occaecat." />
                <Card 
                    image={Thumbnail}
                    title="Project 10"
                    desc="Fugiat dolore minim qui quis aliquip occaecat consequat." />
            </div>
        </div>
    )
}

export default project;