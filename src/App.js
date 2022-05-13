import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
     <Routes>
       <Route path="/home" component={Home}></Route>
     </Routes>
    </div>
  );
}

export default App;
