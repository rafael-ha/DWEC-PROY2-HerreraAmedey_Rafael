import React from "react";
import { smoothscroll } from "../../smoothscrolling";

const Header = () => {

    smoothscroll();

    return (
        <header>
            <div className="row">
                <div className="top-bar">
                    <a className="menu-toggle" href="#">
                        <span> Menu </span>
                    </a>
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current">
                                <a className="smoothscroll" href="#intro" title="">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about" title="">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio" title="">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume" title="">
                                    Academics
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#utility" title="">
                                    Utility
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact" title="">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
