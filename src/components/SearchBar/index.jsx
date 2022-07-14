import Form from 'react-bootstrap/Form';
const SearchBar = (props) => {

    return (
        <Form.Control type="text" onChange={props.textHandle} placeholder="Beer Name" />
    )
}

export default SearchBar