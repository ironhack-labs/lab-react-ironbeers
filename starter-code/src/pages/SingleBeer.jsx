// import React, { Component } from 'react';
// import axios from 'axios'; 


// class SingleBeer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       beers: [],
//     };
//   }
//   componentDidMount() {
//     axios.get('https://ih-beers-api.herokuapp.com/beers')
//     .then(response => {
//       this.setState({ beers: response.data });
//       console.log('Single Beer');
//     });
    
//   }
//   debugger
//   render() {
//            let theBeer = this.state.beers.find((beer) => beer._id === this.data.match.params._id);
//     return (
//       <div>
//         <p>{theBeer.name}</p>
//       </div>
//     );
//   }
// }

// export default SingleBeer;
