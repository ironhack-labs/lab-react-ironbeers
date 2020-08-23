import React, { Component } from 'react'
import axios from 'axios'

import Header from "./Header"


export default class BeerDetails extends Component {

    state = {
        beer: {},
    }


    // makeApiCall = () => {
    componentDidMount(){
            // the id should be the same than the route we created todo/:id
        console.log("1: hello", this.props.beerList)
        let beerID = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
            .then((res) => {
                console.log("success:", res)
                this.setState({
                    beer: res.data
                })                
            })
            .catch((err) => {
                console.log("there is an error:", err)
            })

        console.log("2: ", this.props.beerList)

    }



    // componentDidMount(){
    //     this.makeApiCall()
    // }

    // componentDidUpdate(){ 
    //     this.makeApiCall()  
    // }



    render() {

        let imgStyle = {
            height: "150px"
        }
    
        let beerCard = {
            display: "flex",
            border: "2px solid black",
            margin: "10px 0px",
            padding: "10px",
            width: "350px",
        }

  
        {
            if (!this.state.beer){
                return <p>Loading ....</p>
            }  
        } 


        return (
            <div>
                <Header />
                <h1>Beer Details</h1>
                
               
                <div style={beerCard}>
                    <div >
                        <img src={this.state.beer.image_url} alt="img" style={imgStyle}/>
                        <h2>{this.state.beer.name}</h2>
                        <p>{this.state.beer.tagline}</p>
                        <p><strong>First brewed: </strong>{this.state.beer.first_brewed}</p>
                        <p><strong>Attenuation level: </strong>{this.state.beer.attenuation_level}</p>
                        <p>{this.state.beer.description}</p>
                        <p><strong>Created by:</strong> {this.state.beer.contributed_by}</p>                       
                    </div> 
                    {console.log("3:", this.props.list)}

                </div>  

            </div>
        )

    }
}
