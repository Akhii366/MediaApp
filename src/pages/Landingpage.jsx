import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: '40px' }}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste id, exercitationem quis, recusandae sunt debitis
            tempora alias impedit quos molestias dolor accusantium, inventore quod consectetur obcaecati veniam aliquam! Qui, mollitia!
            Pariatur officiis quo maxime sequi laborum voluptates aspernatur praesentium soluta explicabo numquam, minus architecto obcaecati
            quae quis eaque recusandae ullam facilis, laudantium quas? Facere nemo commodi autem, sapiente repellat delectus.
          </p>
          <Link to={'/home'} className='btn btn-info mt-4'>Get Started</Link>
        </Col>
        <Col lg={5}>
          <img src='https://media.tenor.com/OiwgU0MtwOcAAAAC/213.gif' alt='' />
        </Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' height={'300px'} width={'300px'} src='https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003' />
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' height={'300px'} width={'300px'} src='https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif' />
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' height={'300px'} width={'300px'} src='https://i.gifer.com/58kL.gif' />
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h4 className='text-warning'>Simple, Powerful & Fast</h4>
          <h6 className='mb-5 mt-3'>
            <span className='text-warning fw-bolder'>Play Everything</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis unde libero optio qui adipisci iusto, voluptate
            harum reprehenderit neque porro asperiores sequi itaque consectetur accusantium a, placeat, beatae animi? Nostrum dignissimos
            ab magni nulla deserunt? Ducimus, culpa molestias. Numquam quidem minima dolorem a aliquid porro, asperiores exercitationem
            ab odit quis dolorum dolor eaque, sapiente assumenda illum eveniet est aperiam.
          </h6>

          <h6 className='mb-5 mt-3'>
            <span className='text-warning fw-bolder'>Play Everything</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis unde libero optio qui adipisci iusto, voluptate
            harum reprehenderit neque porro asperiores sequi itaque consectetur accusantium a, placeat, beatae animi? Nostrum dignissimos
            ab magni nulla deserunt? Ducimus, culpa molestias. Numquam quidem minima dolorem a aliquid porro, asperiores exercitationem
            ab odit quis dolorum dolor eaque, sapiente assumenda illum eveniet est aperiam.
          </h6>

          <h6 className='mb-5 mt-3'>
            <span className='text-warning fw-bolder'>Play Everything</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis unde libero optio qui adipisci iusto, voluptate
            harum reprehenderit neque porro asperiores sequi itaque consectetur accusantium a, placeat, beatae animi? Nostrum dignissimos
            ab magni nulla deserunt? Ducimus, culpa molestias. Numquam quidem minima dolorem a aliquid porro, asperiores exercitationem
            ab odit quis dolorum dolor eaque, sapiente assumenda illum eveniet est aperiam.
          </h6>
        </div>
        <div className='video col-lg-5'>
          <iframe
            width='100%'
            height='400'
            src='https://www.youtube.com/embed/ccpVpcP8m44'
            title='Best of sushin Shyam 2023 | Audio Jukebox |Hits of Sushin Shyam | OST'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
