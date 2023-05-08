import { React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function  Listado () {
    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if(token === null) {
           return  <Link to='/'><Login /></Link>
        }


    }, []);

  
    return (

        <> 
        listado
        </>
    )
}

export default  Listado; 