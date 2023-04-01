
import React from "react";
import { Navbar } from "../components/misc/NavBar";
import BeerForm from "../components/Beers/BeerForm";

export const NewBeer = () => {
    return (
        <div>
            <Navbar />
            <BeerForm />
        </div>
    );
};