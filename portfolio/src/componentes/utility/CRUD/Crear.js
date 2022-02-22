import React, { useState } from "react";
export default Crear;

function Crear({ onNewElem }) {
    const [newElemText, setNewElemText] = useState("");
    return (
        <div>
            <fieldset className='crud-input'>
                <legend className='crud-input__label'>Nuevo elemento</legend>
                <input className='crud-input__input' placeholder='Introduzca el elemento'
                    value={newElemText}
                    onChange={e => setNewElemText(e.target.value)}
                    onKeyUp={
                        (e) => {
                            if (e.key === 'Enter' && newElemText.length) {
                                onNewElem({ done: false, text: newElemText });
                                setNewElemText("");
                            }
                        }
                    } />
            </fieldset>
        </div>
    )
}