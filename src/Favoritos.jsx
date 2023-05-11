import { Link } from "react-router-dom";
import swalert from '@sweetalert/with-react';

function Favoritos (props) {
   
  let token = sessionStorage.getItem('token');

    if (!token) {
        return (
            swalert(<h5>Debe iniciar sesión para acceder a esta página</h5>)
        ).then(() => {
          window.location.href = "/";
      });
      return null;
    }


    return (
    <>
      
       
       <div className='row'>
           {
        props.favoritos.map((oneMovie, idx) => {
            return (
                <div className='col-3' key={idx}>
                 
                <div className="card">
                  <img src={oneMovie.imgURL} className='card-img-top' alt=''/>
                  <button className='favourite-btn'onClick={props.addOrRemoveFrontFavs} data-movie-id={oneMovie.id}>
                  {props.favoritos.some(movie => movie.id === oneMovie.id) ? '❤️' : '🖤'}
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

    </>)
}

export default Favoritos;