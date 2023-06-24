import { Link } from "react-router-dom"

function ListBeers(props) {

    <p>This is ListBeers</p>

    if (props.listBeers === undefined || props.listBeers === null) {
        console.log("This is it:" + props.listBeers)
        return <p>taking a sipp of the Beers... moment, i will be right there. </p>
    } else {
        return props.listBeers.map((beerValue) => {
            console.log("This is it:" + beerValue)
            return (
                <div key={beerValue.id} className="beerbox">
                   <Link to={`/beers/${beerValue._id}`}>
                    <img src={beerValue.image_url} alt={beerValue.name} width="33px" height="100px"></img>
                    {beerValue.name} <br/>
                    {beerValue.tagline} <br/>
                    {beerValue.contributed_by} <br/>
                </Link>
                </div>
            )
        })
    }

}

export default ListBeers;