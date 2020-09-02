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
    return true;
    //return <h4 className="text-dark">Bienvenido {props.usuario} </h4>;
}

function GuestGreeting(props) {
    return <h1>Iniciar sesión</h1>;
}

//Boton cerrar sesión
function LogoutButton(props) {
    return (
        <button className="btn bg-transparent text-light" onClick={props.onClick}>
            Cerrar sesión
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

    //Evento boton cerrar sesión
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
            inicio = <div>
                <nav className="navbar navbar-light bg-info">

                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <LogoutButton onClick={this.handleLogoutClick} />
                            </li>
                        </ul>
                    </div>
                </nav>
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