import axios from 'axios';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {

  Link,
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 



export default function Main(props) {
  // const [beers, setBeer] = useState([])

  return (
    
       <div className="container">
           
       <div className="row" >
       
         
         <div className="col-12">
         <img src="/images/beers.png"/>
         <Link to="/beers"><div>All Beers</div></Link>
         <div className="description">Loream Ipsum Loream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream Ipsum Loream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream Ipsum</div>
         
         </div>
         <div className="col-12">
         <img src="/images/random-beer.png"/>
         <Link to="/random"><div>Random Beer</div></Link>
         <div className="description">Loream Ipsum Loream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream Ipsum Loream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream Ipsum</div>
         
         </div>
         <div className="col-12">
         <img src="/images/new-beer.png"/>
         <Link to="/add"><div>New Beer</div></Link>
         <div className="description">Loream Ipsum Loream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream Ipsum Loream IpsumLoream IpsumLoream IpsumLoream IpsumLoream IpsumLoream Ipsum</div>
         
         </div>
            
        </div>
        </div>
      
  );
}
