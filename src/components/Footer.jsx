import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2023{" "}
            <Link to="https://github.com/johnseliseto">johnseliseto</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
