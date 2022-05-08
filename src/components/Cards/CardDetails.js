import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //Importamos useParamns para acceder a los parámetros de la ruta actual
import scss from './Cards.module.scss' //Importamos estilos scss

const CardDetails = () => {

  //Guardamos el ID del parámetro en cuestión
  const {id} = useParams() 

  //Estado que recibe y actualiza los datos traidos de la API
  const [newData , setNewData] = useState([]); 

  //Destructuación del Objeto NewData
  const {name, species, image, gender, status, location, episode, origin, type} = newData;

  //Constante API
  const API = `https://rickandmortyapi.com/api/character/${id}`

  //Renderiza la página cada vez que la API se actualice
  useEffect(() => {
    (async function () { 
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json())  //Devolvemos la respuesta que recibimos en formato Json
        setNewData(data) //Guardamos esa respuesta en setNewData
     })();
  },[API]);


  return (
    <div className='container text-center my-3'>
      <h1>{name}</h1>
      <div className="container d-flex justify-content-center my-3">
        <div className={`${scss.card_detail} d-flex flex-column gap-1`}>
          <img src={image} alt={`imagen - ${name}`} className={`${scss.img} img-fluid`}/>  
          {
            //Condicional para saber que personaje tiene el status: "Alive", "Dead" or "Known"
            (() => {
                if(status === "Alive"){
                    return(
                        <div className="badge bg-success fs-5 p-2">
                            {status}
                        </div>  
                    )
                }else if(status === "Dead") {
                    return(
                        <div className="badge bg-danger fs-5 p-2">
                            {status}
                        </div>  
                    )
                }else {
                    return(
                        <div className="badge bg-secondary fs-5 p-2">
                            {status}
                        </div>  
                    )
                }
            })()
          }
          <div className='text-start p-2'>
            <div className='mt-2'>
              <span className='fw-bold me-2'>Specie : </span>
              {species}
            </div>
            <div className=''>
              <span className='fw-bold me-2'>Gender :</span>
              {gender}
            </div>
            <div className=''>
              <span className='fw-bold me-2'>Type :</span>
              {type === "" ? "Unknown" : type}
            </div>
            <div className=''>
              <span className='fw-bold me-2'>Location :</span>
              <span className={scss.points}>{location?.name}</span>
            </div>
            <div className=''>
              <span className='fw-bold me-2'>Originn :</span>
              <span className={scss.points}>{origin?.name}</span>
            </div>
            <div className=''>
              <span className='fw-bold me-2'>Episodes :</span>
              {episode?.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails