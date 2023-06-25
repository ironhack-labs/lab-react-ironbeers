import { Col } from 'react-bootstrap';

function Search(props) {

  return (
    <>
      <Col>Search</Col>
      <input value={props.query} type="search" onChange={e => 
        {props.setQuery(e.target.value)}
      } />
    </>
  );
}

export default Search;
