// eslint-disable-next-line

import { Component } from 'react';
import Navbar from "./Components/A_Navbar/Navbar";
import Banner from "./Components/B_Banner/Banner";
import About from "./Components/C_About/About";
import LinhaTempo from "./Components/D_LinhaTempo/Tempo";
import MapCards from "./Components/E_Portifolio/MapCard";
import Formulario from "./Components/F_Contato/Formulario"
import Footer from "./Components/G_Footer/Footer";
import './App.scss';

export default class App extends Component {

  constructor() {
    super( );
  

 this.user = 'Aline Pollis';
  }
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <About />
        <LinhaTempo />
        <MapCards />
        <Formulario />
        <Footer owner={this.user} />
      </>
    );
  }

}
