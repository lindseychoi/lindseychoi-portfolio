import React from 'react';
import ProfilePic from '../../assets/blackandwhite-profilepic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <div className="container">

        <div className="row g-2 mt-0 pt-2">
          <div>
            <img src={ProfilePic} className="profilepic" alt="picture of me" />
          </div>
        </div>

        <div className="row g-2 mt-0 pt-2">
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
