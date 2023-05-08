import  {Routes, Route , BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Listado from './components/Listado';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
  setLoggedIn(true)
  };

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>

    <Route exact path='/' element={<Login onLogin={handleLogin}/>}/>
    {loggedIn && <Route path='/listado' element={<Listado />}/> }
     
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
