import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <Link className="navbar-brand" to="/">Pengwi</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Nails Polish
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/nails/new" className="dropdown-item">Whats new</Link>
                  <Link to="/nails/best-sellers" className="dropdown-item">Best sellers </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/nails/all" className="dropdown-item">View all products</Link>
                </div>
              </li>
            </ul>
            
            <ul className="navbar-nav ml-auto">
               <li className="nav-item active">
                <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart" style={{ fontSize: "30px", color: "rgb(239, 89, 89)" }}></i></Link>
              </li>           
            </ul>
            
          </div>
        </nav>
    );
  }
}
