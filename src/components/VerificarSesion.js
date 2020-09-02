import React from 'react';
import {Redirect} from "react-router-dom";

class VerificarSesion extends React.Component {
    render() {
        const usuarioDatos = JSON.parse(localStorage.getItem("usuarioDatos"));
        const isLoggedIn = usuarioDatos.isLoggedIn;

        if (isLoggedIn) {
            return true;
        } else {
            return <Redirect to='/' />
        }
    }
}

//Guardar usuario en localStorage
localStorage.setItem('usuario', "Admin");
localStorage.setItem('contraseña', "Admin20..");
const usuarioDatos = JSON.parse(localStorage.getItem("usuarioDatos"));
if (usuarioDatos) {
}else{
    const usuarioAutenticado = { 'nombreUsuario': null, 'isLoggedIn': null };
    localStorage.setItem('usuarioDatos', JSON.stringify(usuarioAutenticado));
}

export default VerificarSesion;