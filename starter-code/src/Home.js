import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
import App from "./App";



//const Home = () => {
    
   
class Home extends React.Component {    

    render() {

        return (
            <div>
                <h1>Estoy en Home</h1>

                    <h2><Link to="/allbeers">All Beers</Link></h2>       
                    <h2><Link to="/randombeer">Random beer</Link></h2>
                    <h2><Link to="/newbeer">New Beer</Link></h2>
                    <div>
                        The data from parent is: {this.props.dataFromParent} 
                        {/* ¿Cómo compruebo si me llegan bien los datos del padre? */}
                    </div>
            </div>
        )
    }
}

export default Home;

