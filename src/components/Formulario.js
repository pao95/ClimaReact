import React, { useState } from 'react';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {




const[error, guardarError] =useState(false)

const {ciudad, pais} = busqueda


const handleChange = e =>{
    //actualizar state
    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value,
    });
}

const handleSubmit = e =>{
    e.preventDefault();

    if(ciudad.trim() === '' || pais.trim() ===''){
        guardarError(true);
        return;
    }

    guardarError(false);
    guardarConsultar(true);

}
    return (

        <form className="formulario" 
        onSubmit={handleSubmit}>

            {error ? 
            <div class="alert alert-danger" role="alert">
            Todos los campos son obligatorios
          </div>
            : null}
            <div className="form-group ">
                <label >Ciudad</label>

                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                    
                    placeholder="Nombre Ciudad"
                    className="form-control " />

         

            </div>
            <div className="form-group ">
                <label >Pais</label>
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                    className="form-control form-control">
                    <option value="">Seleccione un pais</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Mexico">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="España">España</option>
                    <option value="Peru">Perú</option>
                </select>
            </div>
            <button className="btn btn-uva" type="submit">Consultar Clima</button>

        </form>
    );
}

export default Formulario;