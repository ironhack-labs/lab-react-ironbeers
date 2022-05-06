import Beercard from "../BeerCard"
import apiBeers from "../../../services/Api.service"
import { useState, useEffect } from 'react'
import { Row,Container,Col } from "react-bootstrap"

const Beers =()=>{

        const [beers, setBeers] = useState([])
    
        useEffect(() => {
            loadBeers()
        }, [beers])
    
        const loadBeers = () => {
            apiBeers
                .getAllBeers()
                .then(({ data }) =>setBeers(data))
                .catch(err => console.log(err))
        }

    return( 
    <>
    <h1>List Of Beers</h1>

    <Container>
        <Row>
       
          { beers.map(elm=>{
                
         return(
            <Col md={{span:3}}>
         <Beercard {...elm}/>
         </Col>
         )
         
         })}
       
      </Row>
    </Container>
    
      </>
        
)

}
export default Beers