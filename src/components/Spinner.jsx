import React from 'react'
import spinner from "../logo.svg"

const Spinner = () => {
    return (
        <p className="loading">
            Loading beers list...
            <img src={spinner} className="spinner" alt="spinner"/>
        </p> 
    )
}

export default Spinner