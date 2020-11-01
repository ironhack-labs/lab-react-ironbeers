import React from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <div className="block">
          <Link style={{ textDecoration: 'none' }} to="/beers">
            <div className="image-container">
              <img className="image" src="./pexels-photo-1796698.jpg" />
            </div>
            <div className="textblock">
              <h1 className="headline">All Beers</h1>
              <p className="copytext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
            </div>
          </Link>
        </div>

        <div className="block">
          <Link style={{ textDecoration: 'none' }} to="/random-beer">
            <div className="image-container">
              <img className="image" src="./pexels-photo-1718384.jpg" />
            </div>
            <div className="textblock">
              <h1 className="headline">Random Beer</h1>
              <p className="copytext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
            </div>
          </Link>
        </div>

        <div className="block">
          <Link style={{ textDecoration: 'none' }} to="/new-beer">
            <div className="image-container">
              <img className="image" src="./pexels-craig-adderley-1557686.jpg" />
            </div>
            <div className="textblock">
              <h1 className="headline">New Beer</h1>
              <p className="copytext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
            </div>
          </Link>
        </div>
        </div>
    )
}
