import { useState, useEffect } from 'react';
import { queryClient } from '../index'
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { getAllBeers } from "../services/beerApi";
import { BeerCard } from "../components/BeerCard/BeerCard";


const useGetAllBeers = (filters) => {
	return useQuery("beers", getAllBeers,
	{
		keepPreviousData: true,
		select: (beers) => beers.filter(beer => beer.name.startsWith(filters) )
	});
}


export const AllBeers = () => {

	const [filters, setFilters] = useState("")
	const { isLoading, isError, data, error } = useGetAllBeers(filters)
	const { register, handleSubmit, watch, formState: { errors }, } = useForm();
	
	const onChange = (value) => setFilters(value.beerSearch)
	
	if (isLoading) {
		return (
			<div className="spinner-border text-primary mt-4" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}


		return (
			<>
				<div className="container-fluid d-flex justify-content-center mt-4">
					<div className="col col-lg-4">
						<div className="navbar-nav">
							<form className="d-flex" onChange={handleSubmit(onChange)}>
								{/* register your input into the hook by invoking the "register" function */}
								<input className="form-control me-2" placeholder="Search" {...register("beerSearch")} />
								{/* errors will return when field validation fails  */}
								{errors.beerSearch && <span>No beer found</span>}
							</form>
						</div>
					</div>
				</div>
				{data.map((item) => (
					<BeerCard key={item._id} {...item} />
				))}
			</>
		);
	}

