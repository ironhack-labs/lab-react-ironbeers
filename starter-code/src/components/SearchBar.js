import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const SearchBar = (props) => {
  const {searchName, filterBeer} = props;
  return(
    <Container className='pt-4'>
      <Form>
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Search beer" value={searchName} onChange={(e) => filterBeer(e.target.value)}/>
          </Form.Group>
      </Form>  
    </Container>  
  );
}

export default SearchBar;