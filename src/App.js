import './App.css';
import Header from './components/Header';
import Beers from './pages/Beers';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Beers/>
    </div>
  );
}

export default App;
