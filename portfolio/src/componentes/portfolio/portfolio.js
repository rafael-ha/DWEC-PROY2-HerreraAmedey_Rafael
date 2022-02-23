import React from "react";
const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Portfolio</h5>
                    <h1>Algunos de mis trabajos.</h1>
                    <p className="lead">Proyectos realizados.</p>
                    <a href="https://github.com/rafael-ha/DWEC-PROY1-Herrera_Amedey_Rafael">
                        <img src="https://gh-card.dev/repos/rafael-ha/DWEC-PROY1-Herrera_Amedey_Rafael.svg?fullname=" alt=""/>
                    </a>
                    <hr />
                    <a href="https://github.com/rafael-ha/Proyecto_LandingPage">
                        <img src="https://gh-card.dev/repos/rafael-ha/Proyecto_LandingPage.svg?fullname=" alt=""/>

                    </a>
                    <hr />
                    <a href="https://github.com/rafael-ha/laravel">
                        <img src="https://gh-card.dev/repos/rafael-ha/laravel.svg?fullname=" alt=""/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;