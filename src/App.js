import { Route, Routes } from 'react-router-dom';
//import NavBar from "./components/ui/navbar/NavBar";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ListScreen from './screens/ListScreen/ListScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/beers' element={<ListScreen/>}/>
        <Route path='/beers/:id' element={<DetailScreen/>}/>
        {/* <Route path='/beer/random' element={<DetailScreen/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
