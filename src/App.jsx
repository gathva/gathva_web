import React, { useState } from 'react';
import { Post } from './components/post/Post';
import {NavbarMenu} from './components/NavbarMenu'
import './App.css';

function App() {

  const [postList, getPostList] = useState([]);

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-5'>

          <div className="container avatar">
            <img className='imagen_avatar' src={require('./images/george.png')} alt='mi imagen' />
            <div className='container nombre_avatar'>
              <h4>George Thompson</h4>
              <h6 className='titulo'>Web Developer</h6>

            </div>
          </div>
        </div>
        <div className='col '>
          <div className="container descripcion">
            <h1>descripcion personal</h1>
          </div>
        </div>
      </div>

      <div className='row'>
      <NavbarMenu />

      </div>

      <div className='row '>

        <div className='col contenido justify-content-center d-flex flex-wrap'>
          <Post />
          <Post />

          <h1>contenido</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col pie'>
          <h1>pie de pagina</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
