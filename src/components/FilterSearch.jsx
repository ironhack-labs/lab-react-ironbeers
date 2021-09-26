import React, {useState} from 'react'
import axios from 'axios';

export default function FilterSearch(props) {

    const [qBeer, setQBeer] = useState({})
    
    const handleChange = async (e) => {
        const beer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e}`)
        props.filteredResults(beer)
    }



    return (
        <>
        <div className='search-div'>
        <label htmlFor="">Search</label>
        <input type="text" value={this} onChange={(e) => handleChange(e.target.value)} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    )
}
