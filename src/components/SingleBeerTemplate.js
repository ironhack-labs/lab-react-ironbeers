import { Link } from "react-router-dom";

function SingleBeerTemplate({beer}) {
  const style = { textDecoration: "none", color: "black" };
    
  return (
    <div className="SingleBeerTemplate">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <img src={beer.image_url} alt={beer.name} className />
        </div>
        <div className="col-12 col-md-6">
          <div className="card p-3">
            <div className="row p-2">
              <div className="col-9 text-center">
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
              </div>
              <div className="col-3 text-end">
                <h1>{beer.attenuation_level}</h1>
                <p>
                  <em>{beer.first_brewed}</em>
                </p>
              </div>
            </div>
            <p className="p-3">{beer.description}</p>
            <h3>{beer.contributed_by}</h3>
          </div>
          <Link to="/beers" style={style}><button className="btn btn-warning mt-5">Back to List</button></Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBeerTemplate;
