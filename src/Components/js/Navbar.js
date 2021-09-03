import React, { Component } from 'react';
import '../css/Navbar.css'
import {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import { render } from '@testing-library/react';
import Home from './Home';
import Nosotros from './Nosotros';
import Tareas from './Tareas'
class navbar extends Component {
    render() {
        return (
            <Router>
      <div >
      
        <nav className="nav">
          <h1 className="logo"  >
            <a className="logo-a" href='/'>Proyecto react</a>
            </h1>
          <ul className="lista">
            <li className="lista-li">
              <Link to="/"  className="lista-a">Inicio</Link>
            </li>
            <li className="lista-li">
              <Link to="/nosotros"   className="lista-a">Nosotros</Link>
            </li>
            <li className="lista-li" >
              <Link to="/tareas"   className="lista-a">Tareas</Link>
            </li >
          </ul   >
        </nav>
        <Switch  >
          <Route path="/nosotros" className="Rutas" >
            <Nosotros />
          </Route>
          <Route path="/tareas"  className="Rutas" >
            <Tareas />
          </Route>
          <Route path="/"  className="Rutas" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        );
    }
}

/* function Home() {
   
      return(
        Home()

    )
      
  } */
  
  /* function nosotros() {
    return <h2>nosotros</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  } */

export default navbar;