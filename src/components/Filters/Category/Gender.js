import React from 'react'
import FilterBtn from '../FilterBtn' //Importamos el componente FilterBtn

const Gender = ({setGender, setPageNumber}) => {
/*
  {setGender} ===> Traemos esta constante de App.js mediante Filter.js para pasarlo a FilterBtn.js
  {setPageNumber} ===> Traemos esta constante de App.js mediante Filter.js para pasarlo a FilterBtn.js
*/

  //Creamo una variable con todos las posibles opciones que tiene el atributo Género
  let genders = ["Female", "Male", "Genderless", "Unknown"];

  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button 
          className="accordion-button" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseOne" 
          aria-expanded="true" 
          aria-controls="collapseOne">
            Genders
        </button>
        </h2>
        <div id="collapseOne" 
          className="accordion-collapse collapse show" 
          aria-labelledby="headingOne" 
          data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap justify-content-start">
            {
              //Recorremos cada elemento del array que creamos y pasamos mediante props: index, gender y item
              genders.map((item, index) => (
                <FilterBtn 
                  key={index}
                  name="genders"
                  index={index}
                  item={item}
                  setPageNumber={setPageNumber}
                  tags={setGender}
                  />
              )
            )}
          </div>
        </div>
    </div>

  )
}

export default Gender