import React from 'react'
import { Link } from "react-router-dom" //Importamos Link para hacer un hipervínculo hacia otra página del sitio web
import scss from './Cards.module.scss' //Importamos los estilos scss

const Cards = ({results, page}) => {
  /*
  {results} ===> Traemos esta constante de App.js para saber todo lo relacionado a cada personaje
  {page} ===> Traemos esta constante de App.js para concatenarla con el ID de acuerdo al personaje que se selccione
  */

  //Creamos una variable para guardar todo lo que iremos iterando
  let showCard;

  //Condicional que indica que si hay alguna data en "results" se puede entrar a la condicional para luego iterarl
  if(results){

    //Iterando y renderizando cada Card
    showCard = results.map((item) => {
        //Destructuramos results que contiene las Key y los valores de cada personaje
        let {id, name, species, image, gender, status, location} = item;
        return (

            //Estructura de las cards
            <Link 
                style={{textDecoration: "none", color: "#263238"}}
                to={`${page}${id}`} //Hacia donde va dirigido el card que se selecciona, por ejemplo: /1 --> Al personaje con id 1
                key = {id} 
                className='col-lg-3 col-md-6 col-12 mb-4 position-relative'>
                <div className={`${scss.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt={`imagen - ${name}`} className={`${scss.img} img-fluid`}/>
                    <section className={`${scss.section} content`}>
                        <div className={`${scss.points} fs-5 fw-bold mb-3 text-center`}>{name}</div>
                        <div className='fs-6'>
                            <div className='d-flex'>
                                <p className='fw-bold'>Specie:</p>
                                <p className={`${scss.points} ms-2`}>{species}</p>
                            </div>
                            <div className='d-flex'>
                                <p className='fw-bold'>Gender:</p>
                                <p className='ms-2'>{gender}</p>
                            </div>
                            <p className='fw-bold mb-0'>Location:</p>
                            <p className={scss.points}>{location.name}</p>     
                        </div>
                    </section>  
                </div>

                {
                    //Condicional para saber que personaje tiene el status: "Alive", "Dead" or "Known"
                    (() => {
                        if(status === "Alive"){
                            return(
                                <div className={`${scss.badge} position-absolute badge bg-success`}>
                                    {status}
                                </div>  
                            )
                        }else if(status === "Dead") {
                            return(
                                <div className={`${scss.badge} position-absolute badge bg-danger`}>
                                    {status}
                                </div>  
                            )
                        }else {
                            return(
                                <div className={`${scss.badge} position-absolute badge bg-secondary`}>
                                    {status}
                                </div>  
                            )
                        }
                    })()
                }

            </Link>
        );
    });
  } else {
      showCard = "No found"
  }

  return (
  <> 
    {/* Mostramos la variable */}
    {showCard} 
  </>
  )
  
}

export default Cards