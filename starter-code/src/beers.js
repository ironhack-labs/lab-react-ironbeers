import React from "react";
import beersImage from "./beers.png";

class Beers extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     console.log(this.props);
  //   }

  render() {
    return (
      <div>
        {this.props.beers.map((item, index) => {
          return (
            <div className="card" id={index}>
              <img
                className="cards-img-top"
                src={item.image_url}
                alt="Card  1"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <p>{item.description}</p>
                  <p></p>
                  {item.first_brewed}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
