import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // props.search(event.target.value)
  };

  useEffect(() => {
    const results = props.beers.filter((elm) => {
      return elm.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="search for a beer"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.map((elm) => {
        return (
          <li>
            <img src={elm.image_url} alt={elm.name} />
            <h3>Name: {elm.name} </h3>
            <p>Tagline: {elm.tagline} </p>
            <p>Contributed by: {elm.contributed_by} </p>

            <Link to={`/beers/${elm._id}`}>More details</Link>
          </li>
        );
      })}
    </div>
  );
}
