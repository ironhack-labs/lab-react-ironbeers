import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup } from "react-bootstrap";
import { faSearch } from '@fortawesome/fontawesome-free-solid'


fontawesome.library.add(faSearch);

function Filter(props) {
    return (
        <div className='mx-5 mt-3'>
            <InputGroup >
                <InputGroup.Text>
                    <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
                <Form.Control value={props.query} type="text" placeholder="Search here.." onChange={(e) => { props.setQuery(e.target.value) }} />
            </InputGroup>
        </div>
    )
}

export default Filter;
