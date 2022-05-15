import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Beers from './components/Beers';
import CreateBeers from './components/CreateBeers';
import RandomBeers from './components/RandomBeers';
import axios from "axios";
import { useState, useEffect } from 'react';
import Details from "./components/Details";



function App() {



  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        // console.log('res.data', res.data);
        setData(res.data)
        setIsPending(false)
      })
      .catch(err => {
        setIsPending(false)
      })
  }, [])


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beers' element={<Beers beers={data} />} />
          <Route path='/create-beers' element={<CreateBeers />} />
          <Route path='/random-beers' element={<RandomBeers />} />
          {data && <Route path='/:id' element={<Details beers={data} />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
