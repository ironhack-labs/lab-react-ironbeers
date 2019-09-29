import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios";
import { list } from "./../services/ironbeersapi"
// import NavBar from "./components/NavBar"

export default class Beers extends Component{
    
}

    componentDidMount() {
        list()
          .then(ironBeersList => {
            this.setState({
                ironBeersList
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

      render (){

          return (
      
              <div>
                  <Link to="/">
                      {/* <NavBar/> */}
                  <div class = "Nav">
                      <h1>HomePage</h1>
                  </div>
                  </Link>
      
                  
      
                  
                  
                  
              </div>
          )
      }
}



