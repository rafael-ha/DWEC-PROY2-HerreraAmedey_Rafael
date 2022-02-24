import React from "react";

const About = () =>{
    return(
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About</h5>
                    <h1>Datos sobre mi.</h1>

                    <div className="intro-intro"/>
                </div>
            </div>
            <div className="row about-content">
                <div className="col-six tab-full">
                    <h3>Perfil</h3>
                    <p>Mas informacion</p>

                    <ul className="info-list">
                        <li>
                            <strong>Nombre:</strong>
                            <span>Rafael Herrera Amedey</span>
                        </li>
                        <li>
                            <strong>Fecha de nacimiento:</strong>
                            <span>18 de Julio de 1999</span>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>
                            <span>linkedin.com/in/rafael-herrera-amedey/</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <span>rherame1807@g.educaand.es</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;