import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1> 404 </h1>
      <h4> Page not Found </h4>
      <Link to='/' >Go back home</Link>
    </div>
  )
}

export default ErrorPage