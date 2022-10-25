import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user, signOut }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img src="/logo.png" alt="Peduli Bumi" height="54" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Kalkulator</Link>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav">
          {user === {} ?
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            :
            <>
              <div className="d-flex align-items-center">
                <p className='mx-3'>{user.displayName}</p>
                <button className='btn btn-outline-success' onClick={signOut}>Signout</button>
              </div>
            </>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar