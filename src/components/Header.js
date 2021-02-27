import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className=" dark:bg-blueGray-400 dark:text-white">
                <div className="container flex justify-between h-13 mx-auto md:justify-center md:space-x-8 dark:bg-blueGray-400 dark:text-white">
                    <Link to="/">
                    <p aria-label="Back to homepage" className="flex items-center p-3 dark:bg-blueGray-500 dark:text-white">
                    Home
                    </p>
                    </Link>
                </div>
            </header>
        </>
    )

}
export default Header 