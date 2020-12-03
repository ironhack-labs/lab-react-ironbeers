// import React, { Component } from 'react'
// import BeerService from './../../service/beers.service'
// import Beers from './../Beers'
// import Navbar from './../navbar/Navbar'


// class BeerDetails extends Component {

//     constructor() {
//         super()
//         this.state = {
//             beer: undefined
//         }
//         this.BeerService = new BeerService()
//     }

//     componentDidMount = () => this.beerDetails

//       beerDetails = () => {
//         this.BeerService
//             .getOneBeer(this.props.match.params.id)
//             .then(res => this.setState({beer: res.data}))
//             .catch(err => console.log(err))
//     }
    

//     render() {

//         return (
//             <>
//                 <Navbar />
//                 <h1>{this.state.beer.name}</h1>
//                 <img src={this.state.beer.imageUrl} alt={this.state.beer.name} />
//                 <h3>Tagline: {this.state.beer.tagline}</h3>
//                 <p>First brewed: {this.state.beer.first_brewed}</p>
//                 <p>Attenuation level: {this.state.beer.attenuation_level}</p>
//                 <p>{this.state.beer.description}</p>                              
                                

//             </>
//         )
//     }
// }

// export default BeerDetails