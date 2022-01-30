import { Link } from "react-router-dom";
import Head from "./Head";

const ListAllTheBeers = ({beers}) => {
    console.log("estou no list", beers)
    return(
        <div>
            <Head/>
            <div>
            {beers.map(({image_url, name, tagline, contributed_by, _id}) => {
                return(
                <Link to={`/beers/${_id}`} key={_id}>
                <div className="list">
              <div>
                <figure>
                  <img src={image_url} className="list-img" alt=""/>
                </figure>
              </div>
              <div>
                  <div>
                    <p className="list-name">{name}</p>
                  </div>
                <div>
                  <p className="list-tagline">{tagline}</p>
                  <p className="list-created">Created by: {contributed_by ? contributed_by.slice(0, -13) : null}</p>
                </div>
              </div>
            </div>
                </Link>

            )}
             )}
            </div>
        </div>
    )

}
export default ListAllTheBeers;