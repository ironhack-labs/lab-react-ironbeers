import './App.css';
import { Routes, Route} from "react-router-dom"
import { AllBeers, DetailBeer, NewBeer, RandomBeer, Home} from "./pages"
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>

    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<AllBeers/>} />
        <Route path="/random" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
        <Route path="/beers/:idBeer" element={<DetailBeer/>} />
      </Routes>
      </div>


      </div>
  );
}

export default App;
