import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const CenteredSpinner = () => (
    <Modal
      show={true}
      centered
      fullscreen
      contentClassName="bg-transparent shadow-none"
      backdropClassName="bg-dark"
    >
      <Modal.Body
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh', backdropFilter: 'blur(2px)' }}
      >
        <Spinner animation="border" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </Spinner>
      </Modal.Body>
    </Modal>
  );
  
  export default CenteredSpinner;