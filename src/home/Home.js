import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css"


class Home extends Component {


    render() {
        return (<div className="home">


            <Link to="/beers">
                <div className = "home-all-beers">
                    <img src = "https://cdn.vox-cdn.com/thumbor/Dw0GaoqW7szLnkNLJs1-EWzpoRo=/275x0:4719x3333/1200x800/filters:focal(275x0:4719x3333)/cdn.vox-cdn.com/uploads/chorus_image/image/46851666/shutterstock_195406772.0.0.jpg"/>
                    <h1>All Beers</h1>
                </div>
            </Link>

            <Link to="/random-beer">
                <div className = "home-all-beers">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLW85pHViIw7wUZ1L7wNMaQ415xPoTUaMfQ&usqp=CAU"/>
                    <h1>Random Beer</h1>
                </div>
            </Link>

            <Link to="/new-beer">
                <div className = "home-all-beers">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ytIw-Chjm7u3s_dMPIbPJBlgo9XtUpu3uA&usqp=CAU"/> 
                    <h1>New beer</h1>
                </div>
            </Link>

        </div>
        )
    }
}
export default Home