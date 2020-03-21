import React from 'react';

// Components
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main-content">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}