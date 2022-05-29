import React from 'react';
import ShoesPic from '../../assets/cropped-shoes-pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <div className="container">

        <div className="row g-3 mt-0 pt-3">
          <div>
            <img src={ShoesPic} className="profilepic" alt="my shoes" />
          </div>
        </div>

        <div className="row g-3 mt-0 pt-3">
          <div className="welcomeHome">
            <p>
              Welcome to my portfolio! My name is Lindsey Choi, and I'm a full-stack developer in Colorado Springs. Take a look at my projects and skills, and feel free to contact me for more information!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
