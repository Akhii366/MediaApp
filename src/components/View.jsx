import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadedVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI'

function View({UploadVideoResponse,setDropVideoResponse}) {

const [allVideos,setAllVideos]=useState([])
const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)

useEffect(()=>{getAlluploadedVideos()
   setDeleteVideoResponse(false)
  },[UploadVideoResponse,deleteVideoResponse])

const getAlluploadedVideos=async() =>{
  const result=await getAlluploadedVideosAPI()
  // console.log(result);
  if(result.status==200){
    setAllVideos(result.data)
  }else{
    console.log("API Failed")
  }
  
}
// console.log(allVideos);
const VideodragOver=(e)=>{
  e.preventDefault()
}


const videoDropped=async(e)=>{
  const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,categoryId)
  const {data}=await getCategoryAPI()
  console.log(data)
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result=selectedCategory.allVideos.filter(video=>video.id!==videoId)
  console.log(result)
  let {id,categoryName}=selectedCategory
  let newCategory={id,categoryName,allVideos:[result]}
  console.log(newCategory);
  const res =await updateCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)
}

  return (
    <>
      <Row droppable="true" onDragOver={(e)=>VideodragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3} className='mt-3'>
        <VideoCard video={video}
        setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>)):<p>Nothing to display</p>
        }
      </Row>
    </>
  )
}

export default View
