import React from 'react';
import {NavLink} from "react-router-dom";
import "../App.css";
import imgAllBeers from "../assets/beers.png";
import imgNewBeer from "../assets/new-beer.png";
import imgRandomeBeer from "../assets/random-beer.png";



class Homepage extends React.Component {
    render(){
        return (
            <div className="Homepage">
              
                        <img src={imgAllBeers} alt=""/>
                        <NavLink to="/beers">
                            <h2>All Beers</h2>  
                        </NavLink>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    

                        <img src={imgNewBeer} alt=""/>
                        <NavLink to="/new-beer" activeClassName="selected">                       
                            <h2>New Beer</h2>
                        </NavLink>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        
                        <img src={imgRandomeBeer} alt=""/>
                        <NavLink to="/random-beer" activeClassName="selected">                           
                            <h2>Random Beer</h2>
                        </NavLink>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                         
            </div>        
        )
    }
}
   


export default Homepage