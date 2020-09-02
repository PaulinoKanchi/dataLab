import React from 'react';
import Login from './Login';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    const usuario = props.usuario;
    if (isLoggedIn) {
        return <UserGreeting usuario={usuario} />;
    }
    return <GuestGreeting />;
}
function UserGreeting(props) {
    return <h1>Bienvenido {props.usuario} </h1>;
}

function GuestGreeting(props) {
    return <h1>Iniciar sesión</h1>;
}


function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
class CerrarSesion extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            usuario: "",
            contraseña: ""
        };

        this.handleLogoutClick = this.handleLogoutClick.bind(this);

    }

    //Boton cerrar sesión
    handleLogoutClick() {
        alert('¡Hasta pronto!')
        const usuarioAutenticado = { 'nombreUsuario': null, 'isLoggedIn': false };
        localStorage.setItem('usuarioDatos', JSON.stringify(usuarioAutenticado));
        this.setState({ isLoggedIn: false });



    }
    render() {
        const usuarioDatos = JSON.parse(localStorage.getItem("usuarioDatos"));
        const usuario = usuarioDatos.nombreUsuario;
        const isLoggedIn = usuarioDatos.isLoggedIn;
        let inicio;
        if (isLoggedIn) {
            inicio =
                <div>
                    <LogoutButton onClick={this.handleLogoutClick} />
                    <Greeting isLoggedIn={isLoggedIn} usuario={usuario} />
                </div>
                ;
        } else {
            return <Login />
        }
        return (
            <div>
                {inicio}
            </div>
        );
    }
}

export default CerrarSesion;