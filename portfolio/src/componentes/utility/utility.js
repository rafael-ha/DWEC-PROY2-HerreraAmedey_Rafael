import React from "react";
import Crud from "./CRUD/Crud";

const Utility = () =>{
    return(
    <section id="utility">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Utility</h5>
                    <h1>Utilidades realizadas por mi.</h1>
                    <p className="lead">CRUD</p>
                    <Crud/>
                </div>
            </div>
        </section>
    )
}

export default Utility;