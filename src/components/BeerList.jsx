

function BeerList({ beer }) {
  return (
    <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
      <div className="card-body">
        <img src={beer.image_url} style={{ height: "6rem" }} alt={"image of " + beer.name} />
        <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
        <h6 className="card-subtitle mb-3 text-muted">
          <em>{beer.tagline}</em>
        </h6>
        <p className="card-text">Created by: {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerList;
