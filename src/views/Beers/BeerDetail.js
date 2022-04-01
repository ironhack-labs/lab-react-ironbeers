import React from 'react';
// import { beerDetail } from '../../services/BeersService';
// import { useParams } from 'react-router';


const BeerDetail = () => {
  return ( 
    <>
      beer detail
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