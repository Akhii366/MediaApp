import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='text-danger'>
          <i class="fa-solid fa-play fa-beat me-2 fs-3"></i>
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
