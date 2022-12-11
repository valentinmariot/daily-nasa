import { FC } from "react";
import "./About.scss";

const About: FC = () => { 
    return(
        <div className="about">
            <div className="about_title">
                <h1 className="about_title_content">
                    About this project
                </h1>
            </div>
            <div className="about_content">
                <ul>
                    <li>
                        <p>This is a simple app that uses the NASA API to display a picture of the day.</p>
                    </li>
                    <li>
                        <p>The app is built with React, TypeScript, and Sass.</p>
                    </li>
                    <li>
                        <p>The source code is available here→  
                        <a href="https://github.com/valentinmariot/daily-nasa">GitHub</a></p>
                    </li>
                    <li>
                        <p>Feel free to send feedback or improvements!</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
