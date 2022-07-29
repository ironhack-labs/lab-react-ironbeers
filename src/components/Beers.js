import { NavLink } from "react-router-dom";

const Beers = (props) => {
  const renderBeers = () => {
    const result = props.beers.map((element) => {
      return (
        <div className="beer" key={element._id}>
          <h2>{element.name}</h2>
          <p>Tagline: {element.tagline}</p>
          {element.image_url ? (
            <img src={element.image_url} alt={element.name} />
          ) : (
            <p>No Image!</p>
          )}
          <p>Contributed by: {element.contributed_by}</p>

          <NavLink to={`/beers/${element._id}`}>More Details</NavLink>
          {/* <button
            onClick={() => {
              props.callbackToDelete(element._id);
            }}
          >
            Delete
          </button> */}
        </div>
      );
    });

    return result;
  };

  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
      </header>
      {props.beers === null ? <p>loading beers...</p> : renderBeers()}
    </div>
  );
};

export default Beers;
