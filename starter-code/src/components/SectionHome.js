import React, {Component} from 'react';

class SectionHome  extends Component {

  render() {
    const {img, title} = this.props;
    return (
      <div className="section-container">
        <img src={img} alt=""></img>
        <div className="section-text-container">
          <h3 className="section-text section-text-title">{title}</h3>
          <p className="section-text section-text-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
      </div>
    );
  }
}

export default SectionHome;