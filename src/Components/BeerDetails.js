import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom'


export default class BeerDetails extends Component {
    state = {
        singleBier: null
    }

    getBeer = () => {
        const beerData = this.props.match.params.beerId;
        // console.log("beerData", beerData);
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerData}`)
          .then(response => {  
            //   console.log( "response",response.data); 
            this.setState({
              singleBier: response.data
            });
          })
          .catch(err => console.log(err))
      }
    
      componentDidMount(){
          this.getBeer()
      }

      componentDidUpdate(prevProps) {
        if (prevProps.match.params.beerId !== this.props.match.params.beerId) {
            this.getBeer()      
        }  
      }
    

    render() {
        
        const beer = this.state.singleBier

        // console.log('my beer',beer);

        if (!beer) return <></>;
        return (
            <div>
                <Header />
                <div className="singleBeer-container">
                    <div>
                        <img className="img" src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div className="name-attenuation">
                        <h2 style={{fontSize:"2.5rem"}}>{beer.name}</h2>
                        <h2 style={{color:"#b3acab"}}>{beer.attenuation_level}</h2>
                    </div>
                    <div className="tagline-brewed">
                        <p style={{color:"#b3acab", fontSize:"2rem"}}><strong>{beer.tagline}</strong></p>
                        <p><strong>{beer.first_brewed}</strong></p>
                    </div>
                    <div className="text-contributed">
                        <p style={{fontSize:"1.5rem"}}>{beer.description}</p>
                        <p style={{fontSize:"1.3rem", color:"#b3acab"}}>{beer.contributed_by}</p>
                    </div>
                    <div>
                    </div>
                    <div>
                        <button className="btn-single"><Link to='/beers' className="link-single">Back to List of Beers</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}


