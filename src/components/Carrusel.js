import axios from "axios"

function HomeCategories(props) {
  console.log("props: ", props)

  const {setProductsByCategory, setThereAreProducts} = props

  const handleClick = (e) => {
      let API_URL = process.env.REACT_APP_API_URL
      console.log("PROCESS ENV", process.env)
      console.log("REACT_APP_API_URL", process.env.REACT_APP_API_URL)
      console.log("TALK JS ID", process.env.TALK_JS_DEV_ID)
      e.preventDefault()
      let categoryToSearch = e.target.id
      console.log ("category :", categoryToSearch)
      axios
        .get (API_URL+"/product/category/"+categoryToSearch)
        .then (response => {
          console.log ("productsByCategory :", response.data)
          setProductsByCategory (response.data);
          setThereAreProducts(true);
        })
  }


  return (
    <div className="home-scroll">
      <div className="gradient-left"><img src="./arrow-left.png" alt="Arrow to the left"/></div>
      <div className="home-categories">

        <button type="button" onClick = {handleClick} id="assembly" className="categorie-container">
          <img id="assembly" src="./tool-icons/h-montaje.png" alt = "Assembly tools logo"/>
          <h3 id="assembly">
            Assembly
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="cutting" className="categorie-container">
          <img id="cutting" src="./tool-icons/h-corte.png" alt = "Cutting tools logo" />
          <h3 id="cutting">
            Cutting
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="hammering" className="categorie-container">
          <img id="hammering"  src="./tool-icons/h-golpe.png" alt = "Hammering tools logo"/>
          <h3 id="hammering">
            Hammering 
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="painting" className="categorie-container">
          <img id="painting" src="./tool-icons/h-pintura.png" alt = "Painting tools logo"  />
          <h3 id="painting">
            Painting
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="clamping" className="categorie-container">
          <img id="clamping" src="./tool-icons/h-sugecion.png" alt = "Clamping tools logo"/>
          <h3 id="clamping">
            Clamping
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="gardening" className="categorie-container">
          <img id="gardening" src="./tool-icons/h-jardin.png" alt = "Gardening tools logo"/>
          <h3 id="gardening">
            Garden
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="measuring" className="categorie-container">
          <img id="measuring" src="./tool-icons/h-medicion.png" alt = "Measuring tools logo"/>
          <h3 id="measuring">
            Measuring 
            <br />
            tools
          </h3>
        </button>

        <button type="button"  onClick = {handleClick} id="vacuum cleaners" className="categorie-container">
          <img id="vacuum cleaners" src="./tool-icons/h-aspiradora.png"  alt = "Assembly tools logo"/>
          <h3 id="vacuum cleaners" >
            Vacuum 
            <br />
            cleaners
          </h3>
        </button>

        <button type="button" onClick = {handleClick} id="stairs" className="categorie-container">
          <img id="stairs" src="./tool-icons/h-escaleras.png" alt = "Stairs"/>
          <h3 id="stairs">Stairs</h3>
        </button>

        <button type="button" onClick = {handleClick} id="industrial" className="categorie-container">
          <img id="industrial" src="./tool-icons/h-industrial.png" alt = "Industrial tools logo"/>
          <h3 id="industrial">
            Industrial
            <br />
            tools
          </h3>
        </button>
      </div>
      <div className="gradient-right"><img src="./arrow-right.png" alt="Arrow to the right"/></div>
    </div>
  );
}

export default HomeCategories;
