import './App.css';
import {Routes,Route} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
    { window.location.pathname !== '/' && <Header/>}
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
      
    </div>
  );
}

export default App;
