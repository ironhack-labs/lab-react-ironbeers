import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <h1> 404 </h1>
      <h4> Page not Found </h4>
      <Link to='/' >Go back home</Link>
    </>
  )
}

export default PageNotFound 