import { Link } from "react-router-dom";

const ListBeers = ({ beersArr, isLoading }) => {
  /*
  1. data from API is fetched
  2. data still not there, therefore beersArr undefinde (asynchronous JS)
  3. if beersArr is not yet defined, show the picture (or sth else) and go back to App.js
  4. in app.js the state of the array is update (with the API data)
  5. the conditions here are not true anymore and the code underneath is executed successfully
  */

  if (isLoading) {
    return (
      <div>
        Still waiting for second state update of the array so that it can be
        displayed.
      </div>
    );
  }

  return (
    <div>
      <nav className="App-header">
        <Link className="App-link" to="/">
          Home
        </Link>
      </nav>
      {beersArr === null
        ? "loading beers ..."
        : beersArr.map((individualBeerofArr) => {
            return (
              <div key={individualBeerofArr._id}>
                <img src={individualBeerofArr.image_url} alt="a beer" />
                <h2>Title: {individualBeerofArr.name}</h2>
                <p>Tagline: {individualBeerofArr.tagline}</p>
                <p>First Brewed: {individualBeerofArr.first_brewed}</p>
                <p>
                  Attenuation Level: {individualBeerofArr.attenuation_level}
                </p>
                <p>Description: {individualBeerofArr.description}</p>
                <p>Contributed by: {individualBeerofArr.contributed_by}</p>
                <br />
                <Link to={"/beers/" + individualBeerofArr._id}>
                  More Details
                </Link>
                <hr />
              </div>
            );
          })}
    </div>
  );
};

export default ListBeers;
