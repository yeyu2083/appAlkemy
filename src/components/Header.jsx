import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './Buscador';

function Header() {
   return(
     

    
           <nav className="navbar navbar-expand-lg bg-light">
         <ul  className="nav nav-pills card-header-pills col-md-6 mb-3 flex-row justify-content-start">
                   <li className="nav-item">
                       <Link to="/" className="nav-link active mr-3" aria-current="page">Home</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/listado" className="nav-link active mr-3" aria-current="page">Listado</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/favoritos" className="nav-link active mr-3" aria-current="page">Favoritos</Link>
                   </li>
               </ul>
          <Buscador />
           </nav>
    
  ) 
}

export default Header; 