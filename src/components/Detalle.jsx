import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import swalert from '@sweetalert/with-react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Detalle(){
    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movie, setMovie] = useState(null)

   useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=93940fab9365f3046f2f69e8c89c1534&language=es-Es&page=1`
        axios.get(endPoint)
        .then(response => {
            const movieData = response.data;
           setMovie(movieData);
        })
        .catch(error => {
            swalert(<h2>Ha sucedido un error...intenta màs tarde..</h2>);
          })
   },[movieID]);


   return(
    <>
       { !token &&  <Link to='/'><Login /></Link>}
       {!movie && <p className='spinner-border text-primary'>Cargando...</p>}
       {movie && 
              <>
       
            <div className="row">
            <div className="col-4 mt-5">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='card-img-top' alt='movieposter'/>

            </div>
            <div className="col-8 mt-5">
            <h3>Detalle de la pelicula</h3>
                <h5>`Titulo: {movie.title}`</h5>
                <h5>`Fecha de estreno: {movie.release_date}`</h5>
                <h5>Reseña:</h5>
                <p> {movie.overview}
                </p>
                <h4>Popularidad: {movie.vote_average}</h4>
                <h5>Gènero:</h5>
                <ul className="list-group">
                    { movie.genres.map(oneGenre => <li className='list-group-item' key={oneGenre.id}>{oneGenre.name}</li>)}
                
                </ul>

            </div>
            </div> 
       
              </>
       
       }
        
        </>
  ) 
}

export default Detalle;