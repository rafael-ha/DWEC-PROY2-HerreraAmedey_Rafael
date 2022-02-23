import React from 'react';

const Academics = () => {
    return (
        <section id="resume" className="grey-section">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Academics</h5>
                    <h1>Información académica.</h1>
                    <p className="lead">
                        Éstos son mis estudios y certificados realizados.
                    </p>
                </div>
            </div>

            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Educación</h2>
                </div>
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <div className="timeline-header">
                                <h3>IES Sancti Petri</h3>
                                <p>Julio de 2015 - Julio de 2017</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Bachillerato Tecnológico</h4>
                                <p>
                                    San Fernando, Cádiz.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>IES Pablo Ruiz Picasso</h3>
                                <p>2018 - 2020</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Grado en Administración de Sistemas Informáticos en Red</h4>
                                <p>
                                    Chiclana de la Frontera, Cádiz.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>IES Rafael Alberti</h3>
                                <p>2020 - 2022</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Grado en Desarrollo de Aplicaciones Web</h4>
                                <p>
                                    Cádiz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Certificados y Cursos</h2>
                </div>
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>Mikrotik</h3>
                                <p>Exp: 2019 - Venc: 2022</p>
                            </div>
                            <div className="timeline-content">
                                <h4>MTCNA</h4>
                                <p>
                                    ID de la credencial 1906NA5089.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>IES Pablo Ruiz Picasso</h3>
                                <p>2018</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Curso de prevención de riesgos laborales</h4>
                                <p>
                                    Chiclana de la Frontera, Cádiz.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>IES Rafael Alberti</h3>
                                <p>2018</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Título primeros auxilios.</h4>
                                <p>
                                    Chiclana de la Frontera, Cádiz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Academics;