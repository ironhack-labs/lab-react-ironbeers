import axios from 'axios'
import React, {Component} from 'react'
import header from '../assets/header.png'
import {Link} from 'react-router-dom'






class BeerDetail extends Component {
    

state = {
 beerDetail: null
}


componentDidMount = async () => {


    const {beerIndex} = this.props.match.params

let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerIndex}`)
console.log(response.data)
let beerDetail = {
    // id: beerIndex,        //were not showing id -> not using
     image: response.data.image_url,
     name: response.data.name,
     tagline: response.data.tagline,
     first_brewed: response.data.first_brewed,
     attenuation_level: response.data.attenuation_level,
     description: response.data.description,
     contributed_by: response.data.contributed_by

}

this.setState({
     beerDetail: beerDetail
  })

}





    render() {
        const {beerDetail} = this.state
        if(!this.state.beerDetail){

            return <p>Loading BeerDetails...</p>
        } 
        return (
            <div>
                <Link to ="/">
   <img src={header} alt="some beer"/>
   </Link>
               
            
                  <div>
                 
                 <img src={beerDetail.image} alt="some beer"/>
                   <p>{beerDetail.name}</p>
                   <p>{beerDetail.tagline}</p>
                   <p>{beerDetail.first_brewed}</p>
                   <p>{beerDetail.attenuation_level}</p>
                   <p>{beerDetail.description}</p>
                   <p>{beerDetail.contributed_by}</p>
                  </div>
                   

        
 
            </div>
        )
    }
}

export default BeerDetail






