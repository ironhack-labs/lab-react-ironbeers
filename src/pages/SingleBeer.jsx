import React from 'react'

const SingleBeer = (props) => {
    console.log("PROPS", props.beers)
    console.log("PARAMS", props.match.params)

 const singleBeer =  props.beers.filter((singleBeer) => {return props.match.params.id === singleBeer._id})
        //    console.log(singleBeer[0])
    return (
        <div>
            <h1>SingleBeer Page</h1>
           {/* <p>{singleBeer.name}</p> */}
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

