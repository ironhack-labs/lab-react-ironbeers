import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FilterBeer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search beers..."
      />

      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Contributed By: {beer.contributed_by}</p>
          {/* Render additional beer details as desired */}
        </div>
      ))}
    </div>
  );
};

export default FilterBeer;


// with the fetch method !!!

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const FilterBeer = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [beers, setBeers] = useState([]);

//   useEffect(() => {
//     fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
//       .then((response) => response.json())
//       .then((data) => setBeers(data));
//   }, [searchQuery]);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search beers..."
//       />

//       {beers.map((beer) => (
//         <div key={beer._id}>
//           <img src={beer.image_url} alt={beer.name} />
//           <h2>{beer.name}</h2>
//           <p>{beer.tagline}</p>
//           <p>Contributed By: {beer.contributed_by}</p>
//           {/* Render additional beer details as desired */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterBeer;