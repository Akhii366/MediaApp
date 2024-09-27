import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getAVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI';
import VideoCard from './VideoCard';

function Category({dropVideoResponse}) {
  const [categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=async()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      console.log(result)
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
  }else{
    alert("Please enter category name")
  }
  }

  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }
  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

// console.log(allCategories);


const removeCategory=async(id)=>{
  await deleteCategoryAPI(id)
  getCategories()
}

const dragOver=(e)=>{
  console.log("video carx dragging over the category");
  e.preventDefault()
}

const videoDropped=async(e,categoryId)=>{
  const VideoId =e.dataTransfer.getData("VideoId")
  console.log("VideoId"+VideoId+"video dropped category id"+categoryId)
  const {data}=await getAVideosAPI(VideoId)
  // console.log(data);
  const selectedCategory= allCategories.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  // console.log(selectedCategory);
  await updateCategoryAPI(categoryId,selectedCategory)
  getCategories()
}

const videoDragStarted=(e,VideoId,categoryId)=>{
  let datashare={VideoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(datashare))
}

  return (
    <div>
      <div className='d-grid'>
        <button className='btn btn-info'onClick={handleShow}>Add Category</button>
      </div>

      {
        allCategories?.length>0?allCategories.map(Category=>(
          <div className="border rounded mt-5 p-3" droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,Category.id)} >
        <div className="d-flex justify-content-between align-item-center text-primary">
          <h5>{Category.categoryName}</h5>
          <Button className='btn' onClick={()=>removeCategory(Category.id)}><i className='fa-solid fa-trash text-danger'></i></Button>
        </div>
        <Row>
          {
            Category?.allVideos?.length>0?Category?.allVideos.map(card=>(
            <Col sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,Category.id)}>
              <VideoCard video={card} insideCategory={true}/>
            </Col>
            )):null
          }
        </Row>
      </div>
        )):<p className='fw-bolder text-danger'>Nothing to Display</p>
        }



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
          <FloatingLabel controlId="floatingInput" label="Category" className="mb-3">
            <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
          </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category
