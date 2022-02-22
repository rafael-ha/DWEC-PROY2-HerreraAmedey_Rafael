import React from "react";
export default Borrar;

function Borrar({ elems, onDeleteElems }) {
    return (
        <div>
            <button className='crud-clear' type="button"
                onClick={
                    (e) =>{
                        const actualizaElems = [...elems];
                        onDeleteElems(actualizaElems.filter(elem => elem.done !== true));
                    }
                }
            >Borrar hechos</button>
        </div>
    )
}