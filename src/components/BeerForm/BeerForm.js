import React from "react"
import axios from "axios"
import { useState, useEffect} from 'react'


function BeerForm(){

    const [inputs, setInputs] = useState([])

    function handleInputChange(e) {
        const newInputs = { ...inputs };
        newInputs[e.target.name] = e.target.value;
        setInputs(newInputs);
      }


      function enviarDatos(e) {
        e.preventDefault();
        axios.post()
     
        //toast("New Food added")
      }



    return(
        <>
        </>
    )
}


export default BeerForm