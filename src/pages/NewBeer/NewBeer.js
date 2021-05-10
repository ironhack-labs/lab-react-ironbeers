import React from 'react'
import SCNewBeer from './NewBeer.styled'
import Navbar from '../../components/Navbar/Navbar'
import NewBeerForm from '../../components/NewBeerForm/NewBeerForm'

export default function NewBeer() {
    return (
        <SCNewBeer>
            <Navbar />
            <NewBeerForm />
        </SCNewBeer>
    )
}
