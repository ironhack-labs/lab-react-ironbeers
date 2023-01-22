import { useParams } from "react-router-dom";



import { Link} from "react-router-dom";

import { Navbar,  Image } from 'react-bootstrap';

import logo from '../assets/house-fill (2).svg'

function SingleBeer (props){


    const {beerId } = useParams();

    const details = props.beersArr.find(BeerDetails =>{
        return BeerDetails._id == beerId;
      })


 const renderDetails = () => {
        return (
          <div className="box">
          <div className="card">
          <p><img src = {details.image_url} alt = "beerpic" /></p>
            <h1>{details.name} </h1>
            <p>Tagline: {details.tagline} </p> <br />
         <p>Description: {details.description} </p> <br />
       
         <p>first brewed: {details.first_brewed} </p> <br />
         <p>attenuation level: {details.attenuation_level} </p> <br />
         <p>contributed by: {details.contributed_by} </p> <br />
         
          
       
    <br></br>
    
          </div>
          </div>
        );
      };



    return (
<div>

        <Navbar bg="primary" variant="dark" expand="lg" style={{backgroundColor: 'blue'}}>
        <Navbar.Brand href="/" className="mx-auto">
        <Image src={logo}width="35" height="30" className="d-inline-block align-top" alt="Home" />
        </Navbar.Brand>
        </Navbar>

<h2>Details of beers</h2>
    {details && renderDetails()}
  <Link to="/">Back</Link>

</div>
    )
}



export default SingleBeer;