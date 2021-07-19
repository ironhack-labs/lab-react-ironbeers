import axios from 'axios'
import React, {Component, useState, useEffect} from 'react'
import Header from './Header'






class BeerDetail extends Component {
    

state = {
 beerDetail: null
}


getData = aysnc () => {



let id = Number(beerIndex)
let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
let beerDetail = {
     id: beerIndex,
     image: image_url,
     name: name,
     tagline: tagline,
     first_brewed: first_brewed,
     attenuation_level: attenuation_level,
     description: description,
     contributed_by: contributed_by

}

this.setState({
     beerDetail: beerDetail
  })

}



componentDidMount(){
    this.getData()

}

componentDidUpdate() {
    const {beerIndex} = this.props.params
let newId= beerIndex    //was in Beerlist als key stand?
let stateId= this.state.beerDetail.id

if(newId !== stateId){
 this.getData()

  }
}

    render() {
        return (
            <div>
                if(!this.state.beerDetail){

                    return <p>Loading BeerDetails...</p>
                }
                const {beerDetail} = this.state

                return (
                  <div>
                  <Header/>
                 <img src = {beerDetail.image_url} alt="some beer"></img>
                   <p>{beerDetail.name}</p>
                   <p>{beerDetail.tagline}</p>
                   <p>{beerDetail.first_brewed}</p>
                   <p>{beerDetail.attenuation_level}</p>
                   <p>{beerDetail.description}</p>
                   <p>{beerDetail.contributed_by}</p>
                  </div>
                   

                )
 
            </div>
        )
    }
}

export default BeerDetail






