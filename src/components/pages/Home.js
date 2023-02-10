import React from 'react';
import linkedInPhoto from '../../assets/image_67208449.JPG'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1">

          <div className="col-md-12 pt-4">
            <div className="welcomeHome">
            <img src={linkedInPhoto} className="profilepic mediaquerycenter" alt="me in a pink jacket" />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
