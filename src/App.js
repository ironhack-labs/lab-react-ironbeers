import logo from './logo.svg';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeersFromAPI();
  }, []);

  const fetchBeersFromAPI = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log('error getting beers from API', e));
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/beers/:id" element={<Beer beers={beers} />} />
        <Route
          path="/new-beer"
          element={<AddBeer fetchBeersCB={fetchBeersFromAPI} />}
        />
      </Routes>
    </div>
  );
}
export default App;