import React from 'react';

const Clima = ({resultado}) => {

    //extraer valores

    const{name, main} = resultado;

    if(!name) return null;
    const kelvin =273.15;
    return (

            <div className="clima">
                    <h4>El clima en {name} es</h4>
                     <p>{parseFloat(main.temp -kelvin,10).toFixed(0)}° </p>
            </div>

      );
}
 
export default Clima;