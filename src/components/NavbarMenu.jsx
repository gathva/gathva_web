import React from 'react'
import '../App.css';

export const NavbarMenu = () => {
  return (
    <nav className="rounded-pill px-3 sombra navbar navbar-dark bg-primary">

      <div className='d-flex align-items-start'>

        <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="www.google.cl">Menu</a>

      </div>

      <div className="offcanvas offcanvas-start bg-danger" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Mi menu en offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <a className="navbar-brand" href="http:google.cl">Menu</a>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="http:google.cl">Estudios y Certificados</a>
            </li>
          </ul>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="http:google.cl">Ejemplos de codigo</a>
            </li>
          </ul>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="http:google.cl">Proyectos realizados</a>
            </li>
          </ul>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="http:google.cl">Vida personal y Hobbies</a>
            </li>
          </ul>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="http:google.cl">Agregar un Post</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}


