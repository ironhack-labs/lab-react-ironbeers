import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Beers from '../Pages/Beers'
import BeerDetails from '../Pages/Beer-Details'
import RandomBeer from '../Pages/RandomBeer'
import BeerForm from '../BeerForm/BeerForm'



const Approutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<BeerForm />} />
        </Routes>
    )
}

export default Approutes