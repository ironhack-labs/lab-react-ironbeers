import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Beer extends Component {


    constructor(props){
        super(props);
        
        this.state = {
            name: "",
            description:"",
            image:""
        }
    }

  
    getRandomId = (tam)=>{
        console.log(tam);
        return Math.floor(Math.random()*(tam+1));
    }


    getBeer = ()=>{

        if(this.props.match.params.random == 0){
            axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then( res => {
                console.log(res.data.length);
            let randomId = this.getRandomId(res.data.length);
                this.setState({name: res.data[randomId].name, description: res.data[randomId].description, image: res.data[randomId].image_url})
            })
            .catch( error => console.log(error) )
        }else{
            
            axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
            .then( res => {
                this.setState({name: res.data.name, description: res.data.description, image: res.data.image_url})
            })
            .catch( error => console.log(error) )
        }

      
    
    }


    componentDidMount() {
        this.getBeer();
      }

  render() {
    return (
      <div className="Beer">
      <Link to={`/`}>Home</Link>
       <img src={this.state.image_url}/>
       <h1>{this.state.name}</h1>
       <p>{this.state.description}</p>
      </div>
    );
  }
}

export default Beer;
