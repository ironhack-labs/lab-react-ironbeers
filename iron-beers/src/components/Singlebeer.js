import React, { Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Singlebeer extends Component {
    constructor(props){
        super(props)
        this.state = {singleBeer:''}
    }

    getSingleBeer() {
        const { params } = this.props.match;
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
        // axios.get("https://ironbeer-api.herokuapp.com/beers/single/5b0cfee6861982000a48fd2a")
        
            .then(response => {
                console.log(response.data)
                this.setState({ singleBeer: response.data })
            }
            )
    }


    componentDidMount() {
        this.getSingleBeer();

    }

    render(){
        return(
        <div className="beer-detail">
            <span><img src={this.state.singleBeer.image_url} alt="img-beer"/></span>
            <h1>{this.state.singleBeer.name}</h1>
            <div>{this.state.singleBeer.tagline}</div>
            <div>{this.state.singleBeer.first_brewed}</div>
            <div>{this.state.singleBeer.attenuation_level}</div>
            <div>{this.state.singleBeer.description}</div>
            <div>{this.state.singleBeer.contributed_by}</div>
            <Link to="/beers">Back to All beers</Link><br/>
            <Link to="/">Back to Home</Link>
        </div>
            )
    }

}

export default Singlebeer;