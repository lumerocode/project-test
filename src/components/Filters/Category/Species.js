import React from 'react'
import FilterBtn from '../FilterBtn' //Importamos el componente FilterBtn

const Species = ({setSpecies, setPageNumber}) => {

  //Creamos un array con todos los tipos de especies
  let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal","Disease","Robot","Cronenberg","Planet"];

  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button 
          className="accordion-button collapsed" 
          type="button" data-bs-toggle="collapse"
           data-bs-target="#collapseTwo" 
           aria-expanded="false" 
           aria-controls="collapseTwo">
            Species
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap justify-content-start">
              {
              //Recorremos cada elemento del array que creamos y pasamos mediante props: index, status y item
              species.map((item, index) => (
                <FilterBtn 
                  key={index}
                  name="species"
                  index={index}
                  item={item}
                  setPageNumber={setPageNumber}
                  tags={setSpecies}
                  />
              )
            )} 
          </div>
        </div>
</div>
  )
}

export default Species