import './App.css';
import {Routes,Route} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import {BeersPage} from './pages/BeersPage'
import { RandomBeerPage } from './pages/RandomBeerPage';
import { NewBeerPage } from './pages/NewBeerPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
    {window.location.pathname !== "/" && <Header/>}
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/beers" element ={<BeersPage/>}/>
      <Route path="/random-beer" element={<RandomBeerPage/>}/>
      <Route path="/new-beer" element={<NewBeerPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
