import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header';
import SingleBeer from './Components/SingleBeer/SingleBeer';
import RandomBeer from './Components/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SingleBeer />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path='/new' />

        <Route path="*" element={<h1>404</h1>} />

      </Routes>
    </div>


  )
}

export default App;
