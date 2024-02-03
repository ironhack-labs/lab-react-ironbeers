import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";
function HomePage() {
  return (
    <div className="HomePage col-12">
      <Link to={"/beers"}>
        <div className="row">
          <img className="" src={beers} />
          <h4 className="text-dark mx-2">All Beers</h4>
          <p className="text-secondary mx-2">
            Lorem Ipsum es un texto de marcador de posición comúnmente utilizado
            en las industrias gráficas, gráficas y editoriales para
            previsualizar diseños y maquetas visuales.
          </p>
        </div>
      </Link>
      <Link to={"/random-beer"}>
        <div className="row">
          <img className="" src={randomBeer} />
          <h4 className="text-dark mx-2">Random Beer</h4>
          <p className="text-secondary mx-2">
            Lorem Ipsum es un texto de marcador de posición comúnmente utilizado
            en las industrias gráficas, gráficas y editoriales para
            previsualizar diseños y maquetas visuales.
          </p>
        </div>
      </Link>
      <Link to={"/new-beer"}>
        <div className="row">
          <img className="" src={newBeer} />
          <h4 className="text-dark mx-2">New Beer</h4>
          <p className="text-secondary mx-2">
            Lorem Ipsum es un texto de marcador de posición comúnmente utilizado
            en las industrias gráficas, gráficas y editoriales para
            previsualizar diseños y maquetas visuales.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
