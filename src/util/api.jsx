export const getBeer = async () => {
  const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/", { method: "GET" });
  if (!response.ok) {
    throw { error: "Uhoh!" };
  }
  const beers = response.json();
  return beers;
};
