import React, { useEffect, useState } from 'react'
import CardsToFilter from '../components/Cards/CardsToFilter'; //Importamos el componente CardsToFilter
import InputGroups from '../components/Filters/Category/InputGroups' //Importamos el componente InputGroups


const Episodes = () => {

  //Estado para filtrar por id del episodio
  const[id, setID] =useState(1);
   //Estado que recibe y actualiza los datos traidos de la API
  const [info, setInfo] = useState([]);
  //Estado para actualizar los datos que se guardarán dependiendo del id 
  const [results, setResults] = useState([]);
  //Destructuración del objeto info
  const {air_date, name} = info;
  //Guardamos la API
  const API = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function () {
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json()) //Devolvemos la respuesta que recibimos en formato Json
        setInfo(data) //Guardamos esa respuesta en setInfo

        const x = await Promise.all( //Devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito
          data.characters.map((item) => { //Iteracón
            return fetch(item)
              .then((res) => res.json());//Devolvemos la respuesta que recibimos en formato Json
          })
        )
        setResults(x) //Guardamos esa respuesta en setResults
    })()
  }, [API])

  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center my-3'>
          Episode : {" "}
          <span className="text-primary">
             {name === "" ? "Unknown" : name} {/* // Si el nombre del episodio que buscamos está vacío pintamos un Unknow, de lo contrario se pinta el "name" */}
          </span> 
        </h1>
        <h4 className='text-center'>
          Air Date {air_date === "" ? "Unknown" : air_date} {/* // Si la fecha del episodio que buscamos está vacío pintamos un Unknow, de lo contrario se pinta la fecha dada*/}
        </h4>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>
          Choose an Episode
          </h4>
          <InputGroups 
            name="Episode"
            setID={setID}
            total={51}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <CardsToFilter 
              results={results}
              page="/episodes/"
            /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes