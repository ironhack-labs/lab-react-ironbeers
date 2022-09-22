import { useEffect, useState } from 'react'
import BeerAxios from '../services/BeerAxios'
import ListGroup from 'react-bootstrap/ListGroup'
import BeerListItem from '../components/BeerListItem'
import SearchBar from '../components/SearchBar'
import SpinnerComponent from '../components/SpinnerComponent'


const BeersPage = () => {
    const beersAxios = new BeerAxios()
    const [allBeers, setAllBeers] = useState([])

    useEffect(() => {
        beersAxios.getAllBeers()
            .then((newBeers) => {
                console.log(newBeers)
                setAllBeers(newBeers)
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(allBeers)


    // return (
    //     <div>
    //         <SearchBar setAllBeers={setAllBeers} />
    //         <ListGroup>
    //             {allBeers.map((beer) => {
    //                 return < BeerListItem beer={beer} key={beer._id} />
    //             })}
    //         </ListGroup>
    //     </div>

    // )

    return (!allBeers ? <SpinnerComponent /> : <div>
        <SearchBar setAllBeers={setAllBeers} />
        <ListGroup>
            {allBeers.map((beer) => {
                return < BeerListItem beer={beer} key={beer._id} />
            })}
        </ListGroup>
    </div>)

}

export default BeersPage
