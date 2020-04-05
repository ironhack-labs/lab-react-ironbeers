import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListBeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [], search: '' };
  }

  getAllBeers = async () => {
    await axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
      .then((responseApi) => {
        this.setState({ listOfBeers: responseApi.data });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.listOfBeers);
    console.log(this.state.search);
  };

  componentDidMount() {
    this.getAllBeers();
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(this.search);
    this.setState({ [name]: value });
  };
  
  filter = (e) => {
    this.setState({search: e});
    this.getAllBeers();
  }
  
  render() {
    console.log(this.state.search);
    return (
      
      <div>
        <div class="topnav">
          
          <input type="text" name="search" onChange = {(e) => this.filter(e.target.value)} placeholder="Filter..." />
        </div>
        {this.state.listOfBeers.map((beer) => {
          return (
            <div key={beer._id}>
              <Link to={beer._id}>
                <h3>{beer.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;

// class ListBeers extends Component {
//   constructor() {
//     super();
//     this.state = { listOfBeers: [] };
//   }

//   getAllBeers = async () => {
//     await axios
//       .get("https://ih-beers-api2.herokuapp.com/beers")
//       .then(responseApi => {
//         this.setState({ listOfBeers: responseApi.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     // console.log(this.state.listOfBeers);
//   };

//   componentDidMount() {
//     this.getAllBeers();
//   }

//   render() {
//     return (
//       <div>

//         {this.state.listOfBeers.map(beer => {
//           return (
//             <div key={beer._id}>
//               <Link to={beer._id}>
//                 <h3>{beer.name}</h3>

//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ListBeers;
