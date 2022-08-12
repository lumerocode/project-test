import React from 'react'
import './cover.css'
import Imagen from '../../assets/imagen_cover.png'
import Row from '../../assets/row_cover.png'

const Cover = () => {
  return (
    <section className='cover'>
        <div className='cover__section'>
            <div className='cover__up'>
                <h1 className='cover__up--title'>Amazing furniture for <br></br>your home</h1>
                <p placeholder='Search your product' className='cover__up--text'>We think the chair is the most important piece of furniture in your home. Because if you love <br></br> the chair you are sitting in chances are you will love the rest of the room.</p>
                <img className='cover__up--row' src={Row}></img>
            </div>
            <div className='cover__center'>
                <a className='cover__up--search'>
                    Search your product
                    <span></span>
                </a>
            </div>
            <div className='cover__down'>
                <img src={Imagen}></img>
            </div>


        </div>
    </section>
  )
}

export default Cover