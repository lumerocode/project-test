import React from 'react'
import FilterBtn from '../FilterBtn' //Importamos el componente FilterBtn

const Status = ({setStatus, setPageNumber}) => {
/*
 {setStatus} ===> Traemos esta constante de App.js mediante Filter.js para pasarlo a FilterBtn.js
  {setPageNumber} ===> Traemos esta constante de App.js mediante Filter.js para pasarlo a FilterBtn.js
*/

  //Creamos un array con los tipos de estado
  let status = ["Alive", "Dead", "Unknown"]

  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button 
          className="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseThree" 
          aria-expanded="false" 
          aria-controls="collapseThree">
            Status
        </button>
        </h2>
        <div 
          id="collapseThree" 
          className="accordion-collapse collapse" 
          aria-labelledby="headingThree" 
          data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap justify-content-start">
          {
            //Recorremos cada elemento del array que creamos y pasamos mediante props: index, status y item
            status.map((item, index) => (
              <FilterBtn 
                key={index}
                name="status"
                index={index}
                item={item}
                setPageNumber={setPageNumber}
                tags={setStatus}
                />
            )
          )} 
        </div>
        </div>
    </div>
  )
}

export default Status