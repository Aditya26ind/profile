import React from "react";
import {Link} from "react-router-dom"
import "./contact.css";
import insta from "../Photos/Logo/insta.png"
import soloo from "../Photos/Logo/soloo.jpg"
import linkedin from "../Photos/Logo/linkedin.png" 
function Contacts(){
    return(
        <div className="tags">
            
            <a href="https://www.linkedin.com/in/aditya-salabh-831762192"><img src={linkedin}/></a>
            <a href="https://www.instagram.com/adityyaa06/?utm_medium=copy_link"><img src={insta}/></a>
            <a href="https://www.sololearn.com/users/login?returnUrl=%2Fprofile%2F15419186%2F%3Fref%3Dapp"><img src={soloo}/></a>
        </div>
    )
    ;
}
export default Contacts;