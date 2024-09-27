import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../service/allAPI';


function Add({setUploadVideoResponse}) {

  const [UploadVideo, setUploadVideo] = useState({
    id: "", caption: "", url: "", link: ""
  })
  // console.log(UploadVideo);

// https://www.youtube.com/watch?v=HHTYK_Bm94c
// https://www.youtube.com/embed/HHTYK_Bm94c


  const getYoutubeLink=(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let vID=  value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`)
      setUploadVideo({...UploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...UploadVideo,link:""})
    }
  }
  

  const handleAdd=async()=>{
    const {id,caption,url,link}=UploadVideo
    if(!id ||  !caption || !url || !link){
      alert("Please fill all fields")
    }else{
      // store video details to the json server
     const res = await uploadVideoAPI(UploadVideo)
      console.log(res)
      if(res.status>=200&& res.status<=300){
        // success
        handleClose()
        // Alert
        alert("Uploaded Successfully")
        // after getting success response field should be empty
        setUploadVideo({id:"",caption:"",url:"",link:""})


        setUploadVideoResponse(res.data)

        }else{
          // error  
          console.log(res.message);
      }
    }

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex text-primary shadow-none  alighn-item-center">
        <h3 style={{ textDecoration: 'none', color: 'bluevilot', fontSize: '30px' }}>Upload Videos</h3>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Video Id" className="mb-3">
            <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setUploadVideo({...UploadVideo,id:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTitle" label="Video Title" className="mb-3" >
            <Form.Control type="text" placeholder="Enter Video Name"  onChange={(e)=>setUploadVideo({...UploadVideo,caption:e.target.value})} />

          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Image Url" className="mb-3">
            <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...UploadVideo,url:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingT" label="Video Url">
            <Form.Control type="text" placeholder="Video Url" onChange={getYoutubeLink} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
