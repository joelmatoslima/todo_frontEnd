import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          TodoApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="/calculadora" className="nav-link">
              Calculadora
            </Link>
            <Link to="/sobre" className="nav-link">
              Sobre
            </Link>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
