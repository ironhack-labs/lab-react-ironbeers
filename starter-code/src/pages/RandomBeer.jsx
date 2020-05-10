import React, { Component } from 'react'
import Header from "../components/Header";

class RandomBeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
        };
    }

//     componentDidMount() {
//         // const randomIid = ....;
//         axios
//           .get("https://ih-beers-api2.herokuapp.com/beers/" + randomIid)
//           .then((apiResponse) => {
//             this.setState({ beer: apiResponse.data });
//           })
//           .catch((error) => {});
//       }

    render() {
//         if (!this.state.pokemon) return null;
        return (
          <div>
           <Header/>
             <h1>One Beer Details</h1>
    

           </div>
        );
      }
    }
    export default RandomBeer;