import React from 'react'
import Gender from './Category/Gender' //Importamos el componente Gender
import Species from './Category/Species' //Importamos el componente Species
import Status from './Category/Status' //Importamos el componente Status
import scss from './Filter.module.scss' //Importamos los estilos scss 

const Filter = ({setGender, setSpecies, setStatus, setPageNumber}) => {
/*
  {setGender} ===> Traemos esta constante de App.js para pasarlo a Gender.js
  {setSpecies} ===> Traemos esta constante de App.js para pasarlo a Species.js
  {setStatus} ===> Traemos esta constante de App.js para pasarlo a Statuss.js
  {setPageNumber} ===> Traemos esta constante de App.js para pasarlo a Statuss.js
*/

//Actualizamos todo los props que hemos traido
const handleClear = () => {
  setGender("");
  setSpecies("");
  setStatus("");
  setPageNumber("");
  window.location.reload(false); //Refresh
}

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fw-bold fs-4 mb-2'>
        Filter
      </div>
      <div className='d-flex justify-content-center mb-3'>
        <button 
          onClick={handleClear}
          className={scss.btn_reset}>
            Reset Filters
        </button>
      </div>
      <div className="accordion open" id="accordionExample">
        <Gender 
          setGender={setGender}
          setPageNumber={setPageNumber}/>

        <Species 
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}/>

        <Status 
          setStatus={setStatus}
          setPageNumber={setPageNumber}/>
      </div>
    </div>
  )
}

export default Filter