import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.image}
        alt="card"
        style={{ height: '10%' }}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tincidunt auctor enim a volutpat. Curabitur id ornare tellus, porta
          molestie est. Integer pulvinar turpis ac velit auctor molestie.
          Phasellus euismod laoreet laoreet. Nulla eget condimentum lacus, at
          malesuada magna. Suspendisse viverra dui eget ullamcorper scelerisque.
          Nulla nec dolor ac ligula ullamcorper vehicula.
        </p>
      </div>
    </div>
  );
};

export default Card;
