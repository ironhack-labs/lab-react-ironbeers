import { useCreateStates, InputsData } from "./data/NewBeer.data";
import { useState } from "react";
import Header from "../components/Header";
import BeerForm from "../components/BeerForm";
import Error from "../components/Error";

const NewBeer = () => {
    const states = useCreateStates();
    const [error, setError] = useState({});
    const inputsData = new InputsData(states, setError);

    return (
        <div>
            <Header />
            {(Object.keys(error).length === 0) && <BeerForm {...inputsData} />}
            {(Object.keys(error).length !== 0) && <Error {...error} />}
        </div>
    );
};

export default NewBeer;