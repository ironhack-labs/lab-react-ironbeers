import { Link } from 'react-router-dom';

function AllBeers(props) {
  return (
    <section>
      <h1>All Beers</h1>
      <hr />
      {props.beers.map((element) => (
        <div key={element._id}>
          <img src={element.image_url} alt={element.name} />
          <Link to={`/beers/${element._id}`}>
            <h2>{element.name}</h2>
          </Link>
          <h4>{element.tagline}</h4>
          <p>Created by: {props.callbackToName(element.contributed_by)}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default AllBeers;
