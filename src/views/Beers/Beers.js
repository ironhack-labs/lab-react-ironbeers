import React, {Link} from "react";
import './Beer.css';
// import BeerDetail from "../BeerDetail/BeerDetail";

const Beers = ({ beers }) => {
  return (
    <>
      <div>
        {beers.map((beer) => {
          return (
            <>
              <div key={beer.id} className="container">
                <div className="card-container">
                  <img className="beer-img" src={beer.image_url} alt={beer.name} />
                </div>

                <div className="text-card">
              {/* <Link to={`/beers/${beers.id}`}> */}
                  <h2>{beer.name}</h2>
              {/* </Link> */}
                  <h4>{beer.tagline}</h4>
                  <h6>
                    <strong>
                      Contributed by: <small>{beer.name}</small>
                    </strong>
                  </h6>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Beers;

// const Beers = () => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//       beersList()
//         .then(response => {
//           setList(response.data)
//         })
//         .cath( err => console.log(err));
//   }, [])

//    return (
//      <>
//          {
//           list.map(({id, name, tagline, image_url} )=> {
//             return (
//               <BeerDetail
//                 key={id}
//                 name={name}
//                 tagline={tagline}
//                 image={image_url} />
//               )
//           })
//         } :
//         <h2>Loading...</h2>
//      </>
//     );
//  }

//  export default Beers;
