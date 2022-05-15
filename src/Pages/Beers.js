import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import beersService from "../services/beersService"
import Header from "../components/Header"

function Beers() {
    const [beersArr, setBeersArr] = useState([])

    useEffect(() => {
        loadBeers()
    })

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeersArr(data)
            })
            .catch(e => console.log("error getting data from API", e))
    }

    return (
        <>
            <Header />
            {beersArr.map(beer => {
                return (
                    <div key={beer._id} >
                        <img style={{ maxHeight: "12vh" }} src={beer.image_url} alt="" />
                        <div style={{display: "inline"}}>
                            <Link to={beer._id}><p>{beer.name}</p></Link>
                            <p>{beer.tagline}</p>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Beers