// @flow

import './styles.css';

import React          from 'react';
import { Link }       from 'react-router';
import { connect }    from 'react-redux';

export const NavBar = ({}) => {

  return (
    <nav className="navbar">
       <ul className="navbar-nav">
            <li><Link to={'/beers'} className="nav-link"> Search Beers </Link></li>
       </ul>
    </nav>
  );
};

const App = ({children }:{children:React$Element<any> }) =>
  <section className="App">
    <NavBar/>
    { children }
  </section>;


export default connect(
)(App);
