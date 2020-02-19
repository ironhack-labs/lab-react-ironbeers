import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Beer extends Component {

    specific = () => {
        console.log("Hello")

        let beer = this.props.beers.find(eachBeer => {
            return eachBeer._id === this.props.match.params.id
            }) 

        console.log("The specific beer is",beer)
        return (

            <React.Fragment>
                <img className="singleImg" src={beer.image_url} height="250" alt=""></img>
                <div className="beerRow"> 
                    <h5>{beer.name}</h5> 
                    <h5 style={{ color: '#959595' }}>{beer.attenuation_level}</h5>
                </div>
                <div className="beerRow"> 
                    <h6 style={{ color: '#959595' }}><i>{beer.tagline}</i></h6>
                    <span><b>{beer.first_brewed}</b></span>
                </div>
                <p>{beer.description}</p>
                <br></br>
                <span className="beerRow" style={{ color: '#959595' }}>{beer.contributed_by}</span>

            </React.Fragment>

        )

    }


    render() {
        console.log(this.props)
        return (
            <div>

                <nav className="navbar navbar-light">
                    <Link className="navbar-brand" to="/"><img src={"/images/logo.svg"} width="40" height="40" alt=""/></Link>
                </nav>
                {this.props.ready ? (this.specific()) : ("Loading...")}
            </div>
        );
    }
}

export default Beer;