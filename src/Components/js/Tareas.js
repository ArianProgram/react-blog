import React, { Component } from 'react';

import '../css/Tareas.css'
import tarea from '../../assets/images/tarea.png'
import styled from 'styled-components'


class Tareas extends Component {
    render() {
        return (
            <div className="container">
                        
            <h1 className="container-titulo">Pagina Tareas
            
           <span className="icono"><i class="fas fa-code "></i></span>
            </h1>
            <div className="container-p">
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <img src={tarea} alt="Tarea" className="imagen"></img>
            
   </div>
        );
    }
}

export default Tareas;


