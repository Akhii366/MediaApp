import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

function VideoCard({ video, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '16rem' }} >
        <Card.Img variant="top" src={video.url} onClick={handleShow} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5>{video.caption}</h5>
            {insideCategory ? null : <Button className='btn'><i className='fa-solid fa-trash text-danger'></i></Button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
