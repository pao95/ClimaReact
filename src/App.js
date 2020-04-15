import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {


  const[busqueda, guardarBusqueda] = useState({

    ciudad: '',
    pais:'',

}) 

const [consultar, guardarConsultar] = useState(false)
const[ resultado, guardarResultado]= useState({})
const {ciudad, pais} = busqueda;


useEffect(() =>{


    const consultarApi = async ()=>{

      if(consultar){

      const apiId= 'a74a656cf116731918f8167041a409d6';
      const url =`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
 
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
guardarResultado(resultado);
guardarConsultar(false)
    }
    
  }


consultarApi();
},[consultar])



  return (
    <Fragment>
      <Header titulo="Clima React App">
      </Header>
     
     <div className="container">
        <div className="row">
          <div className="col-12">
            <Formulario busqueda={busqueda} 
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
            ></Formulario>
           </div>
           
          <div className="col-12">
          <Clima resultado={resultado}></Clima>
        </div>
        </div>
        </div>
    </Fragment>
  );
}

export default App;
