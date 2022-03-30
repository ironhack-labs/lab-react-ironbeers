import React from "react"
import axios from "axios"
import { useState, useEffect} from 'react'


function BeerForm(){

    const [inputs, setInputs] = useState([])
    const [done, setDone] = useState(false)

    function handleInputChange(e) {
        const newInputs = { ...inputs };
        newInputs[e.target.name] = e.target.value;
        setInputs(newInputs);
      }


      function enviarDatos(e) {
        e.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", inputs)
        .then((response) => {
            console.log(response.data)
            setDone(true)
            setTimeout(() => setDone(false), 3000)
            setInputs({})
        })
        .catch((error) => console.log(error))
     
        //toast("New Food added")
      }

      useEffect(() => console.log(inputs, [inputs]))


    return(
        <>
          <div className="BeerForm">
              <form onSubmit={ enviarDatos }>
                  <input onChange={ handleInputChange } type="text" name="name" value={ inputs.name }/>

                  <button className="buttonSubmit" type="submit">Add Beer</button>

                  { done && <p>Added with Toast</p>}
              </form>
          </div>  
        </>
    )
}


export default BeerForm