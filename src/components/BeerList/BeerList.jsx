import BeerCard from "../BeerCard/BeerCard"


const BeerList = ({ beers }) => {

    return (
        <>
            {beers.map(beer => {
                return (
                    <div key={beer._id}>
                        <BeerCard beer={beer} />
                    </div>
                )
            })}
        </>
    )
}

export default BeerList 