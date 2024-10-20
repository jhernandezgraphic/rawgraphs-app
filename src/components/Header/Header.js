import React from 'react'
import styles from './Header.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className={styles.navbar}>
      <img src="/IDEAPP.svg" alt="Logo"  style={{ width: '250px', height: 'auto' , padding: "0,0,0,80px"   }} />
      <Navbar.Brand href="/"><b></b><span className="text-primary"></span>  1.0</Navbar.Brand> 
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {menuItems.map((d, i) => {
            return (
              <Nav.Link key={'item' + i} href={d.href}>
                {d.label}
              </Nav.Link>
            )
          })}
          <a
            role="button"
            href="https://github.com/rawgraphs/rawgraphs-app/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary ml-2 d-flex flex-column align-items-center justify-content-center"
          >
            Reportar un problema
          </a>
          <a
            role="button"
            href="https://github.com/sponsors/rawgraphs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary ml-2 d-flex flex-column align-items-center justify-content-center"
          >
            
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
