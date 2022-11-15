export const getBeer = async () => {
  const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/", { method: "GET" });
  if (!response.ok) {
    console.error();
  }
  const beers = response.json();
  return beers;
};

export const filterBeerById = async (id) => {
  const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`, {
    method: "GET",
  });
  if (!response.ok) {
    console.error();
  }
  const beer = response.json();
  return beer;
};

export const randomBeer = async () => {
  const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/random", {
    method: "GET",
  });
  if (!response.ok) {
    console.error();
  }
  const beer = response.json();
  return beer;
};

export const createNewBeer = async (post) => {
  const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error();
  } else if (response.ok) console.log(response.ok);
  const beer = response.json();
  console.log(beer.value);
  return beer;
};
