import React from 'react';

// Components
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
            <footer>
                <div className="container">
                    <small>&copy;2020 - IronBeers</small>
                </div>
            </footer>
        </>
    )
}