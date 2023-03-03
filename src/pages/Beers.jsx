import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ApiContext } from '../contexts/api.context'

import Header from '../components/Header'

function Beers() {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [searchedBeers, setSearchedBeers] = useState(null)
    const {apiUrl} = useContext(ApiContext)

    const getBeers = async () => {
        try {
            let response = await axios.get(apiUrl)
            setBeers(response.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers();
      }, []);

    const handleSearch = (e) => setSearch(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //make the call to the api
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
            setSearchedBeers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
        <Header />
		<form onSubmit={handleSubmit}>
			<label htmlFor='search'>Search Beer</label>
			<input
				type='text'
				name='search'
				value={search}
				onChange={handleSearch}
			/>
			<button type='submit'>Search</button>
		</form>

        {loading && <p>Loading ...</p>}

        {searchedBeers && (
            searchedBeers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={`${beer.name}`}/>
                        <Link to={`/beers/${beer._id}`}>
                            <h2>{beer.name}</h2>
                        </Link>
                        <h3>{beer.tagline}</h3>
                        <p><span style={{fontWeight: 500}}>Created by: </span>{beer.contributed_by}</p>
                    </div>
                )
            })
        )}
        
        {beers && !searchedBeers && (
            beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={`${beer.name}`}/>
                        <Link to={`/beers/${beer._id}`}>
                            <h2>{beer.name}</h2>
                        </Link>
                        <h3>{beer.tagline}</h3>
                        <p><span style={{fontWeight: 500}}>Created by: </span>{beer.contributed_by}</p>
                    </div>
                )
            })

        )}
    </div>
  )
}

export default Beers
