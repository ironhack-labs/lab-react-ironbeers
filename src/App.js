import './App.css';


import HomePage from './Pages/HomePage';
import ListBeers from './Pages/ListBeersPage';

import {Routes,Route} from "react-router-dom";

function App() {



  return (


    <div className="App">
      
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/beers" element={<ListBeers />}/>
      {/* <Route path="/random-beer" element={<RandomBeerPage />}/> */}
      {/* <Route path="/new-beer" element={<NewBeerPage />}/> */}



    </Routes>

    </div>
  );
}

export default App;
