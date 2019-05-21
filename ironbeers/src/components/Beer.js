import React, { Component } from "react";
import NavBar from "../common/NavBar";
import { getBeer } from "../services/beers";

class Beer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getBeer(id)
      .then(beer => {
        this.setState({ beer });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { beer } = this.state;
    console.log(beer);
    const {
      image_url,
      name,
      attenuation_level,
      tagline,
      description,
      contributed_by,
      first_brewed
    } = beer;
    return (
      <div>
        <NavBar />
        {beer && (
          <div className="uk-container uk-container-small uk-padding-small">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top uk-flex uk-flex-center">
                <ul className="uk-thumbnav">
                  <li>
                    <img className="beerImg" src={image_url} alt={name} />
                  </li>
                </ul>
              </div>
              <div className="uk-card-body">
                <table className="uk-table">
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="uk-card-title">{name}</h3>
                      </td>
                      <td>
                        <p className="uk-text-muted">{attenuation_level}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{tagline}</p>
                      </td>
                      <td>
                        <p className="uk-text-bold">{first_brewed}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="uk-padding-small">
                  <p className="uk-text-bold">{description}</p>
                  <p className="uk-text-muted">{contributed_by}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Beer;
