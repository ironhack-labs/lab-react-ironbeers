
import React from 'react';
import bImg from "../assets/beers.png"
import rImg from "../assets/random-beer.png"
import nImg from "../assets/new-beer.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <img alt="" src={bImg}/>
            <Link to="/beers"><h1> All Beers </h1></Link> 
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis magnam itaque ipsam dolor similique. Dignissimos odio ut, distinctio molestiae laudantium officiis eius quod in dicta sapiente suscipit eum voluptatem culpa?  </h4>

            <img alt=""  src={rImg}/>
            <h1>Random Beer</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis magnam itaque ipsam dolor similique. Dignissimos odio ut, distinctio molestiae laudantium officiis eius quod in dicta sapiente suscipit eum voluptatem culpa?</h4>
            
            <img alt="" src={nImg}/>
            <h1>New Beer</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis magnam itaque ipsam dolor similique. Dignissimos odio ut, distinctio molestiae laudantium officiis eius quod in dicta sapiente suscipit eum voluptatem culpa?</h4>
        </div>
    )
}


export default Home