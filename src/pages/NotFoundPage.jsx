import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <Row>
      <Col className="text-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for doesn't exist or an other error occurred.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Go to Home Page
        </Link>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
