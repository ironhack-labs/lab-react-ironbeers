import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";
import AddBeerPage from "./AddBeerPage";
import RandomBeersPage from "./RandomBeerPage";

function HomePage() {
    return (
        <div className="container p-2">
      <div class="row-8">
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="src\assets\beers.png" class="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <Link className="text-white" to="/beers">
                  <button type="button" class="btn btn-primary">
                    See All Beers
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="src\assets\random-beer.png"
                class="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <Link className="text-white" to="/random-beer">
                  <button type="button" class="btn btn-primary">
                    See Random Beer
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="src\assets\new-beer.png"
                class="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <Link className="text-white" to="/new-beer">
                  <button type="button" class="btn btn-primary">
                    Create Beer!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    )
}

export default HomePage;
