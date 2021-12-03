import React from "react";
import { Link } from 'react-router-dom'
import beers from '../../assets/beers.png'



const HomePage = () => {
    return (<div>
        <img scr={beers}></img>

        <Link to="/beers"></Link>


        <h3>ALL BEERS</h3>
        <p>lorem ipsum</p>

        <h3>ALL BEERS</h3>
        <p>lorem ipsum</p>

        <h3>ALL BEERS</h3>
        <p>lorem ipsum</p>

    </div>
    )
}








export default HomePage