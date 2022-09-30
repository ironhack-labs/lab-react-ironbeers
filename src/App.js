import { Route, Routes } from 'react-router-dom';
//import NavBar from "./components/ui/navbar/NavBar";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBeer from './components/SearchBeer/SearchBeer';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import FormScreen from './screens/FormScreen/FormScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ListScreen from './screens/ListScreen/ListScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBeer className="mb-4"/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/beers' element={<ListScreen/>}/>
        <Route path='/beers/:id' element={<DetailScreen/>}/>
        <Route path='/beers/new' element={<FormScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
