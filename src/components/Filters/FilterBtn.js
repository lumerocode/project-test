import React from 'react'

const FilterBtn = ({name, index, item, tags, setPageNumber}) => {
  /*
  {name} ===> Traemos esta propiedad de Gender.js, Species.js o Status.js para saber el nombre de cada elemento en el array correspondiente
  {index} ===> Traemos esta propiedad de Gender.js, Species.js o Status.js para saber el el indíce que ocupa este elemento en su array correspondiente
  {item} ===> Traemos cada elemento de Gender.js, Species.js o Status.js que se está iterando para luego mostrarlo en el body del acordeón
  {tags} ===> Traemos esta constante de App.js mediante Filter.js y Status.js para actualizar y hacer la búsqueda mediante el estatus de cada personaje
  {setPageNumber} ===> Traemos esta constante de App.js mediante Filter.js y Status.js para que al momento de hacer un filtro, actualicemos la página a la nro 1
  */

  //Función handlStatus
  const handleStatus = () => {
    setPageNumber(1); //Actualiza la página a 1, cada vez que se hace un filtro
    tags(item) //Actualizamos el estado "status", mediante setStatus que es llamado "tags", en este componente, lo que hará es filtrar por el estado
  }

  return (
  <>
    <div>
      <style jsx>
        {`
          .btn-outline-primary {
            color: #263238;
            border: 1px solid #263238;
            border-radius: 20px;
          }

          .btn-outline-primary:hover {
            color: #FF452B;
            background-color: #FFF;
            border: 2px solid #FF452B;
          }

          .change_checked:checked + label {
            background-color: #FF452B;
            color: #fff;
            border-color: #FF452B;
          }

          input[type="radio"]{
            display: none;
          }

          .accordion-button:focus {
            z-index: 3;
            border-color: #000;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
          }
        `}
      </style>
      <div className="form-check mb-2">
          <input 
              onClick={handleStatus} //Activará handleStatus que reiniciará la pagina en 1 y hará un filtro de acuerdo al tag que selecciono
              id={`${name}-${index}`} // Trae el name del array y lo concatena con el index del mismo --> genders-0 / species-1 / status-2
              className="form-check-input change_checked" 
              type="radio" 
              name={name} // Colocamos el tipo al que pertenece el los elementos del array, estos pueden ser gender, species o status
              />
          <label 
              className="btn btn-outline-primary" 
              htmlFor={`${name}-${index}`}> {/* Trae el name del array y lo concatena con el index del mismo --> genders-0 / species-1 / status-2 */}
                  {item}
          </label>
      </div>
    </div>
</>)
}

export default FilterBtn