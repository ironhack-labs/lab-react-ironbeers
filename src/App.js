import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/'/>    
        <Route exact path='/beers' />    
        <Route exact path='/random-beer' />    
        <Route exact path='/new-beer' />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
