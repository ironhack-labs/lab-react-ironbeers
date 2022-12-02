function Search(props){        
    return(
        <>
            <div className="input-group">
                <div className="form-outline">
                    <label className="form-label" for="form1">Search</label>
                    <input type="search" id="form1" className="form-control" onChange = {e=> props.setQuery(e.target.value)}/>
                </div>
            </div>
        </>

    )
}

export default Search;