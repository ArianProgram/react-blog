import React, { Component } from 'react';
import '../css/Home.css'
import casa from '../../assets/images/casa.png'
import styled from 'styled-components'


class Home extends Component {
    render() {
        return (
                
                    <div className="container">
                        
                        <h1 className="container-titulo">Pagina Principal
                        
                       <span className="icono"><i class="fas fa-code "></i></span>
                        </h1>
                        <div className="container-p">
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <img src={casa} alt="Casa" className="imagen"></img>
                        
               </div>
              
               
               
               
        );
    }
}

export default Home;


const Container = styled.div`
padding: 10px;
margin: 5px;

border-radius: 5px;

display: inline-block;
box-shadow: -1px -3px 50px 4px rgba(0,0,0,0.1);


`

