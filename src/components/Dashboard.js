import React from 'react';
import Login from './Login';
import VerificarSesion from "./VerificarSesion";
import CerrarSesion from "./CerrarSesion";
import "bootstrap/dist/css/bootstrap.min.css";
import './estilos/Dashboard.css';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['Samsung', 'Apple', 'Motorola'],
    datasets: [{
        backgroundColor: ['#BB5656', '#567BBB', '#56BB64'],
        hoverBackgroundColor:['red','red','red'],
        data: [29.05, 58.30, 4.65]
    }]
}
const opciones = {
    responsive: true,
    animation:{
        animateScale:true
    },
    tooltips: {
        enabled: true
    }
}

class Grafica extends React.Component {
    render() {
        return (
            <div>
                <Doughnut className="cambiarColor" data={data} options={opciones} />
            </div>
        )
    }
}

class Dashboard extends React.Component {
    render() {
        return (

            <div>
                <VerificarSesion />
                <CerrarSesion />
                <Grafica />


            </div>
        );
    }
}


export default Dashboard;