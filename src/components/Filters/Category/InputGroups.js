import React from 'react'

const inputGroups = ({total, name, setID}) => {
  /*
  {total} ===> Traemos este valor estático de Episodes.js para saber la cantidad exacta de episodios que se emitieron
  {name} ===> Traemos este valor estático de Episodes.js para mostrar el nombre del atributo
  {setID} ===> Traemos esta constante de Episodes.js para actualizar el episodio que vamos a renderizar
  */

  return (
    <div className="input-group mb-3">
        <select 
          onChange={(item) => setID(item.target.value)} //Actualiza el nro de episodio que se va a mostrar
          className="form-select" 
          id={name}>
            <option value="1" selected>Choose...</option>
            {
              [...Array(total).keys()].map(item => { //Recorre el total de episodios en un array
                return(
                  <option value={item + 1}>{name} - {item + 1}</option> //Muestra el Episodio(estático) - el nro de episodio
                )
              })
            }
        </select>
    </div>

  )
}

export default inputGroups