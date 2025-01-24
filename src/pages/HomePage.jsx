import BeersPhoto from "../assets/beers.png";

function HomePage() {
  return (
    <div className="container-fluid d-flex justify-content-center flex-column mt-3">
      <h1 className="text-center">Welcome to IronBeers!</h1>
      <img className="img-fluid" src={BeersPhoto} alt="Beers" />
    </div>
  );
}

export default HomePage;
