import React from 'react'

const SingleBeer = (props) => {
    // console.log("PROPS", props.beers)
    // console.log("PARAMS", props.match.params)

 const singleBeer =  props.beers.find((singleBeer) => {return props.match.params.id === singleBeer._id})
 if(!singleBeer) {
     return <h1>No beer found with this ID</h1>
 }
        // console.log(singleBeer.name)
    return (
        <div>
            <h1>SingleBeer Page</h1>
            <img src={singleBeer.image_url} style={{width: "30px", height:"100px"}}/>
           <p>{singleBeer.name}</p>
           <p>{singleBeer.tagline}</p>
           <p>{singleBeer.first_brewed}</p>
           <p>{singleBeer.attenuation_level}</p>
           <p>{singleBeer.description}</p>
           <p>{singleBeer.contributed_by}</p>
        </div>
    )
}

export default SingleBeer





// import React, { Component } from 'react'
// import axios from "axios";

// export default class SingleBeer extends Component {
//      state = {
//     beers: [],
//   };

//   componentDidMount = () => {
//     axios
//       .get('https://ih-beers-api2.herokuapp.com/beers')
//       .then((responseBack) => {
//         console.log('responseBack:', responseBack.data);
//         this.setState({ beers: responseBack.data });
//       });
//   };
   
//     render() {
//         console.log("PROPS", this.props)
//         return (
           
//             <div>
//              <h1>SingleBeer Page</h1>
//                 {this.state.beers.filter((beer) => {
//                  if (this.props.match.params._id === beer._id) {
//                      return (
//                          <p>{beer.name}</p>
//                      )
//                  }
//                 })}
//             </div>
//         )
//     }
// }

