import BeersList from './../../Components/BeersList/BeersList'
import Header from '../../Components/Header/Header'

const ListPage = ({ beersList }) => {


    return (
        <>
            <Header />
            <h1>Beer gallery</h1>
            <hr />
            <BeersList beersList={beersList} />

        </>
    )
}

export default ListPage