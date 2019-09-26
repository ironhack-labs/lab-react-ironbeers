import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const name = 'IronBeers'
  return (
    <>
      <Navbar name={name} />
      <div className='main' style={{ margin: '77px 0' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 my-4'>{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
