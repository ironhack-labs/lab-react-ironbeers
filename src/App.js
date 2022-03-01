import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Beer from './pages/Beer'
import New from './pages/New'
import Random from './pages/Random'
import Detail from './pages/Detail'

function App() {
  return (
    <div className="App">

{/* Routes */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/beers' element={<Beer />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/random' element={<Random />}/>
      <Route path='beers/:id' element={<Detail />}/>
    </Routes>
    </div>
  );
}

export default App;
