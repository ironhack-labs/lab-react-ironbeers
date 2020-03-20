import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return(
    <footer className="pt-3">
        <p>Made with &nbsp; <FontAwesomeIcon icon={faHeart} /> &nbsp; by Iván Herranz</p>
    </footer> 
    ) 
}

export default Footer;