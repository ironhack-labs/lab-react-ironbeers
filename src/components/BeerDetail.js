import React from 'react';

function BeerDetail(props) {
		const getBeer = (id) => {
      return this.props.beers.find((el) => el.id === id);
		};
			const { params } = props.match;
      const foundBeer = getBeer(params.id);

  return (
    <div>
      <header>
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + '/images/homeIcon.png'}
            alt="home"
            width="5%"
          />
        </a>
      </header>
      <h2> {foundBeer.name} </h2>
    </div>
  );
}
export default BeerDetail;
