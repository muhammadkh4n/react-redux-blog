import bs from 'bootstrap';
import React from 'react'

import Footer from './footer/Footer';
import Header from './header/Header';

function Layout(props) {
  return (
    <main>
      <Header /> 
      <div className="container">
        {props.children} 
      </div>
      <Footer />
    </main>
  )
}

export default Layout;
