import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swalert from '@sweetalert/with-react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

  

    const [movieResult, setMovieResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=93940fab9365f3046f2f69e8c89c1534&language=es-ES&query=${keyword}`;
        
        axios.get(endPoint) 
        .then(response => {
          const movieArray= response.data.results;

          if(movieArray.length === 0 ){
            swalert(<h5>Tu busqueda no arrojò resultados</h5>);
        }
          setMovieResults(movieArray)
        })
        .catch(error => {
          swalert(<h2>No sè que falla, intenta màs tarde..</h2>);
        })
     }, [keyword]);
  
    return(
        <>
        {!movieResult && <p className='spinner-border text-primary'>Cargando...</p>}
        <>
        <h2>Buscaste: <em>{keyword}</em></h2>
        {movieResult.length === 0 && <h3>No hay resultados</h3>}
             <div className='row'>
           {
           movieResult.map((oneMovie, idx) => {
            return (
                <div className='col-4' key={idx}>
                 
                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className='card-img-top' alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{oneMovie.title}</h5>
                         <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View Review</Link>
               
                  </div> 
               </div>
            </div>
            )
           }
          ) } 


        </div>
        </>
      </> 
    ) 
}

export default Resultados;