import React from "react"
import { useLoaderData } from "react-router-dom"
import { getBeerById } from "../../services/service"
import BeerDetails from "../components/BeerDetails"




export const beerDetailsLoader = async ({ params: { id } }) => {
	const { data: beer } = await getBeerById(id)
	return { beer }
}

function DetailsOfBeer() {
    const {beer} = useLoaderData()
	return <BeerDetails {...beer} />
}


export default DetailsOfBeer