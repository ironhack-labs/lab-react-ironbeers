// import React, { Component } from "react";
// import axios from "axios";

// class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       beers: []
//     };
//   }

//   componentDidMount() {
//     axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
//       this.setState({ beers: response.data });
//     });
//   }

//   render() {
//     return (
//       <div className="Home">
//         {this.state.beers.map(beer => (
//           <li>
//             {" "}
//             <h1>{beer.name}</h1>
//           </li>
//         ))}
//       </div>
//     );
//   }
// }

// export default Home;
