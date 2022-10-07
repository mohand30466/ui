import React from "react";
import { Link } from "react-router-dom";
import "./section.css"
const Section = () => {
    return ( 
        <div className="section_container">
            <div className="section">
                <div className="h2">HELLO AND WELCOME TO DIRECT MANPOWER COMPANY</div>
                <p>The best site ever provide service 24/7 with full of suport</p>
                <p>We are almost in the all cities in isreal, you will find us around you </p>
                <p>Click here</p>
                <Link to="signup"> 
                <button className="join">Join us to enjoy the services</button>
                </Link>
            </div>
            <div className="user_story">
                <div className="msg">
                    Loking for work
                </div>
                <div className="msg"> 
                    Loking for worker
                </div>
                <div className="msg">
                    You have agencey 
                </div>

            </div>

        </div>
     );
}
 
export default Section;