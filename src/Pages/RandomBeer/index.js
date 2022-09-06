import NavBar from "../../components/NavBar";
import axios from 'axios'
import { useState , useEffect } from 'react'


function RandomBeer(){
    const [beers , setBeers] = useState([])
    const [loading ,setLoading] = useState(false)

    useState(()=>{
        
        async function fetchBeer(){
         setLoading(false)
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            setBeers(response.data)
            
        } catch (error) {
            console.log(error)
        }
        
        
        }
        fetchBeer()
        setLoading(true)
    },[])

    console.log(beers)

    return(
        
             <div style={{width: '710px' , margin:"auto"}} >
                  <NavBar />
                {loading &&(
                   
                        
                        <div className="detail-container">
                            <div>

                            <img src={beers.image_url} style={{width:"60px", margin:'25px'}} alt='beer img'/>

                            <div style={{ width: '700px' ,display:'flex'  , justifyContent:'space-around'}}>
                                <p style={{marginRight:"50px", fontesize: "20px", fontWeight:"bold"}}>{beers.name}</p>
                                <p style={{marginRight:"50px", fontesize: "20px", fontWeight:"bold"}}>{beers.attenuation_level}</p>
                            </div>
                            <div style={{ width: '700px' ,display:'flex'  , justifyContent:'space-around'}}>
                                <p>{beers.tagline}</p>
                                <p>{beers.first_brewed}</p>
                            </div>
                            <div style={{ width: '700px'}}>
                                <p>{beers.description}</p>
                            </div>
                            <div style={{display : "flex", width: '700px'}} >
                                <p>{beers.contributed_by}</p>
                            </div>

                            </div>
                        </div>
                        
                    )}
                   


                
       
        </div>
        
    )
}


export default RandomBeer;