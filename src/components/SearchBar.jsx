

export default function SearchBar(props) {

  // imported the search and setSearch states from BeerList
  const {search, setSearch} = props

  //handle the input :)
  function handleSearch(event) {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <input className="beers-search" type="text" name="search" id="search" value={search} onChange={handleSearch} />
  )
}