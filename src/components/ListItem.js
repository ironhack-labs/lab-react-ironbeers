function ListItem({ beers }) {
  console.log("IN ITEMS", beers);
  /* if (beers[0]) { */
  return (  
            <ul>
                {beers.map((elem) => {
                    return (
                        <div key={elem._id} className="listBeer">
                            <img src={elem.image_url} alt={elem.name} />
                            <div className="itemsTextBox">
                                <h2>{elem.name}</h2>
                                <h4 style={{color: "grey"}}>{elem.tagline}</h4>
                                <p>Created by: {elem.contributed_by}</p>
                            </div>
                        </div>
                    )
                })}
            </ul>
        )
}


export default ListItem;
