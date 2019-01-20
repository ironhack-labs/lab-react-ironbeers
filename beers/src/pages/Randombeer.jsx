import React from "react"
import { Solobeer } from "../components/Solobeer";


export const Randombeer = ()=>{
    return(
       <div>
         <Solobeer random={true}></Solobeer>
       </div>
    )
}