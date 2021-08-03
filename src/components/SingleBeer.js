import React ,{ Component } from "react";
import NavBar from "./NavBar";

class SingleBeer extends Component{
    state={
        beer:{}
    }
    componentDidMount(){
        const currentBeer = this.props.beers.find(element=>{

            return element._id===this.props.match.params.id
        })
         this.setState({
            beer:{...currentBeer}
        })
       
        
    }
    
    render(){
        return(
            <div className="single-beer-container">
                <NavBar/>
                <div className="single-beer-div">
                     <div className="single-beer-div-img">
                        <img className="single-beer-img"src={this.state.beer.image_url} alt="beer-img"/>
                    </div>
                    <div className="single-beer-name">
                        <h2>{this.state.beer.name}</h2>
                        <p>{this.state.beer.attenuation_level}</p>
                    </div>
                    <div className="single-beer-tagline">
                        <h4>{this.state.beer.tagline}</h4>
                        <p>{this.state.beer.first_brewed}</p>
                    </div>
                    <p className="single-beer-description">{this.state.beer.description}</p>
                    <h5>{this.state.beer.contributed_by}</h5> 
                </div>
            </div>
        )
    }
}

export default SingleBeer