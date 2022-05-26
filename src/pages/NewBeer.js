import { useCreateStates, InputsData } from "./data/NewBeer.data";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BeerForm from "../components/BeerForm";

const NewBeer = () => {
    const states = useCreateStates();
    const navigate = useNavigate();
    const inputsData = new InputsData(states, navigate);

    return (
        <div>
            <Header />
            <BeerForm {...inputsData} />
        </div>
    );
};

export default NewBeer;