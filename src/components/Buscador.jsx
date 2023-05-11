import React from 'react';
import swalert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';




function Buscador() {
    


    const navigate = useNavigate();
    let token = sessionStorage.getItem('token');


    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if (!token) {
            swalert(<h5>Debe iniciar sesión para acceder a esta página</h5>)
            navigate('/');
            return;
        }


        if(keyword.length === 0 ){
            swalert(<h5>Escribe la palabra clave..</h5>)
        } else if(keyword.length < 4) {
            swalert(<h5>Escribe màs de 5 caràcteres</h5>)
        } else {
            e.currentTarget.keyword.value= '';
           navigate(`/resultados?keyword=${keyword}`);
        }
    }
    
   return(
    <>
   
    
    <form className='d-flex align-items-center'onSubmit={submitHandler}>
        
    <label htmlFor="keyword" className='form-label mb-0 mx-2'>  </label>
    <input className="form-control"type="text" id="keyword" name="keyword" placeholder='Escriba su palabra clave...' />

    <button className="btn btn-info" type="submit" >Buscar
    </button>
   
   
 </form>
 
</>
);
}

  
  export default Buscador;