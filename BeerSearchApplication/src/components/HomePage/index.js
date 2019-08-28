// @flow
import logo from './beer.png';
import './styles.css';
import React  from 'react';


const HomePage = () =>
  <section className="homePage" style={{padding:'40px 10px'}}>
    <div className="display">
        <h1>
          Welcome to the Beer App.
        </h1>
        <img src={logo} alt="Logo" />
    </div>
  </section>;

export default HomePage;
