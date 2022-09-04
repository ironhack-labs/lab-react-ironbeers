import React, {useState, useEffect} from 'react';
import "./BeerList.css"

export const BeerList = ({data, setData}) => {

    const [search, setSearch] = useState("")

    useEffect(()=> {
        const copyArr = [...data]
        const filteredArr = copyArr.filter((elem) => elem.name.includes(search))
        setData(filteredArr)
        console.log(data)

        if(search.length === 0) {
            console.log('HEY')
            setData(data)
        }

    }, [search]) 

  return (
    <div>
        <h1 className="titre">List of Beers</h1>
        <input type="text" onChange={(event)=>setSearch(event.target.value)}/>
    <div className ="container">
    {data.map((elem => (
        <div>
            <h1>{elem.name}</h1>
            <img src={elem.image_url} alt={"a"}/>
            <p>{elem.description}</p>
            <p>Tags: {elem.tagline}</p>
            <p>Contributed by: {elem.contributed_by}</p>
        </div>
    )))}
        </div>
      </div>
  )
}

export default BeerList;