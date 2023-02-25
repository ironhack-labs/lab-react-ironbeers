import { Divider, Row } from "antd"
import React from "react"
import { useLoaderData } from "react-router-dom"
import BeerCard from "../components/BeerCard"
import { getAllBeers } from "../service/services"

export const BeersLoader = async () => {
	const { data: beers} = await getAllBeers()

	return { beers }
	
}



function Beers() {
	const { beers } = useLoaderData()

	return (
		<>
			<Divider>Beers</Divider>
      <div>
      <Row gutter={[16, 24]} className='beers'>
				{beers.map((beers) => (
					<BeerCard key={beers._id} {...beers} />
				))}
			</Row>
      </div>
		
		</>
	)
}

export default Beers