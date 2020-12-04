// import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import '../App.css';


import React from 'react'
import BeerDetail from './BeerDetail';


class Beers extends React.Component {
// const Beers = ( ) => {

  state = {
    beers : []
  }

  componentDidMount () {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then (response => {
              console.log(response)
              this.setState({
                beers: response.data
              })
          })
  }

    render() {
        return (
            <div> 
                {this.state.beers.map( (beer, index) => {
                    return ( 
                        <div key= {beer._id}>
                            <a href={`/beers/${beer._id}`}>
                                <p>
                                    <img class="beerImage" src={beer.image_url} alt={beer.name}/>
                                </p>
                            </a>
                            <p>
                                {beer.name}
                            </p>
                            <p>
                                <em>{beer.tagline}</em>
                            </p>
                            <p>
                                <b>Created by:</b> {beer.contributed_by}
                            </p>

                            {/* <BeerDetail
                                beerDetails = {this.beer.id}
                            /> */}
                        </div>
                    )
                }
            
                )}
        </div>
        )
    }   
    
}


 export {  Beers };
 
// class Beers extends React.Component {
//     // state = {
//     //     beers : [ ]
//     // }

//     // componentDidMount () {
//     //     axios.get('https://ih-beers-api2.herokuapp.com/beers')
//     //         .then (response => {
//     //             console.log(response)
//     //         })
//     // }
//      render() {
//          return (
//              <div>
//                  lol beers
//              </div>
//          )
//      }
//  }
 
// class Beers extends React.Component {

    // const beers = [ 
    //     {
    //         id: 1
    //     }
//     // ]

//     // render() {
//         const BeersList = () => {
//             <div>
//                 <h2>
//                     All The Beers
//                 </h2>

//                 {beers.map ( beer => {
//                     return (
//                         <div key= {beer.id}>
//                             <h3>
//                                 {beer.name}
//                             </h3>
//                             <h4>
//                                 {beer.detail}
//                             </h4>
//                         </div>
//                     ); //map retun end
//                 })};
//             </div>
//         } // varibale end
//     // } //render end
// }

// export { Beers };