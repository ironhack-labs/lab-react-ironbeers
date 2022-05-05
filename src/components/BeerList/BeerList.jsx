import { Link } from "react-router-dom"


const BeerList = ({ beers }) => {

    return (
        <div >
            {
                beers.map(elm => {
                    return (
                        <div key={elm._id}>
                            <img src={elm.image_url} alt="beerimage"></img>
                            <div>
                                <h3>{elm.name}</h3>
                                <h5>{elm.tagline}</h5>
                                <p>{elm.contributed_by}</p>
                                <Link to={`/${elm._id}`}>Detalles</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BeerList 