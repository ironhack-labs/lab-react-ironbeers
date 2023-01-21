import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";
import NewBeer from "./components/NewBeer";

function App() {
  const baseURL = process.env.REACT_APP_API_URL;
  const [beers, setBeers] = useState([]);
  const [name, setName] = useState([]);
  const [tagline, setTagline] = useState([]);
  const [description, setDescription] = useState([]);
  const [firstBrewed, setFirstBrewed] = useState([]);
  const [brewersTips, setBrewersTips] = useState([]);
  const [attenuationLevel, setAttenuationLevel] = useState([]);
  const [contributedBy, setContributedBy] = useState([]);
  const [query, setQuery] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log("error getting apts from DB", e));
  }, []);

  useEffect(() => {
    axios.get(baseURL + '/search?q=' + query)
      .then((response) => {
        setBeers(response.data)
      })
      .catch(e=>console.log(e, 'error searching '))
   
  },[query])


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    axios
    .post(baseURL + "/new", newBeer)
    .then((response) => {
      setBeers([...beers, newBeer]);
      console.log("new beer created", newBeer);
    })
    .catch((e) => console.log("error creating new beer"));
    setName("");
    setTagline("");
    setDescription("");
    setAttenuationLevel("");
    setFirstBrewed("");
    setBrewersTips("");
    setContributedBy("");
    navigate("/beers");
  }

  
  

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers beers={beers} setQuery={setQuery} />} />
        <Route path="/beers/:beerId" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route
          path="/new-beer"
          element={
            <NewBeer
              setName={setName}
              setTagline={setTagline}
              setDescription={setDescription}
              setFirstBrewed={setFirstBrewed}
              setBrewersTips={setBrewersTips}
              setAttenuationLevel={setAttenuationLevel}
              setContributedBy={setContributedBy}
              callbackToHandleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
