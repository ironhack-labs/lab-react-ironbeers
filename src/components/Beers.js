import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function Beers(props) {
    const [searchQuery, setSearchQuery] = useState("");

    const findBeerToDisplay = (e) => {
        setSearchQuery(e.target.value)
        axios.get(process.env.REACT_APP_API_URL + "/search?q=" + searchQuery)
            .then((res) => { props.setBeerList(res.data) })
            .catch((e) => console.log("error searching beers", e))
    }

    return (
        <div>
            <form>
                <label> Search for beers
                    <input
                        type="text"
                        name="q"
                        placeholder="search by name of the beer"
                        value={searchQuery}
                        onChange={findBeerToDisplay}

                    />
                </label>
            </form>
            {props.beersList.map((beer, index) => {
                return (

                    <div key={index}>
                        <Link to={beer._id}>{beer.image_url
                            ? <img src={beer.image_url} alt={beer.name} />
                            : <img src="https://via.placeholder.com/150"
                                alt={beer.name} />}<br /></Link><br />
                        {beer.name}<br />
                        {beer.tagline}<br />
                        <p>Created by:</p>{beer.contributed_by}<br />
                    </div>

                )
            })}
        </div>
    )
}