import 'bootstrap/dist/css/bootstrap.min.css'
import './../components/App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Beers from './Beers/Beers'
import NewBeer from './New-beer/New-beer'
import RandomBeer from './Random-beer/Random-beer'
import Details from './Details/Details'




function App() {


  return (

    <>

      <Routes>

        <Route path='/' element={<HomePage />}></Route>

        <Route path='/beers' element={<Beers />}> </Route>

        <Route path='/random-beer' element={<RandomBeer />}></Route>

        <Route path='/new-beer' element={<NewBeer />}></Route>

        <Route path='/details' element={<Details />}> </Route>


      </Routes>






    </>

  )
}

export default App;
