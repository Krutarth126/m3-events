import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav__primary">
      <a className="navbar-brand" href="#">
        <img src="https://i.ibb.co/GW4DRDz/m3-logo.jpg" width="50px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Glimpse of Our work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Booking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Reviews
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
