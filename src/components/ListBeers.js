import { Link } from "react-router-dom"
import Headers from "./Headers"

function ListBeers(props) {
    <div className="homebox">
    <Headers />
    </div>
    if (props.listBeers === undefined || props.listBeers === null) {
        console.log("This is it:" + props.listBeers)
        return <p>taking a sipp of the Beers... moment, i will be right there. </p>
    } else {
        return  props.listBeers.map((beerValue) => {
            console.log("This is it:" + beerValue)
            return (
                <div key={beerValue.id} className="beerbox">
                <div >
                    <Link to={`/beers/${beerValue._id}`}>
                    <div className="beerbox-2">
                   
                    <img src={beerValue.image_url} alt={beerValue.name} width="40px" height="100px"></img>
                    </div>
                    <div className="beerbox-2">
                    {beerValue.name} <br/>
                    {beerValue.tagline} <br/>
                    {beerValue.contributed_by} <br/>
                </div>
                </Link>
                </div>
                </div>
            )
        })
    }

}

export default ListBeers;