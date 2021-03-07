import React from "react";
import {  } from 'react-router-dom';
import '../App.scss';
import NavBar from '../companents/navbar/Navbar';
import Footer from '../companents/footer/Footer';
import About from '../companents/about/About';
import Panel from '../companents/banner/Banner';
import Services from '../companents/services/Services';
import Cards from '../companents/cards/Cards';

function Main() {
  return (
    <div className="container">
      <NavBar/>
      <Panel/>
      <About/>
      <Services/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default Main;
