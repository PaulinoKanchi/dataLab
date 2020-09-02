import React from 'react';
import Login from './Login';
import VerificarSesion from "./VerificarSesion";
import CerrarSesion from "./CerrarSesion";

class Dashboard extends React.Component {
    render() {
        const usuarioDatos = JSON.parse(localStorage.getItem("usuarioDatos"));
        const usuario = usuarioDatos.nombreUsuario;
        const isLoggedIn = usuarioDatos.isLoggedIn;
        let button;
            button =
                <div>
                    <Login.LogoutButton onClick={this.handleLogoutClick} />
                    <Login.Greeting isLoggedIn={isLoggedIn} usuario={usuario} />
                </div>
                ;
        return (

            <div>
                <VerificarSesion />
                <CerrarSesion/>
                <h1>Hola</h1>
                
            </div>
        );
    }
}


export default Dashboard;