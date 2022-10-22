import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import "../App.css"

export default function ListBeers(props) {

    useEffect(() => {
        props.callbackToGetBeers()
    }, [])

    return (
        <div className="ListBeers">
            <div className="headerinFull">
                <Header />
            </div>
            <div className="listUnderHeader">
                {props.beers.map(beer => {
                    return (
                        <div className="eachBeer">
                            <img src={beer.image_url} alt="beerlogo" className="beerImage" />
                            <div className="beerText">
                                <h2>{beer.name}</h2>
                                <h3 className="tagline">{beer.tagline}</h3>
                                <h4>Added By: {beer.contributed_by}</h4>
                                <Link to={`/beers/${beer._id}`}> More details </Link>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}