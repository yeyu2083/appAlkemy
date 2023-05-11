import  {Routes, Route , BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Listado from './components/Listado';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './Resultados';
import Favoritos from './Favoritos';



function App() {
   
  const [loggedIn, setLoggedIn] = useState(false);
  const  [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
      const favsLocal = localStorage.getItem('favs');

      if(favsLocal !== null) {
          const favsArray = JSON.parse(favsLocal);
        setFavoritos(favsArray);
      }
  },[])
  

  const addOrRemoveFrontFavs = e => {
  const favMovies = localStorage.getItem('favs');
  let favArray;

  if(favMovies === null) {
    favArray = [];
  } else {
    favArray = JSON.parse(favMovies);
  }
 
  
  // boton q guarda la pelicula a favoritos: en un objeto
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview, 
      id: btn.dataset.movieId
    }
    //preguntamos si esta la pelicula
    let movieInArray = favArray.find(oneMovie => {
      return oneMovie.id === movieData.id
    });
    if(!movieInArray) {

      //  y la subimos a favoritos
      favArray.push(movieData);
      localStorage.setItem('favs', JSON.stringify(favArray));
      setFavoritos(favArray);
      console.log("se agrego la pelicula");
    } else {
      //la eliminamos
      let moviesOut = favArray.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesOut));
      setFavoritos(moviesOut);
      console.log("Se elimino la pelicula");


    }

    console.log(favArray);

  }
  


  const handleLogin = () => {
  setLoggedIn(true)
  };

  return (
    <>
    <BrowserRouter>
   
    <Header />
    <Routes>

    <Route exact path='/' element={<Login onLogin={handleLogin}/>}/>
    {loggedIn && <Route path='/listado' element={ <Listado addOrRemoveFrontFavs={addOrRemoveFrontFavs} />}/> }
     <Route path='/detalle' element={<Detalle />}/>
     <Route path='/resultados' element={<Resultados  />}/>
     <Route path='/favoritos' element={<Favoritos favoritos={favoritos} addOrRemoveFrontFavs={addOrRemoveFrontFavs}/>}/>

    </Routes>
    <Footer />
    
    </BrowserRouter>
    </>
  )
}

export default App
