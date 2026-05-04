import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import eisLogo from '../../assets/images/EIS_LOGO.png';

interface NavigationProps {
  onSearchOpen: () => void;
  onPhoneClick: () => void;
}

export function Navigation({ onSearchOpen, onPhoneClick }: NavigationProps) {
  return (
    <nav className="navbar navbar-dark navbar-expand-md fixed-top">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand me-4" href="#home">
          <img 
            src={eisLogo} 
            alt="EIS Logo" 
            style={{ height: '40px' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#drinkware">Drinkware</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#kitchenware">Kitchenware</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#umbrellasAndBags">Umbrellas & Bags</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#capsAndApparel">Caps & Apparel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#notebooksAndPens">Notebooks & Pens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#accessories">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#bundle">Bundle</a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-3 ms-auto">
          <button className="btn btn-link text-dark" aria-label="Search" onClick={onSearchOpen}>
            <i className="bi bi-search"></i>
          </button>
          <button className="btn btn-link text-dark" aria-label="Phone" onClick={onPhoneClick}>
            <i className="bi bi-telephone"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
