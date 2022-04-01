import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Beer.css';

const BeerDetail = ({beers}) => {
  const { id } = useParams()
  const [beer, setBeer] = useState(null);

  useEffect(()=> {
    const beerFound = beers.find(beer => beer._id === id)
    // console.log(id)
    setBeer(beerFound)
  },[])

  console.log('la birrita', beer)
  return ( 
    <> 
    { beer ?
      <div>
        <div>
          <img className="detail-img" src={beer.image_url} alt={beer.name} />
        </div>
        <h2>{beer.name}</h2>
        <h4>{beer.tagline}</h4>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
        : 
        <p>Loading...</p>
      }
    </>
   );
}




 
export default BeerDetail;



// const BeerDetail = (props) => {
//   const {id} = useParams();
//   const [beer, setBeer] = useState(null)

//   useEffect(()=>{
//       beerDetail(id)
//         .then(response => { setBeer(response.data) })
//         .catch(err => console.log(err))

//   }, [id])

//   return (
//     <>
//       <div className="container">
//         <div key={id}>
//           <img className="beer-img" src={beer.image} alt={beer.name} />
//         </div>

//         <div>
//           <h2>{beer.name}</h2>
//           <p>{beer.tagline}</p>
//           <p>
//             <strong>
//               Contributed by: <small>{beer.name}</small>
//             </strong>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

 
// export default BeerDetail;