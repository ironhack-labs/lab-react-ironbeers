import { useState } from 'react';
import Form from 'react-bootstrap/Form';


import React from 'react'

function Search({filter}) {
    const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filter(e.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <Form.Control className="ms-auto me-auto pt-2"  style={{ width: '80%' }} type="text" value={query} onChange={handleQuery} />
    </div>
  )
}

export default Search