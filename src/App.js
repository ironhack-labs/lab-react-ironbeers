import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ListBeers from './Pages/ListBeers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListBeers />
    </div>
  );
}

export default App;
