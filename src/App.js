import { Routes, Route} from 'react-router';
import Navbar from './components/misc/Navbar';
import Home from './views/home/Home';
import Beers from './views/beers/Beers';
import "./App.css";

function App() {
      return (
<div className='App'>
<Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Beers' element={<Beers/>} />
  </Routes>
</div>
    );
}

export default App;
