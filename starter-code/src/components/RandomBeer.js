import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomBeer: {}
        }
    }

   componentDidMount() {
       this.getRandomBeer();
   }

   getRandomBeer = async () => {
       let theRandomBeer = await axios
                   .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
                   try{
                       this.setState({randomBeer: theRandomBeer.data}) 
                   } 
                   catch (error) {
                       console.log(error)
                   }
           }





    render() {




        return (
            <div>
                <Header />
                <div className="w-100 p-5">
                    <div className="text-center">

                    <img style={{width: '15%', paddingTop: "30px", paddingBottom: "50px"}}src={this.state.randomBeer.image_url} alt=""/>
                    </div>
                    <div>

                    <h3 style={{fontWeight: "300", fontSize: "40px"}}>{this.state.randomBeer.name} <span style={{fontWeight: "400", fontSize: "40px", color: "lightgray"}} className="float-right">{this.state.randomBeer.attenuation_level}</span></h3>
                    <p style={{color: "gray",fontSize: "26px", fontWeight: "400"}}>{this.state.randomBeer.tagline} <span style={{color: 'black', fontWeight: '500', fontSize: '20px', letterSpacing: "-1.5px"}} className="float-right">{this.state.randomBeer.first_brewed}</span></p>
                    <p style={{fontSize: '24px', letterSpacing: '-1.2px'}}>{this.state.randomBeer.description}</p>
                    <p style={{fontSize: '20px', fontWeight: '600', color: 'gray', letterSpacing: '-1px '}} >{this.state.randomBeer.contributed_by}</p>
                    </div>
                </div>


                
            </div>
        )
    }
}

export default RandomBeer
