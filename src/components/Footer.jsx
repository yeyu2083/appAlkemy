import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer()  {
   return(
    <div className='container mt-5 mx-auto col-md-6 mx-auto text-center"'>
     <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">&copy; 2023 Mi sitio web con Alkemy</p>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="mx-2">Términos y condiciones</p>
            <p className="mx-2">Política de privacidad</p>
          </div>
        </div>
      </div>
    </footer>
       </div>
  ) 
}

export default  Footer ;