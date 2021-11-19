// eslint-disable-next-line
import { Component } from 'react';
import React from "react";
import logo from "../Imagens/logo.jpg";
import './Navbar_Style.scss';

export default class Navbar extends Component {

    render() {
        // const Navbar = () => {
            return (

                <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <div className="container">


                        <a className="navbar-brand" href="#experience"> <img className="logoNavbar" src={logo} alt="logomarca"></img> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarText">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Home <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portifólio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contacts">Contatos</a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>

            )
        // }

    }
}
