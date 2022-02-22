import React, { useRef }from "react";
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_5tng87g', 'template_pngcg0e', form.current, 'user_iSQ9Nwz2r4GQ3fCAHli4Z')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    }

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