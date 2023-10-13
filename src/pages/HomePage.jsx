import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      {/* // ALL BEERS */}
      <Link to={`/beers`}>
        <div className="card" style={{ cursor: "pointer" }}>
          <img src="/beers.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled
            </p>
          </div>
        </div>
      </Link>

      {/* // RANDOM BEER */}
      <Link to={`/random-beer`}>
        <div className="card" style={{ cursor: "pointer" }}>
          <img src="/random-beer.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled
            </p>
          </div>
        </div>
      </Link>
      {/* // NEW BEER */}
      <Link to={`/new-beer`}>
        <div className="card" style={{ cursor: "pointer" }}>
          <img src="/new-beer.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
