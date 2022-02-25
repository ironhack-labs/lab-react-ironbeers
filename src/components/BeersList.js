import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function BeersList(props) {

//   const renderBeerlist = (elm) => {
//     return (
//       <div className="singleBeerDetails">
//         <li>
//           <img src={elm.image_url} alt={elm.name} />
//           <h3>Name: {elm.name} </h3>
//           <p>Tagline: {elm.tagline} </p>
//           <p>Contributed by: {elm.contributed_by} </p>
//           <Link to={`/beers/${elm._id}`}>More details</Link>
//         </li>
//       </div>
//     );
//   };

  return (
    <>
      <NavBar />
      <Search beers={props.beers} />

      <div className="BeersList">
        <ul>
          {props.beers.map((elm) => {
            return(
              <li>
                <img src={elm.image_url} alt={elm.name} />
                <h3>Name: {elm.name} </h3>
                <p>Tagline: {elm.tagline} </p>
                <p>Contributed by: {elm.contributed_by} </p>
                <Link to={`/beers/${elm._id}`}>More details</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}

{/* { elm ? renderBeerlist(elm) : <p>No details.....</p>} */}