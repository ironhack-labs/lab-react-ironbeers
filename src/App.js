import './App.css'
import HomePage from "./components/HomePage/HomePage"
import ListBeers from './components/ListBeers/ListBeers'
import SingleBeer from './components/SingleBeer/SingleBeer'
import RandomBeer from './components/RandomBeer/RandomBeer'



import {Routes, Route} from "react-router-dom" 



function App() {

  

  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer/>}/>
        {/* <Route path='/new-beer' element={<NewBeer/>}/> */}
      </Routes>
    </div>
  )
}

export default App
