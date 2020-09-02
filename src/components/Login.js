import React from 'react';
import VerificarSesion from "./VerificarSesion";
import CerrarSesion from "./CerrarSesion";
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './estilos/Login.css';

//Validar usuario y contraseña
class Autenticacion extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            usuario: "",
            contraseña: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {

        this.setState({ value: event.target.usuario });
        this.setState({ value: event.target.contraseña });
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    //Boton cerrar sesión
    handleLogoutClick() {
        alert('¡Hasta pronto!')
        const usuarioAutenticado = { 'nombreUsuario': null, 'isLoggedIn': false };
        localStorage.setItem('usuarioDatos', JSON.stringify(usuarioAutenticado));

        this.setState({ isLoggedIn: false });


    }
    handleSubmit(event) {
        event.preventDefault();
        const usuarioRegistrado = localStorage.getItem('usuario');
        const contraseñaRegistrado = localStorage.getItem('contraseña');
        if (this.state.usuario === usuarioRegistrado && this.state.contraseña === contraseñaRegistrado) {
            alert('Bienvenido ' + this.state.usuario +' !')
            this.setState({ isLoggedIn: this.state.usuario });
            const usuarioAutenticado = { 'nombreUsuario': this.state.usuario, 'isLoggedIn': true };
            localStorage.setItem('usuarioDatos', JSON.stringify(usuarioAutenticado));

        } else {
            alert('Usuario y/o contraseña invalido ')
        }
    }

    render() {

        const usuarioDatos = JSON.parse(localStorage.getItem("usuarioDatos"));
        const usuario = usuarioDatos.nombreUsuario;
        const isLoggedIn = usuarioDatos.isLoggedIn;

        let button;
        if (isLoggedIn) {
            button =
                <div>
                    <CerrarSesion />
                    <Redirect to='/dashboard' />
                </div>
                ;
        } else {
            button =
                <div className="col-sm-6 login">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">

                            <h1 className="text-center">Iniciar Sesión</h1>
                            <label>Usuario</label>
                            <input className="form-control"
                                name="usuario"
                                type="text"
                                value={this.state.usuario}
                                onChange={this.handleInputChange}
                                placeholder="Usuario" />

                            <br />
                            <label>Contraseña</label>
                            <input
                                className="form-control"
                                name="contraseña"
                                type="password"
                                value={this.state.contraseña}
                                onChange={this.handleInputChange}
                                placeholder="Contraseña" />

                            <br />
                            <input className="btn btn-primary form-control" type="submit" value="Ingresar" />
                        </div>
                    </form>
                </div >
                ;
        }
        return (

            <div className="col-sm-12">
                <VerificarSesion />
                {button}
            </div>
        );
    }
}

export default Autenticacion;