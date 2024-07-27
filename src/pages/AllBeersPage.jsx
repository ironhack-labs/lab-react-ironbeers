import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchBeer, setSearchBeer] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers${searchBeer ? `/search?q=${searchBeer}` : ""}`)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => console.error(error));
  }, [searchBeer]);

  const handleSearch = (event) => {
    setSearchBeer(event.target.value);
    setVisibleCount(6);
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todas las Cervezas</h1>
      <input
        type="text"
        placeholder="Buscar cerveza..."
        value={searchBeer}
        onChange={handleSearch}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {beers.slice(0, visibleCount).map((beer) => (
          <NavLink to={`/beers/${beer._id}`} key={beer._id} className="border p-4 rounded shadow hover:bg-gray-50">
            <img src={beer.image_url} alt={beer.name} className="h-40 mx-auto" />
            <h2 className="text-xl font-semibold">{beer.name}</h2>
            <p className="text-gray-500">{beer.tagline}</p>
            <p><strong>Created by:</strong> {beer.contributed_by}</p>
          </NavLink>
        ))}
      </div>
      {visibleCount < beers.length && (
        <div className="flex justify-center mt-4">
          <button onClick={loadMore} className="bg-blue-500 text-white px-4 py-2 rounded">
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default AllBeersPage;
