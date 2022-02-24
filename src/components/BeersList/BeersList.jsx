import BeerCard from "../BeerCard/BeerCard"

const BeersList = ({ beers }) => {

    return (
        <div className="row">
            {
                beers.map(eachBeer => {
                    return (
                        <div className="col-4" key={eachBeer._id}>
                            <BeerCard beer={eachBeer} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BeersList