import React, { useEffect, useState } from 'react' //Importamos los hoooks
import scss from './Pagination.module.scss' //Importamos los estilos scss
import ReactPaginate from 'react-paginate';


const Pagination = ({pageNumber, setPageNumber, info}) => {
    /*
    {pageNumber} ===> Traemos esta constante de App.js para saber en que estado actual se encuentra la numeración de la página
    {setPageNumber} ===> Traemos esta constante de App.js para actualizar la numeración de la página 
    {info} ===> Traemos la constante de App.js para saber la cantidad total de páginas 
    */

    //Estado para guardar y actualizar el width de la pantalla
    const [width, setWidth] = useState(window.innerWidth)

    //Aqui asignamos el valor del width de la pantalla a setWidth
    const updateDimen = () => {
      setWidth(window.innerWidth)
    }

    //Ejecuta la acción y elimina la misma cada vez que ampliamos o contraemos la cantalla o de acuerdo al screen 
    useEffect(() => {
      window.addEventListener("resize", updateDimen)
      return () => window.removeEventListener("resize", updateDimen)
    }, [])

    //Funcion handlePageChange
    const handleOnPageChange = (data) => {
       setPageNumber(data.selected + 1) //Trae la numeración de las páginas
    }

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      {/* Componente de React js para la paginación */}
      <ReactPaginate 
        className="pagination justify-content-center gap-0.5 my-5"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1} //Para anular la página seleccionada con prop principal
        nextLabel="Next" //Texto en el botón siguiente
        nextLinkClassName={`${scss.btn_page} mx-1 next`} //Estilos para el botón siguiente
        previousLabel="Prev" //Texto en el botón anterior
        previousLinkClassName={`${scss.btn_page} mx-1 prev`} //Estilos para el botón anterior
        pageLinkClassName={scss.page_link} //El nombre de la clase en la etiqueta de cada elemento de página
        activeLinkClassName={scss.page_active} //Paginador activo
        onPageChange={handleOnPageChange} //Método para llamar cuando se cambia una página. 
        pageCount={info?.pages} //Cantidad de páginas
        marginPagesDisplayed={width < 576 ? 3 : 5} //Mostrar cantidad de paginas
        pageRangeDisplayed={width < 576 ? 3 : 5}  //Mostrar máximo d páginas
      />
    </>
  )
}

export default Pagination