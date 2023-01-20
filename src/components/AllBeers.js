import { Link } from "react-router-dom";
import Header from "./Header";
import "./AllBeers.css";

function AllBeers(props) {

  return (
    <div>
      <Header />

      {props.beersArr === null
        ? "loading..."
        : props.beersArr?.map((beerObj) => {
            console.log(beerObj);
            return (
              <div className="beerObj" key={beerObj._id}>
                <div>
                  <img src={beerObj.image_url} alt="beer" />
                </div>
                <div>
                  <h2>{beerObj.name}</h2>
                  <h4>{beerObj.tagline}</h4>
                  <h4>Created by: {beerObj.contributed_by}</h4>
                  <Link to={"/beers/" + beerObj._id}>More Details</Link>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default AllBeers;
