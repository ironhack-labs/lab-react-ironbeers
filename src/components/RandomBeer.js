import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import axios from "axios"

export function RandomBeer(props){
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL + "/random")
            .then(res => {
                setRandomBeer(res.data)
            })
            .catch(err => {
                console.log("Ann error has occurred while loading random beer:", err);
            })
    }, [])

    const renderBeer = () => {
        if (!randomBeer) {
            return <p>Loading randomBeer...</p>
        } else {
            return (
                <div>
                    <h2>{randomBeer.name}</h2>
                    <img src={randomBeer.image_url} />
                    <p>Tagline: {randomBeer.tagline}</p>
                    <p>First brewed: {randomBeer.first_brewed}</p>
                    <p>Attenuation level: {randomBeer.attenuation_level}</p>
                    <p>Description: {randomBeer.description}</p>
                    <p>Contributed by: {randomBeer.contributed_by}</p>
                </div>
            )
        }
    }

    return (
        <div>
            <header>
                <NavLink to="/" className="link">Home</NavLink>
                <h2>Random Beer</h2>
                {renderBeer()}
            </header>
        </div>
    )
}