import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div className="container">
        <Link to="" className="navbar-brand" style={{cursor:'copy'}}>
        <i className="fa-solid fa-person"></i>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/add" className="nav-link active">
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/view" className="nav-link active">
                View Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
