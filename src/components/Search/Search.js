import React from 'react'
import scss from './Search.module.scss' //Importamos los estilos scss

const Search = ({setSearch, setPageNumber}) => {
  /*
    {setSearch} ===> Traemos esta constante de App.js para actualizar el valor de "search" y hacer la búsqueda en el input
    {setPageNumber} ===> Traemos esta constante de App.js para devolver la paginación a 1
  */
    
  //Función handleChange
  const handleChange = (e) => {
    setPageNumber(1); //Devuelve la paginación a 1
    setSearch(e.target.value); //Actualiza el estado de vacío(""), a el valor ingresado en el input
  }

  //Función handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-2'>
      <input
          type='text'
          className={scss.input}
          placeholder='Search Name...'
          onChange={handleChange}>
        </input>
        <button
          className={`${scss.btn_search}`}
          onClick={handleSubmit}>
            Search 
        </button>
    </form>

  )
}

export default Search