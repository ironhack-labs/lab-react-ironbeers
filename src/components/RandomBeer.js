import React ,{ Component } from "react"
import axios from 'axios'
import NavBar from "./NavBar"

class RandomBeer extends Component{
    state={
        ccr:{}
        
    }

    componentDidMount= async()=>{
      
        const list = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
  
      
        this.setState({
          ccr: list.data[(Math.floor(Math.random()*list.data.length))]
        })

        
        
    
  }
  render(){
        console.log(this.state.brList)
      return(
          <div className="single-beer-container">
                <NavBar/>
                <div className="single-beer-div">
                     <div className="single-beer-div-img">
                      <img className="single-beer-img" src={this.state.ccr.image_url} alt="beer-img"/>
                     </div>
                    <div className="single-beer-name">
                      <h2>{this.state.ccr.name}</h2>
                      <p>{this.state.ccr.attenuation_level}</p>
                    </div>
                    <div className="single-beer-tagline">
                      <h4>{this.state.ccr.tagline}</h4>
                      <p>{this.state.ccr.first_brewed}</p>
                    </div>
                    <p className="single-beer-description">{this.state.ccr.description}</p>
                    <h5>{this.state.ccr.contributed_by}</h5> 
                </div>
                
            
      </div>)
  }
}

export default RandomBeer;