import React from 'react';
import linkedInPhoto from '../../assets/profilepic2022.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import encounters from '../../assets/close-encounters-screenshot.jpg';

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

          <div className="col-md-6 pt-4">
            <div className="card h-100 highlighted mediaquerycenter highlighted" style={{ width: "25rem" }}>

              <a href="https://closer-encounters.herokuapp.com/"><img src={encounters} className="card-img-top"
                alt="close encounters application" /></a>

              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/DanielMrva/close_encounters">Highlighted Project: Close Encounters</a></h5>
                <div className="card-text">
                  My most recent project is an app called Close Encounters. Close Encounters aims to connect individuals who have been involved in various encounters. We are not alone -- and neither are you on this application.
                  Close Encounters was created with a variety of technologies, including React, MongoDB, Mongoose, GraphQL, Leaflet, React Router, React Bootstrap, and more!
                  Our programming team was made up of myself, Daniel Mrva, Amber Zimmerman, and Al Garraffa. Visit our app to join our community of paranormal enthusiasts!
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
