import Beers from './../components/Beers/Beers'
import BeerDetail from './../components/BeerDetail/BeerDetail'
import BeerRandomDetail from './../components/BeerRandomDetail/BeerRandomDetail'
import NewBeer from './../components/NewBeer/NewBeer'
import CreateBeer from './../components/CreateBeer/CreateBeer'
import Index from './../components/Index/Index'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/beers" element={<Beers />} />
            <Route path="/beer-detail/:beer_id" element={<BeerDetail />} />
            <Route path="/random-beer" element={<BeerRandomDetail />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes