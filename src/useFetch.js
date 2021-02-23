import React,{useEffect} from "react"

const useFetch = (url) => {
    const [data, setData] = React.useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
         })
        .then(data => {
          setData(data)
        })
    }, [url])
     
   
    return {data};
}
 
export default useFetch;