import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import './styles.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Router>
        <Header />
        <main>{children}</main>
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
