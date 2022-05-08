import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import beerPic from "../src/assets/beer.png"


export default function ProductDetails(props) {
  // const [beers, setBeers] = useState([])
  const params = useParams()
  const id = params._id
  // console.log(id)
  
  // useEffect(() => {
  //         axios.get('https://ih-beers-api2.herokuapp.com/beers')
  //         .then(response => {
  //           setBeers(response.data.slice(0, 25))
  //         })
  //         .catch(err => console.log(err))
  //       return () => {
  //         // this would happen when the component is unmounted
  //       }
  //     }, [])
    
      const beer= props.beers.find(beer => beer._id === id)
  //    console.log(beer)

    return <>
        <div className="navbar-home">
      <Link to="/"><img className="home-img"src={beerPic} alt=""/> </Link>
     </div>
        <p className="allbeers-container">
         <img src={beer.image_url} className="beer-img" alt=""/>
          <div>
            <h3> {beer.name}</h3>
            <p> {beer.tagline}</p>
            <p> {beer.description}</p>
            <p> {beer.contributed_by}</p>
            <p> Created by: {beer.name}</p>
          </div> 
        </p>


    </>
};
