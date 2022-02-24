import React, { useRef } from "react";
import $ from 'jquery'

const Contacto = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const sLoader = $('#submit-loader');
        const data = {
            service_id: 'service_5tng87g',
            template_id: 'template_pngcg0e',
            user_id: 'user_iSQ9Nwz2r4GQ3fCAHli4Z',
        };
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((result) => {
                sLoader.fadeIn();
                if (result.text === 'OK') {
                    sLoader.fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                // There was an error
                else {
                    sLoader.fadeOut();
                    $('#message-warning').html(result.text);
                    $('#message-warning').fadeIn();
                }
            }, (error) => {
                sLoader.fadeOut();
                $('#message-warning').html("Algo fue mal, intentalo de nuevo más tarde.");
                $('#message-warning').fadeIn();
                console.log(error.text);

            });
    };

    return (
        <section id="contact">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Contacto</h5>
                    <h1>¡Contáctame!</h1>
                </div>
            </div>
            <div className="row contact-form">
                <div className="col-twelve">
                    <form name="contactForm" id="contactForm" ref={form} onSubmit={sendEmail}>
                        <fieldset>
                            <div className="form-field">
                                <input
                                    name="contactName"
                                    type="text"
                                    id="contactName"
                                    placeholder="Nombre"
                                    defaultValue=""
                                    minLength={2}
                                    required=""
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    name="contactEmail"
                                    type="email"
                                    id="contactEmail"
                                    placeholder="Email"
                                    defaultValue=""
                                    required=""
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    name="contactSubject"
                                    type="text"
                                    id="contactSubject"
                                    placeholder="Asunto"
                                    defaultValue=""
                                />
                            </div>
                            <div className="form-field">
                                <textarea
                                    name="contactMessage"
                                    id="contactMessage"
                                    placeholder="Mensaje"
                                    rows={10}
                                    cols={50}
                                    required=""
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-field">
                                <button className="submitform" type="submit">Enviar</button>
                                <div id="submit-loader">
                                    <div className="text-loader">Enviando...</div>
                                    <div className="s-loader">
                                        <div className="bounce1" />
                                        <div className="bounce2" />
                                        <div className="bounce3" />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <div id="message-warning">Algo fue mal.. Intentelo de nuevo.</div>
                    <div id="message-success">
                        <i className="fa fa-check" />
                        Tu mensaje ha sido enviado correctamente.
                        <br />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto;