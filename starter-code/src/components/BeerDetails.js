import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'


 class BeerDetails extends Component {
     constructor(props) {
         super(props);
         this.state = {
             theBeer: {}
         }
     }

    componentDidMount() {
        this.getSingleBeer();
    }

    getSingleBeer = async () => {
        const {params} = this.props.match
        let theBeer = await axios
                    .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
                    try{
                        this.setState({theBeer: theBeer.data}) 
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

                    <img style={{width: '15%', paddingTop: "30px", paddingBottom: "50px"}}src={this.state.theBeer.image_url} alt=""/>
                    </div>
                    <div>

                    <h3 style={{fontWeight: "300", fontSize: "40px"}}>{this.state.theBeer.name} <span style={{fontWeight: "400", fontSize: "40px", color: "lightgray"}} className="float-right">{this.state.theBeer.attenuation_level}</span></h3>
                    <p style={{color: "gray",fontSize: "26px", fontWeight: "400"}}>{this.state.theBeer.tagline} <span style={{color: 'black', fontWeight: '500', fontSize: '20px', letterSpacing: "-1.5px"}} className="float-right">{this.state.theBeer.first_brewed}</span></p>
                    <p style={{fontSize: '24px', letterSpacing: '-1.2px'}}>{this.state.theBeer.description}</p>
                    <p style={{fontSize: '20px', fontWeight: '600', color: 'gray', letterSpacing: '-1px '}} >{this.state.theBeer.contributed_by}</p>
                    </div>
                </div>


                
            </div>
        )
    }
}

export default BeerDetails
