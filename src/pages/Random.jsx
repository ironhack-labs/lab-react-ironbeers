import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const API_URL =  process.env.REACT_APP_BASE_URL



function Random () {
  
   const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API_URL}/random`)
            .then((res)=>navigate(`/beers/${res.data._id}`)) 
            .catch(err => console.log(err))
             // eslint-disable-next-line
    }, [])


    return (
      <p>Loading...</p>
    )
}


export default Random