// general function to fetch data from endpoint, set state variable
const fetchData = async(urlEndpoint, setter) => {
    try {
      const response = await fetch(urlEndpoint);

      if (!response.ok) {
        throw new Error(response);
      }

      const data = await response.json();
      
      setter(data);

    } catch (error) {
      console.log("An error occured: ", error)
    }
  }