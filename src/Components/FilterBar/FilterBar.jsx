import { useState } from "react"



function FilterBar({ filter }) {


    function handleInput(e) {
        filter(e.target.value)

    }






    return (


        <form>
            <div>
                <input type={"search"} placeholder={"BeerSearch"} onChange={handleInput}></input>
            </div>





        </form>
    )
}

export default FilterBar