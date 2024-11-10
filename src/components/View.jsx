import React from 'react';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function View() {
  return (
    <>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3} className='mt-3'>
          <VideoCard video={{ caption: 'Sample Video', url: 'https://via.placeholder.com/150', link: '' }} />
        </Col>
       
      </Row>
    </>
  );
}

export default View;
