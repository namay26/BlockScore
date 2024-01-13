import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <a className="navbar-brand" href="/">BlockScore</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/trm">Register a Team <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sports
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Football</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Request a sport</a>
        </div>
      </li>
    </ul>

  </div>
</nav>
  )
}
