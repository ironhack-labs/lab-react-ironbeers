import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

export const AllBeer = () => {
  const [beer, setBeer] = useState([]);
  const [search, setSearch] = useState("");

  const beers = async () => {
    const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`);
    return res.data;
  };
  useEffect(() => {
    beers().then(beer => setBeer(beer));
    console.log(beer);
  }, []);

  const searchBeers = async query => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
    );
    return response.data;
  };

  const handleSearch = e => {
    const query = e.target.value;
    searchBeers(query).then(beer => setBeer(beer));
    setSearch(query);
  };

  if (!beer[0] && !search) return <p>Loading...</p>;

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          className="search"
          name="search"
          placeholder="Search a beer"
          value={search}
          onChange={handleSearch}
        />
      </form>
      {beer.map(beer => (
        <div className="prueba">
          <Link className="link" to={`/beer/${beer._id}`} key={beer.i}>
            <img src={beer.image_url} alt={beer.name}></img>
            <h3>{`Name: ${beer.name}`}</h3>
            <p>{`Tagline: ${beer.tagline}`}</p>
            <p>{`Contributed By: ${beer.contributed_by}`}</p>
            <hr></hr>
          </Link>
        </div>
      ))}
    </div>
  );
};

//-------------------------------------------------------------------------------------------------------------------------------
// Asi seria en una clase
// class AllBeer extends Component {
//   constructor() {
//     super();
//     this.state = { beer: undefined };
//   }

//   componentDidMount() {
//     fetch("https://ih-beers-api2.herokuapp.com/beers")
//       .then(response => response.json())
//       .then(beersArray => this.setState({ beer: beersArray }));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.beer ? (
//           <div>
//             {this.state.beer.map(beer => (
//               <div className="prueba">
//                 <Link className="link" to={`/beer/${beer._id}`} key={beer.i}>
//                   <img src={beer.image_url} alt={beer.name}></img>
//                   <h3>{`Name: ${beer.name}`}</h3>
//                   <p>{`Tagline: ${beer.tagline}`}</p>
//                   <p>{`Contributed By: ${beer.contributed_by}`}</p>
//                   <hr></hr>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Cargando...</p>
//         )}
//       </div>
//     );
//   }
// }

// export default AllBeer;
