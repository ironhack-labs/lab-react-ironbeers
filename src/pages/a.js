import React , { Component}  from 'react'

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);

  const handleSubmit = (e) => {
    // Prevent page reload on submit    
    e.preventDefault();
    // Create the body for the POST request    
    const body = { title: headline, pricePerDay: price };
    
    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        setPrice(1);
      
        // Navigate to the `/` page
      });
  };


  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        
        <button type="submit">Create Apartment</button>
        
      </form>
    </div>
  );
}

export default AddApartmentPage;