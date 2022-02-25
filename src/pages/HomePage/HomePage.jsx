import { Link } from 'react-router-dom'
import RandomBeer from '../RandomBeerPage/RandomBeer'
import NewBeer from '../NewBeerPage/NewBeer'
import AllBeers from '../AllBeersPage/AllBeersPage'



const HomePage = () => {
    return (
        <>
            <AllBeers />
            <RandomBeer />
            <NewBeer />
        </>
    )
}

export default HomePage