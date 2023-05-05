import { Link } from "react-router-dom"


function Header() {
  return (
    <header className="header d-flex flex-column align-items-center">
      <div className="container">
        <Link className="header-brand" to="/">
          <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="house" />
        </Link>
      </div>
    </header>
  )
}
export default Header