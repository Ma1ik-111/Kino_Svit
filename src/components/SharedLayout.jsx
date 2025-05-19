import { Suspense } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="mb-5">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Kino_Svit</Navbar.Brand>
            <Nav className="me-auto" variant="underline">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="movies" className="nav-link">
                Movies
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main className="flex-grow-1">
        <Container className="mb-5">
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer>
        <Container>
          <Row className="p-4">
            <Col>
              <p className="text-center fst-italic">
                {' ' }
                <NavLink to="https://www.instagram.com/kinosvit2025?igsh=MXJrcjl0cGcxc2RmeQ==">Instagram</NavLink>
                {' '}
                <NavLink to="https://t.me/Kino_SvitUa_bot">Telegram</NavLink>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default SharedLayout;