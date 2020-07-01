import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header/Header';

class SingleBeer extends Component{
    state = {}

    componentDidMount(){
        const params = this.props.match.params;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        .then((response)=> {
            this.setState(response.data)
        })
    }

    render(){
        return(
            <div>
                <Header/>
                    <div className="card" style={{flexDirection: "row",textAlign: "left"}}>
                        <img className="card-img-left" src={this.state.image_url} alt="Card cap" style={{ minWidth: "200px", maxHeight:"200px", objectFit: "contain"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <p className="card-text">{this.state.tagline}
                            <br/>- Contributed by:{this.state.contributed_by}</p>
                        </div> 
                    </div>
            </div>  
        )
    }
    
}


export default SingleBeer;