import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category';

function Home() {
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add />
        </div>

        <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }}>
          Watch History <i className="fa-solid fa-arrow-right-to-bracket fa-beat-fade"></i>
        </Link>
      </div>

      <div className="container-fluid d-flex w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View />
        </div>

        <div className="all-videos col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
