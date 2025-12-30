import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/ui";
import * as beersServices from './services/beers-service';
import { AddBeerPage, AllBeersPage, BeerDetailsPage, HomePage, RandomBeerPage } from "./pages";
import { useEffect, useState } from "react";

function App() {

  const navigate = useNavigate()

  const [beers, setBeers] = useState([]);
  const [reload, setReload] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    const beersList = async () => {
      try {
        const beers = await beersServices.getListBeers();
        setBeers(beers);
        
      } catch (error) {
        console.log('Error en el listado', error.message)
      }
    };

    beersList();
  }, [reload]);

  const handleReload = () => setReload((reload) => !reload);

  const handleSubmitBeer = async (data) => {
    try {
      await beersServices.setBeerNew(data);
      handleReload();
      navigate('/');

    } catch (error) {
      if (error.response?.status === 500) {
        console.error('Error en BeerNew', error.message);
        setErrorMessage(`Error en BeerNew ${ error.message }`);
      }
    }
  };

  return (
    <div className="App">
    <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={<AllBeersPage items={ beers } />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element=
          { 
            <AddBeerPage 
              onSubmitBeer={ handleSubmitBeer } 
              errorMessage={ errorMessage } 
            />
          } 
        />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;