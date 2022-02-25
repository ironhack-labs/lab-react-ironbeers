function BeerComponent(props) {
  const { beer } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <img className="w-25 my-5" src={beer.image_url} alt="beer" />
        </div>
        <div className="col-9 d-flex align-items-start">
          <table class="table mt-5 w-75">
            <tbody>
              <tr>
                <th scope="row text-justify-start">Name:</th>
                <td>{beer.name}</td>
              </tr>
              <tr>
                <th scope="row" align="left">
                  Tagline:
                </th>
                <td align="left">{beer.tagline}</td>
              </tr>
              <tr>
                <th scope="row">First Brewed:</th>
                <td>{beer.first_brewed}</td>
              </tr>
              <tr>
                <th scope="row">Description:</th>
                <td>{beer.description}</td>
              </tr>
              <tr>
                <th scope="row">Attentuation Level:</th>
                <td>{beer.attenuation_level}</td>
              </tr>
              <tr>
                <th scope="row">Contributed By:</th>
                <td>{beer.contributed_by}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BeerComponent;
