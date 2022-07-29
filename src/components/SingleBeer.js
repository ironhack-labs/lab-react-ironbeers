import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"

export function SingleBeer(props) {
    const { beers } = props
    const { id } = useParams()
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        if (beers){
            setBeer(beers.find(beer => beer._id === id))
        }
    }, [])

    const renderBeer = () => {
        if (!beer) {
            return <p>Loading beer...</p>
        } else {
            return (
                <div>
                    <h2>{beer.name}</h2>
                    <img src={beer.image_url} />
                    <p>Tagline: {beer.tagline}</p>
                    <p>First brewed: {beer.first_brewed}</p>
                    <p>Attenuation level: {beer.attenuation_level}</p>
                    <p>Description: {beer.description}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                </div>
            )
        }
    }

    return (
        <div>
            <header>
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/beers" className="link">Back</NavLink>
            </header>
            {renderBeer()}
        </div>
    )
}