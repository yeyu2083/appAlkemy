import { React, useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swalert from '@sweetalert/with-react';



function  Listado (props) {

  const {addOrRemoveFrontFavs} = props;
   let token = sessionStorage.getItem('token');

   const [movieList, setMovieList] = useState([])

   useEffect(() => {
      const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=93940fab9365f3046f2f69e8c89c1534&language=es-ES&page=1"
      axios.get(endPoint) 
      .then(response => {
        const apiData= response.data.results;
        setMovieList(apiData)
      })
      .catch(error => {
        swalert(<h2>No sè que falla, intenta màs tarde..</h2>);
      })
   }, [setMovieList]);


   
       

  
    return (
        <> 
        { !token &&  <Link to='/'><Login /></Link>}

        <div className='row'>
           {
           movieList.map((oneMovie, idx) => {
            return (
                <div className='col-3' key={idx}>
                 
                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className='card-img-top' alt=''/>
                  <button className='favourite-btn'onClick={addOrRemoveFrontFavs} data-movie-id={oneMovie.id}>
                  🖤
                  </button>
                    <div className="card-body">
                        <h5 className="card-title">{oneMovie.title}</h5>
                         <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
                         <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View Review</Link>
               
                  </div> 
               </div>
            </div>
            )
           }
          ) } 


        </div>
        </>
    )
}

export default  Listado; 