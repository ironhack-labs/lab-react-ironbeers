
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
