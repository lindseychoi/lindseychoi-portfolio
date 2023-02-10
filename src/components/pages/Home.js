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
              <h5>
                Welcome to my portfolio! I'm Lindsey Choi, and I'm a full-stack developer in Colorado Springs.
              </h5>
            </div>
          </div>

          <div className="col-md-6 pt-4 mediaquerycenter">
            <div className="mediaquerycenter">
              <img src={linkedInPhoto} className="profilepic mediaquerycenter" alt="me in a pink jacket" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
