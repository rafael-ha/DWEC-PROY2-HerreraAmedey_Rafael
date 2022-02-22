import React from "react";

const info = () => {
    return (
        <section id="intro">
            <div className="intro-overlay"></div>
            <div className="intro-content">
                <div className="row">
                    <div className="col-twelve">
                        <h5>Mi portfolio</h5>
                        <h1>Rafael Herrera Amedey</h1>
                        <a className="button stroke smoothscroll" href="#about" title="">Más sobre mi</a>
                    </div>
                </div>
            </div>
            <ul className="intro-social">
                <li>
                    <a href="https://www.linkedin.com/in/rafael-herrera-amedey/">
                        <i className="fa fa-linkedin" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com">
                        <i className="fa fa-twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rafael-ha">
                        <i className="fa fa-github" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com">
                        <i className="fa fa-instagram" />
                    </a>
                </li>
            </ul>
        </section>
    )
}
export default info;