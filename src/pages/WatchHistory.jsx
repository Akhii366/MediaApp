import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <h1>Watch History</h1>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }} >
          Back to Home <i className="fa-solid fa-arrow-right-to-bracket fa-beat-fade" ></i>
        </Link>
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
            <tr>
              <td>1</td>
              <td>Sample Video Caption</td>
              <td><a href="#" target='_blank'>https://www.example.com</a></td>
              <td>12/20/2023, 10:30:00</td>
              <td>
                <button className='btn'>
                  <i className='fa-solid fa-trash text-danger'></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Another Video Caption</td>
              <td><a href="#" target='_blank'>https://www.example2.com</a></td>
              <td>12/21/2023, 11:00:00</td>
              <td>
                <button className='btn'>
                  <i className='fa-solid fa-trash text-danger'></i>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default WatchHistory
