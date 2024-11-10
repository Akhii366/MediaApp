import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-grid">
        <button className="btn btn-info" onClick={handleShow}>
          Add Category
        </button>
      </div>

      <div className="border rounded mt-5 p-3">
        <div className="d-flex justify-content-between align-item-center text-primary">
          <h5>Category Name</h5>
          <Button className="btn">
            <i className="fa-solid fa-trash text-danger"></i>
          </Button>
        </div>
        <Row>
          {/* Video cards can be placed here */}
          <Col sm={12}>
            <VideoCard video={{}} insideCategory={true} />
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput" label="Category" className="mb-3">
              <Form.Control type="text" placeholder="Enter Category Name" />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category;
