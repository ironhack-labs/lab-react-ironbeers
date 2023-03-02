// import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import beersService from "../../services/beers.services";
import BeerList from "../../components/BeersList/BeerList";

const ListBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <BeerList beers={beers} />
    )

}
export default ListBeersPage