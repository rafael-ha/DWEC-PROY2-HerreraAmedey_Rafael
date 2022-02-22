import React, { useState } from "react";

const Listar = ({ elems, onElemChange }) => {
    const [newElemText, setNewElemText] = useState("");
    const [mostrar, setMostrar] = useState(true);
    const toggle = () => {
        setMostrar(!mostrar);
    }
    const [posicion,setPosicion] = useState(null);
    return (
        <ul className='crud-list'>
            {elems.map(({ text, done }, i) => (
                <li className={`crud-list__item ${done ? "crud-list__item--done" : ""}`}>
                    <label htmlFor={`e${i}`}>
                        <input id={`e${i}`} type="checkbox" checked={done}
                            onChange={
                                (e) => {
                                    const actualizaElems = [...elems];
                                    actualizaElems[i].done = e.target.checked;
                                    onElemChange(actualizaElems);
                                }
                            }
                        />
                        {text}
                    </label>

                    <input id={`e${i}`} type="button" value="Actualizar" onClick={
                        () =>{
                            toggle();
                            setPosicion(i);
                        }
                    } />
                    <input type="button" value="Borrar" onClick={
                        () => {
                            const actualizaElems = [...elems];
                            actualizaElems.splice(i, 1);
                            onElemChange(actualizaElems);
                        }
                    }>
                    </input>
                </li>
            ))}
            <input className={mostrar ? "mostrar" : null} type="text" placeholder='Introduce la nueva tarea'
                value={newElemText}
                onChange={e => setNewElemText(e.target.value)}
                onKeyUp={
                    (e) => {
                        if (e.key === 'Enter' && newElemText.length) {
                            const actualizaElems = [...elems];
                            actualizaElems[posicion].text = e.target.value;
                            setNewElemText("");
                            onElemChange(actualizaElems);
                            toggle();
                        }
                    }
                } />
        </ul>
    )
}

export default Listar;