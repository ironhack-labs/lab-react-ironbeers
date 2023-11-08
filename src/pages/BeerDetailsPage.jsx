function BeerDetailsPage() {}

export default BeerDetailsPage;


/* useEffect(()=>{ // fazer de outra forma, talvez n seja preciso tanto
    axios.get(`${BeersAPI}/beers/${beerId}?_embed=tasks`).then((response)=>{
        const oneBeer = response.data;
        setBeers(oneBeer);
        setLoading(false);

        console.log(oneBeer)
    })
}, []); */