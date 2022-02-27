import React from 'react';

function Homepage(props) {
  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
    <div className="list-group">
      { 
        props.countries.map( (element, index) => {
          return (
              <a key={index} className="list-group-item list-group-item-action" href={element.alpha3Code}>{element.name.common}</a>
          )
        })
      }
      </div>
    </div>
  );
}

export default Homepage;