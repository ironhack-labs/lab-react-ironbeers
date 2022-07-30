import { Link } from "react-router-dom";
import "./AllBeers.css";
function AllBeers(props) {
  const renderBeers = () => {
    const result = props.beers.map((element) => {
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
    <div>{props.beers === null ? <p>Wait a second...</p> : renderBeers()}</div>
  );
}

export default AllBeers;
