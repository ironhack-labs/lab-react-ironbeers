import NavBar from "../../components/NavBar";
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BeerDetails() {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useState(() => {
        async function fetchBeer(){
            setLoading(false)
            try{
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
                setBeers(response.data)

            } catch (error) {
                console.log(error)
            }
            }
            fetchBeer()
            setLoading(true)
        }, [])
        console.log(beers)


        return ( 
            <>
           
            <div style={{width: '710px' , margin:"auto"}} >
                  <NavBar/>
                {loading &&(
                    
                    <div style={{display : "flex", flexDirection:'column', alignItems:'center', borderBottom: '2px gray solid'}}>
                        <img src={beers.image_url} style={{width:"50px", margin:'20px'}} alt='beer picture'/>
                           
                        <div style={{ width: '710px' ,display:'flex'  , justifyContent:'space-around'}}>
                            <p style={{marginRight:"70px"}}>{beers.name}</p>
                            <p>{beers.attenuation_level}</p>
                        </div>

                        <div style={{ width: '710px' ,display:'flex'  , justifyContent:'space-around'}}>
                            <p>{beers.tagline}</p>
                            <p>{beers.first_brewed}</p>
                        </div> 

                        <div style={{ width: '710px'}}>
                            <p>{beers.description}</p>
                        </div>

                        <div style={{display : "flex", width: '710px'}} >
                            <p>{beers.contributed_by}</p>
                        </div>

                    </div>

            </div>

            </>
    );
}

export default BeerDetails;
