import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../service/allAPI'


function WatchHistory() {
  const  [history, setHistory] =useState([])



  useEffect(()=>{
    getHistory()
  },[])


  const getHistory= async()=>{
    const result = await getHistoryAPI()
    console.log(result);
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API failed");
      console.log(result.message);
      
      
    }
    
  }
  // console.log(history);
  
const removeHistory = async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}




  return (
    <>
    <div className='d-flex justify-content-between'>
      <h1>Watch History</h1>
      <Link to={'/home'} style={{ textDecoration: 'none', color: 'bluevilot', fontSize: '30px' }} >Back to Home<i class="fa-solid fa-arrow-right-to-bracket fa-beat-fade" ></i></Link>
    </div>
    <div>
      <Table className='border border-2 border-danger'>
        <thead>
          <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history.map((video,index)=>(
          <tr>
             <td>{index+1}</td>
             <td>{video.caption}</td>
             <td><a href={video.link} target='_blank'>{video.link}</a></td>
             <td>{video.timeStamp}</td>
             <td><button onClick={()=>removeHistory(video?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
          )):<p>Nothing to Display</p>
}
        </tbody>
      </Table>
    </div>
    </>
    
  )
}

export default WatchHistory
