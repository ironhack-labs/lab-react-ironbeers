import { StyledBeerForm, Input, Submit } from "./styled/BeerForm.styled";
import BeerFormInput from "./BeerFormInput";

const BeerForm = ({ inputs, onSubmit }) => (
    <StyledBeerForm onSubmit={onSubmit}>
        {inputs.map(input => <BeerFormInput key={input.label} {...input} />)}
        <Submit><strong>ADD NEW</strong></Submit>
    </StyledBeerForm>
);

/*
const BeerForm = () => {
    const [description, setDescription] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log(description);
    };
    return (
        <StyledBeerForm onSubmit={handleSubmit}>
            <Input>
                <label htmlFor="Name"><strong>Name</strong></label>
                <input id="Name" type="text" />
            </Input>
            <Input>
                <label htmlFor="Tagline"><strong>Tagline</strong></label>
                <input id="Tagline" type="text" />
            </Input>
            <Input>
                <label htmlFor="Description"><strong>Description</strong></label>
                <textarea id="Description" rows="10" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </Input>
            <Input>
                <label htmlFor="Number"><strong>Number</strong></label>
                <input id="Number" type="number" />
            </Input>
            <Submit><strong>ADD NEW</strong></Submit>
        </StyledBeerForm>
    )
}; */

export default BeerForm;