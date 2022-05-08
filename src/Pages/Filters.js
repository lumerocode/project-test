import React, { useEffect, useState } from 'react' //Importamos los hooks
import CardsToFilter from '../components/Cards/CardsToFilter'; //Importamos el componente CardsToFilter
import Filter from '../components/Filters/Filter'; //Importamos el componente Filter
import Pagination from '../components/Pagination/Pagination'; //Importamos el componente Pagination


const Filters = () => {

  //Estado para actualizar la página "Prev" y "Next"
  const [pageNumber, setPageNumber] = useState(1);

  //Estado que recibe y actualiza los datos traidos de la API
  const [newData , setNewData] = useState([]); 

  //Destructuración del objeto newData
  const {info, results} = newData; 

  //Estado para Filtrar por "gender"
  const [gender, setGender] = useState("")
  //Estado para Filtrar por "species"
  const[species, setSpecies] = useState("")
  //Estado para Filtrar por "status"
  const [status, setStatus] = useState("")

  //Guardamos la API
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`

  //Renderiza la página cada vez que la API se actualice
  useEffect(() => {
    (async function () { 
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json())  //Devolvemos la respuesta que recibimos en formato Json
        setNewData(data) //Guardamos esa respuesta en setNewData
      })();
  },[API]);

  return (
    <div className='container'>
      {/* Título */}
      <h1 className="text-center my-4 fw-bold">Rick and Morty <span>API</span></h1>
      {/* Contenedor del filtro y las cards */}
      <div className="container"> 
        <div className="row">
          <Filter 
            setGender={setGender}
            setSpecies={setSpecies}
            setStatus={setStatus}
            setPageNumber={setPageNumber}/>    
          <div className="col-lg-8 col-12">
            <div className="row">
              <CardsToFilter 
                results={results}
                page="/filters/"/>
            </div>
          </div>
        </div>
      </div>
      {/* Paginación */}
      <Pagination 
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}/>
    </div>
  )
}

export default Filters