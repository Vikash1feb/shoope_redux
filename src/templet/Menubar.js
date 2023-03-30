import React from 'react';
import { Link } from 'react-router-dom';

function Menubar() {
  return (
    <div className='row menubar-area'>
      <div className='col-12 '>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">Category</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Menubar;