import { Route, Routes } from 'react-router-dom';
//import NavBar from "./components/ui/navbar/NavBar";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/beer/:id' element={<DetailScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
