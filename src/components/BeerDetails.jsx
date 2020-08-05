// import React, { Component } from 'react';
// import axios from 'axios';
// import Header from './Header';

// export class BeerDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       beer: {},
//       // beerId: props.match.params.id,
//     };
//   }
//   componentDidMount() {
//     axios
//       .get(
//         'https://ih-beers-api2.herokuapp.com/beers/' +
//           this.props.match.params.id
//       )
//       .then((response) => {
//         console.log(response.data);
//         console.log(this.props.match.params.id);
//         this.setState({ beer: response.data });
//       })
//       .catch((error) => console.log(error));
//   }
//   render() {
//     const cerveza = this.state.beer;
//     return (
//       <div>
//         <Header />
//         <div>
//           <img src={cerveza.image_url} alt="Beer img" />
//           <h3>{cerveza.name}</h3>
//           <h4>{cerveza.tagline}</h4>
//           <h5>
//             {cerveza.first_brewed} {cerveza.attenuation_level}
//           </h5>
//           <p>{cerveza.description}</p>
//           <h5>{cerveza.contributed_by}</h5>
//         </div>
//       </div>
//     );
//   }
// }

// export default BeerDetails;

import React, { Component } from 'react';

export class BeerDetails extends Component {
  render() {
    return (
      <div>
        <h1> DETALLES</h1>
      </div>
    );
  }
}

export default BeerDetails;
