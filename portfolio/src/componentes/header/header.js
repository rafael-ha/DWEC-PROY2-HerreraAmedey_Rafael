import React, { useState } from "react";
import { smoothscroll } from "../../smoothscrolling";
import $ from 'jquery';

const Header = () => {
    smoothscroll();

    const [isClicked,setClicked] = useState(false);
    const nav = $(".main-navigation");

    const toggleButton = (e) =>{
        e.preventDefault();
        setClicked(!setClicked);
        nav.slideToggle();
        
    };
    const togglenav = () => {
        setClicked(isClicked);
        nav.fadeOut();
    }

    return (
        <header>
            <div className="row">
                <div className="top-bar">
                    <a className={`menu-toggle${isClicked ? ".is-clicked":""}`} onClick={toggleButton} href="#">
                        <span> Menu </span>
                    </a>
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current">
                                <a className="smoothscroll" href="#intro" title="" onClick={togglenav}>
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about" title="" onClick={togglenav}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio" title="" onClick={togglenav}>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume" title="" onClick={togglenav}>
                                    Academics
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#utility" title="" onClick={togglenav}>
                                    Utility
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact" title="" onClick={togglenav}>
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
