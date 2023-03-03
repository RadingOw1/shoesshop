import React from "react";
import "./styles/Navbar.scss";
import Logo from "./assets/Logo.png";
import { Route , Routes } from "react-router-dom";
import Shoescreate from "./pages/shoescreate"

export default function Navbar() {
    return(
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <div className="logo">
                            <a href="/">
                            <img src={Logo} alt="Логотип магазина обуви" />
                            </a>
                        </div>
                        <nav className="nav">
                            <ul className="nav__list">
                                <Routes>
                                    <Route path="/" element={Shoescreate}>
                                        <li className="nav__item"><a href="#" className="custom-btn btn-5">CREATE A SHOE</a></li>
                                    </Route>
                                    <li className="nav__item"><a href="#" className="custom-btn btn-5">ABOUT US</a></li>
                                    <li className="nav__item"><a href="#" className="custom-btn btn-5">CONTACT</a></li>
                                    <li className="nav__item"><a href="#" className="custom-btn btn-5">LOG IN</a></li>
                                    <li className="nav__item"><a href="#" className="custom-btn btn-5">SING UP</a></li>
                                </Routes>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
};