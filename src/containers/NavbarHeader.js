/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import './NavbarHeader.css'

const NavbarHeader = () => {
  const [menu] = useState(['accueil', 'portfolio'])
  const navbarMenu = menu
    .map(title =>
      <NavLink
        className='navlink'
        key={title}
        to={'/' + title}
      >
        <div>{title.toUpperCase()}</div>
      </NavLink>
    )

  return (
    <Navbar className='container-fluid navbar'>
      <Nav className='mr-auto flex-wrap nav'>
        {navbarMenu}
      </Nav>
    </Navbar>
  )
}

export default NavbarHeader
