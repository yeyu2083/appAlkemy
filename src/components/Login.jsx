import axios from 'axios';
import swalert from '@sweetalert/with-react';
import { Link } from 'react-router-dom';
import { useState  } from 'react';
import Listado from './Listado';




function Login( { onLogin } ) {
    const [loggedIn, setLoggedIn] = useState(false);


 

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ;



        if(email === '' || password === '' ){
            swalert(
                 <div>
                    <h2>Los campos no deben estar vacios</h2>
                 </div>
                )
           
            return;
        }
        if(email !== '' && !regexEmail.test(email)) {
          swalert( <h2> Debes escribir un correo vàlido</h2>);
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !=='react'){
          swalert( <h2> Credenciales invàlidas</h2>)  ;
            return
        }

        axios.post('http://challenge-react.alkemy.org/', { email, password})
        .then(res => {
            swalert(<h2> Estamos conectados</h2>)
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
            setLoggedIn(true);
            onLogin();
         



    });
};
  if (loggedIn) {
    return <Link to="/listado"><Listado /></Link>;
  }
     
    return (
        <>

        <h2>Formulario de Login</h2>
    <form onSubmit={submitHandler}>
        <label htmlFor="">
            <span>Correo Electronico:</span> <br />
        </label>
        <input type="text" name="email" />
        <br />
         <label htmlFor="">
            <span>Contraseña:</span> <br />
        </label>
        <input type="password" name="password" />
        <br />
        
        <button type="submit" >Enviar</button>

    </form>
    </>
    ) 
    
}

export default Login;