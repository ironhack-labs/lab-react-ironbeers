
function SearchBar({ onSearchBeer }) {

  return (
    <>
      <section className="flex flex-col mt-5">
        <span htmlFor="search">Search beer</span>
        <input 
        type="text" 
        id="search" 
        onChange={onSearchBeer} 
        className="text-center border-2 border-black rounded-md h-9 shadow-md mt-3 w-1/2 mx-auto  bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-700"
        placeholder="Mahou"
        />
      </section>
    </>
  );
}

export default SearchBar;