import React, { useState } from 'react';
import './Crud.css';
import Crear from './Crear.js';
import Listar from './Listar.js';
import Borrar from './Borrar.js';
const iniciales = [
  { text: "Hacer crud", done: true },
  { text: "personalizar crud", done: false }
];


const Crud = () => {
  const [elems, setElems] = useState(iniciales);

  return (
    <div className="Crud">
      <h1>CRUD</h1>
      <Crear onNewElem={elem => setElems([elem, ...elems])} />
      <Listar elems={elems} onElemChange={ elem => setElems(elem)}/>
      <Borrar elems= {elems} onDeleteElems={elem => setElems(elem)}/>
    </div>
  )
};

export default Crud;
