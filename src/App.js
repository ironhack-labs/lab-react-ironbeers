import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';
import BeersList from './Components/BeersList';

function App() {
  return (
    <div className="App">
     
     
     <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/beers" element = { 
      <div>         
        <Header/> 
        <BeersList/>
      </div>} />
     </Routes>
     
     

    </div>
  );
}

export default App;
