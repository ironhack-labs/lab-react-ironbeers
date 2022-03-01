## NAVLINK vs ROUTES

- <NavLink/> is just a clickable link -> it does not hold information.
- Link and Route correlates and it is enough to pass information/render components in <Routes/> as long as paths match

## LINK VS <a>

- In react always use <Link/> instead of <a>
- Link tag will render a semantically valid a tag, but doesn’t refresh the page

## CREATING AND HANDLING FORM

- define the state
    - one state per input
    - state with one object with all the inputs
- handle form
    - read input value
    - update the state
    - create new object and save it
    - reset the form

# STATE EXAMPLE 1 (one state)

# defining state
  const [newBeer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

    <label>
        Name
        type="text" 
        name="name" 
        value={newBeer.name} 
        onChange={(e) => handleInputChange(e)} />
    </label>

    const handleInputChange = (e) => {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)


# STATE EXAMPLE 2 (many states)

# defining state
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [ibu, setIbu] = useState(0);
    const [contributed, setContributed] = useState("");

        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}

    />

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { name, tagline, description, firstBrewed, brewersTips, ibu, contributed};

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)

## SEARCH BAR



