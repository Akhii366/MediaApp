import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function Add() {
  const [show, setShow] = useState(false);

  const [allvideos,setAllVideos]=useState({
    title:"",
    imageUrl:"",
    videoUrl:""
  })

  const handleyoutube= (youtubelink)=>{
     if(youtubelink.includes('https://www.youtube.com/watch?v=')){
      const youtubeid=youtubelink.split("v=")[1]
      setAllVideos({...allvideos,videoUrl:` https://www.youtube.com/embed/${youtubeid}`})
      
     }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex text-primary shadow-none align-items-center">
        <h3 style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }}>
          Upload Videos
        </h3>
        <button onClick={handleShow} className="btn">
          <i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTitle" label="Video Title" className="mb-3">
            <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>{
              setAllVideos({...allvideos,title:e.target.value})
              // console.log(allvideos);
              
            }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Image Url" className="mb-3">
            <Form.Control type="text" placeholder="Image Url" onChange={(e)=>{
              setAllVideos({...allvideos,imageUrl:e.target.value})
              console.log(allvideos);
              
            }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingT" label="Video Url">
            <Form.Control type="text" placeholder="Video Url" onChange={(e)=>{
              handleyoutube(e.target.value)
            }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;


// https://www.youtube.com/watch?v=suTW4yG7b4M
// https://www.youtube.com/embed/suTW4yG7b4M