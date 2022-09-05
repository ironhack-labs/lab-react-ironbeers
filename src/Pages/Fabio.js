/*
function HomePage() {
    const [beers, setBeers] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchBeerAxios() {
            try {
              const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
              );
              setBeers(response.data);
            } catch (error) {
              console.log(error);
            } 
          }
      
          fetchBeerAxios();
        }, []);
        console.log(beers);
      
        function handleSearch(e) {
            setSearch(e.target.value);
          }
          console.log(search);
    return ( 
        <div>
            <h1>Home Page</h1>
            <label >Pesquise a cerveja</label>
            <input value={search} onChange={handleSearch} />
            <div>
              <div key={beers._id}>
                <h2>{beers.name}</h2>
                <h4>{beers.tagline}</h4>
                <img style={{ width: '100px' }} src={beers.image_url} alt='the beer' />
            </div>            
            </div>
            </div>
            
        
    
            
 
     );
  }
  */