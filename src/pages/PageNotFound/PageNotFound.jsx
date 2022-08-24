import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <h1> 404 </h1><br />
      <h4> Page not Found </h4>
      <Link to='/' style={{color: "blue"}}>Go back home</Link>
    </>
  )
}

export default PageNotFound 