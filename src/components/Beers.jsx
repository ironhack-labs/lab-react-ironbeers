import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Beer from './Beer';
import './../styles/Beers.css';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((response) => setSearch(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Beers">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          className="input"
          type="search"
          id="search"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search your beer"
        />
        <button>Search</button>
      </form>
      {beers.map((beer) => {
        return (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <Beer beer={beer} />
          </Link>
        );
      })}
    </div>
  );
};

export default Beers;

// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Beer from './Beer';
// import './../styles/Beers.css';

// export class Beers extends Component {
//   state = {
//     beers: [],
//     search: '',
//   };

//   componentDidMount() {
//     axios
//       .get('https://ih-beers-api2.herokuapp.com/beers')
//       .then((response) => {
//         this.setState({ beers: response.data });
//       })
//       .catch((err) => console.log(err));
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .get(
//         `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`
//       )
//       .then((response) => this.setState({ beers: response.data }))
//       .catch((err) => console.log(err));
//   };

//   render() {
//     const { beers } = this.state;

//     return (
//       <div className="Beers">
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="search"></label>
//           <input
//             className="input"
//             type="search"
//             id="search"
//             name="search"
//             value={this.state.search}
//             onChange={this.handleChange}
//             placeholder="Search your beer"
//           />
//           <button>Search</button>
//         </form>
//         {beers.map((beer) => {
//           return (
//             <Link key={beer._id} to={`/beers/${beer._id}`}>
//               <Beer beer={beer} />
//             </Link>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Beers;
