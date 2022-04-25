import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <h1>Welcome to Peter's Music Blog</h1>
    <div className="links">
    <Link to="/">Home</Link>
    <Link to="/tracks">Discography</Link>
    </div>
    </div>
  )
}

export default Navbar
