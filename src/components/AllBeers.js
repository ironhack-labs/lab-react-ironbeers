import { Link, useSearchParams } from "react-router-dom";
import "./AllBeers.css";
function AllBeers(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  const handleSearch = (e) => {
    const name = e.target.value;
    return name ? setSearchParams({ name }) : setSearchParams({});
  };

  const renderBeers = () => {
    const result = props.beers
      .filter((element) =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((element) => {
        return (
          <div key={element._id}>
            <Link to={`/beer/${element._id}`} className="card">
              <div className="image-div">
                <img src={element.image_url} alt="individual-beer" />
              </div>
              <div className="text">
                <h2>Name: {element.name}</h2>
                <p>{element.tagline}</p>
                <span>Created by: {element.contributed_by}</span>
              </div>
            </Link>
          </div>
        );
      });
    return result;
  };
  return (
    <div>
      <form onChange={handleSearch}>
        <input
          type="text"
          name="name"
          value={searchTerm}
          className="form-search"
          placeholder="search by name"
          onChange={(e) => {
            setSearchParams({ name: e.target.value });
          }}
        />
      </form>
      {props.beers === null ? <p>Wait a second...</p> : renderBeers()}
    </div>
  );
}

export default AllBeers;
