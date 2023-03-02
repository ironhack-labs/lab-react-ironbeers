import { Form } from "react-bootstrap"

const InputSearchBeer = ({ searchBeer }) => {


    return (
        <Form.Control onChange={searchBeer}
            placeholder="Search beer..."
        />
    )
}
export default InputSearchBeer