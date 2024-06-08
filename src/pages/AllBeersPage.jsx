import { useEffect, useState } from "react";
import { getBeers } from "../services/BeersServices";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

function AllBeersPage() {
  //creamos las variables de estado para guardar los datos y el loading
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  //Creamos una variable para guardar el value del input search 
  const [search, setSearch] = useState("");

  //Con esta función actualizo search con lo que este escribiendo
  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearch(searchQuery)
  }

  //La peticón la hacemos dentro de un useEffect para asegurarnos que solo lo hace una vez
  useEffect(() => {
    getBeers()
      .then((beers) => {
        setBeers(beers);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  //Despues de que haga la petición con todos los elementos
  //Antes de renderizar aplicamos un filtro a ese array
  //Creamos una variable nueva donde de guarda el array filtrado para no modificar el array original
  
  const filterdBeers = beers.filter(beer => {
    return beer.name.includes(search)
  })

  return (
    <div className="container text-center mt-5">
      <h1>All Beers</h1>
      <input
          className="form-control me-2 mb-3"
          type="search"
          placeholder="Escribe lo que queires buscar"
          aria-label="Search"
          onChange={handleInputChange}
        />
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
        {filterdBeers.map((beer) => (
          <div className="col-sm-6 col-md-4" key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <Card img={beer.image_url} title={beer.name} tagline={beer.tagline}/>
            </Link>
          </div>
        ))}
      </div>)}
    </div>
  );
}

export default AllBeersPage;
