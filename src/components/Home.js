import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="home">
                <img src="../allbeers.jpg" alt="" />
                <Link to="/beers"> <h1> All Beers </h1> </Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tincidunt lorem, 
                    et rutrum massa pharetra a. Integer gravida ex lacus, rhoncus consequat ligula sagittis in. 
                    In condimentum semper lorem sed elementum. Fusce egestas, arcu ac posuere semper, orci dolor viverra quam, 
                    sed ultricies velit lectus vitae ligula. Nulla auctor eget leo sed ultrices. Aenean at est volutpat, 
                    venenatis sem et, ultricies arcu. Vestibulum aliquet mi at enim suscipit ultrices.</p>
            </div>
            <div className="home">
                <img src="../randombeer.jpg" alt=""/>
                <Link to="/beers/random"> <h1> Random Beer </h1> </Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tincidunt lorem, et rutrum massa pharetra a. Integer gravida ex lacus, rhoncus consequat ligula sagittis in. In condimentum semper lorem sed elementum. Fusce egestas, arcu ac posuere semper, orci dolor viverra quam, sed ultricies velit lectus vitae ligula. Nulla auctor eget leo sed ultrices. Aenean at est volutpat, venenatis sem et, ultricies arcu. Vestibulum aliquet mi at enim suscipit ultrices.</p>
            </div>
            <div className="home">
                <img src="../newbeer.jpg" alt=""/>
                <Link to="/new"><h1> New Beer </h1> </Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tincidunt lorem, et rutrum massa pharetra a. Integer gravida ex lacus, rhoncus consequat ligula sagittis in. In condimentum semper lorem sed elementum. Fusce egestas, arcu ac posuere semper, orci dolor viverra quam, sed ultricies velit lectus vitae ligula. Nulla auctor eget leo sed ultrices. Aenean at est volutpat, venenatis sem et, ultricies arcu. Vestibulum aliquet mi at enim suscipit ultrices.</p>
            </div>
        </div>
    )
}

export default Home;
