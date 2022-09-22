import { Button, Form } from "react-bootstrap"
import BeerAxios from "../services/BeerAxios"

const SearchBar = ({ setAllBeers }) => {
    const beerAxios = new BeerAxios()

    const filterBeers = (event) => {
        const query = event.target.value
        beerAxios.searchBeers(query)
            .then((newBeers) => setAllBeers(newBeers))
            .catch((err) => console.log(err))
    }

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={filterBeers}
            />
        </Form>
    )
}

export default SearchBar