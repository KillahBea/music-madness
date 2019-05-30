import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/norah-jones">Norah Jones</NavLink>
        <NavLink to="/billie-eilish">Billie Eilish</NavLink>
        <NavLink to="/lake-street-dive">Lake Street Dive</NavLink>
      </header>
    )
  }
}

export default Header
