import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="AllBeersPage">
            {
                beers.map(elm => {
                    return (
                        <div>
                            <Link to={`/beers/${e._id}`}><img src={elm.image_url} alt="" /></Link>
                            <h3 key={elm._id}>{e.name}</h3>
                            <h4>{elm.tagline}</h4>
                            <p>Created by: {elm.contributed_by}</p>
                        </div >
                    )
                })
            }
        </div>
    )

}

export default AllBeersPage;
