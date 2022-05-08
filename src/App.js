import React, { useState, useEffect } from 'react' //Estado y efect
import "bootstrap/dist/css/bootstrap.min.css"; //css bootstrap
import "bootstrap/dist/js/bootstrap"; //Js de Bootstrap
import Cards from "./components/Cards/Cards"; //Componente Cards
import Filter from "./components/Filters/Filter"; //Componente Filter
import Pagination from './components/Pagination/Pagination'; //Componente Pagination
import Search from './components/Search/Search'; //Componente Search
import Navbar from './components/Navbar/Navbar'; //Componente NavBar

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //Enrutamiento
import Episodes from './Pages/Episodes' //Página Episodes
import Filters from './Pages/Filters' //Página Filters
import Location from './Pages/Location' //Página Location
import CardDetails from './components/Cards/CardDetails';

function App() { 

  return(
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<CardDetails />}></Route>

        <Route path='/filters' element={<Filters />}></Route>
        <Route path='/filters/:id' element={<CardDetails />}></Route>

        <Route path='/episodes' element={<Episodes />}></Route>
        <Route path='/episodes/:id' element={<CardDetails />}></Route>

        <Route path='/location' element={<Location />}></Route>
        <Route path='/location/:id' element={<CardDetails/>}></Route>
      </Routes>
    </Router>
  )
 }

const Home = ()  => {

  //Estado para actualizar la página "Prev" y "Next"
  const [pageNumber, setPageNumber] = useState(1);

  //Estado para buscar mediante el atributo name
  const [search, setSearch] = useState("")

  //Estado que recibe y actualiza los datos traidos de la API
  const [newData , setNewData] = useState([]); 

  //Destructuración del objeto newData
  const {info, results} = newData; 

  //Guardamos la API
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  //Renderiza la página cada vez que la API se actualice
  useEffect(() => {
    (async function () { 
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json())  //Devolvemos la respuesta que recibimos en formato Json
        setNewData(data) //Guardamos esa respuesta en setNewData
     })();
  },[API]);

  return (
    <div className="App">
      {/* Título */}
      <h1 className="text-center my-4 fw-bold">Rick and Morty <span>API</span></h1>
      {/* Buscador */}
      <Search 
        setSearch={setSearch}
        setPageNumber={setPageNumber}
      />
      {/* Contenedor del filtro y las cards */}
      <div className="container"> 
        <div className="row">
          <div className="col-12 mt-1">
            <div className="row mt-4">
              <Cards 
                results={results}
                page="/"  
              />
            </div>
          </div>
        </div>
      </div>
      {/* Paginación */}
      <Pagination 
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
    </div>
  );
}

export default App;
