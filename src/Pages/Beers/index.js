import NavBar from "../NavBar";
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

function Beers(){

    const [beers , setBeers] = useState([])
    const [loading ,setLoading] = useState(false)
    const [search, setSearch] = useState('')

    useState(()=>{
        
        async function fetchBeer(){
         setLoading(false)
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setBeers(response.data)
            
        } catch (error) {
            console.log(error)
        }
        
        
        }
        fetchBeer()
        setLoading(true)
    },[])

    console.log(search)
    
    return(
        <>
             <div style={{width: '710px' , margin:"auto"}} >
                  <NavBar/>
                  <input value={search} onChange={handleSearch} />
                {loading &&(
                        
                 beers
                   
                   .filter((element)=>{
                    return element.name.toLowerCase().includes(search.toLowerCase())

                   })
                   
                   
                   
                   .map((element)=>{
                    return(
                        <>
                        <div style={{display : "flex", borderBottom: '2px gray solid'}}>
                        <Link to={`/detalhes/${element._id}`}>
                           <img src={element.image_url} style={{width:"50px", margin:'20px'}} alt='beer'/>
                        </Link>
                            <div style={{display:'flex' , flexDirection:'column' ,alignItems: 'flex-start'}}>
                                <h2>{element.name}</h2>
                                <h4>{element.tagline}</h4>
                                <div>
                                <span style={{fontWeight: 'bolder'}}>Created BY: </span>{element.name}
                                </div>
                            </div>
                        </div>
                        </>
                    )
                   })


                )}
       
        </div>
        </>
    )
}

export default Beers;