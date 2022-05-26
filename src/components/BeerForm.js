import { StyledBeerForm, Submit } from "./styled/BeerForm.styled";
import BeerFormInput from "./BeerFormInput";

const BeerForm = ({ inputs, handleSubmit }) => (
    <StyledBeerForm onSubmit={handleSubmit}>
        {inputs.map(input => <BeerFormInput key={input.label} input={input} />)}
        <Submit><strong>ADD NEW</strong></Submit>
    </StyledBeerForm>
);

export default BeerForm;