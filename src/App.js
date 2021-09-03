
import react from 'react'
import styled from 'styled-components'


import Navbar from './Components/js/Navbar';


const App = () => {
  return (
    <Body>
    <header>
      <Nav>
      <Navbar/>
     
      </Nav>
    </header>

    
    </Body>
    
  );
}






export default App;


const Body = styled.div`
background: #fff;
height 100vh;
`

const Container = styled.div`
padding: 10px;
margin: 5px;
background-color: white;
border-radius: 10px;

display: inline-block;
box-shadow: -1px -3px 50px 4px rgba(0,0,0,0.1);
`

const Button = styled.button`
color: white;
padding: 10px;
margin: 2px auto;
background-color: #95DAC1;
border-radius: 2px;
border: none;

display: inline-block;
box-shadow: -1px -3px 50px 4px rgba(0,0,0,0.1);
`


const Nav = styled.nav` 
background: white;

border-radius: 10px;
width: 100%;
height: 50px;
`
