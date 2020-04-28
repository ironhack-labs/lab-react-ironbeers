import React, { Component } from 'react'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div>


                <div className="main-content">
                    <img className="big-picture" alt="newBeerImage" src="https://cdn.vox-cdn.com/thumbor/JfaZhCcL0T_B0-ZCYUdIyfs1t_g=/0x0:1000x634/1200x900/filters:focal(420x237:580x397)/cdn.vox-cdn.com/uploads/chorus_image/image/60123291/image_asset.12.png"></img>
                    <h2><Link to="/beers">  List  beers </Link></h2>

                </div>
                <div className="main-content">
                    <img className="big-picture" alt="newBeerImage" src="https://www.randombrewing.gr/wp-content/uploads/2019/10/RANDOM-NEW.jpg"></img>
                    <h2><Link to="/random-beer">  Random beers </Link></h2>
                </div>
                <div className="main-content">
                    <img className="big-picture" alt="newBeerImage" src="https://images-na.ssl-images-amazon.com/images/I/61ZbYld9o8L._AC_SL1024_.jpg"></img>
                    <h2><Link to="/new-beer">  New beers </Link></h2>
                </div>
            </div>
        )
    }
}
export default Main