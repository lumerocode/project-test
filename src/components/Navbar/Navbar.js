import React from "react";
import houmLogo from '../../assets/img/houmLogo.svg' //Importamos el Logo desde la carpeta assets
import { NavLink, Link } from "react-router-dom"; //Importamos navlink y link para la navegacion interna entre páginas
import "../../App.scss"; //Importamos los estilos scss
import scss from './Navbar.module.scss' //Importamos los estilos de scss

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/">
            <img src={houmLogo}></img>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center me-2"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              activeclassName="active"
              className="nav-link"
              to="/location">
              Location
            </NavLink>
            <NavLink
              to="/filters" className={`${scss.filter_navlink} nav-link`}>
              Filter
            </NavLink>
          </div>
        </div>
        <NavLink to="/filters" className={scss.btn_filter_nav}>
          Filter
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;