import React from 'react'

export const Layout = ({ children }) => {
    return (
        <>
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