import React from 'react';
import Hike from '../../assets/take-a-hike-screenshot.jpg';
import Weather from '../../assets/weather-tracker-screenshot.jpg';
import Accretion from '../../assets/accretion-screenshot.png';

export default function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-2 gx-3">

          <div className="col-md-4 pt-4">
            <div className="card h-100" style={{ width: "25rem" }}>
              <a href="https://lindseychoi.github.io/project-1-DU/"><img src={Hike} className="card-img-top"
                alt="Screenshot of the hiking application." /></a>
              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/lindseychoi/project-1-DU">Take A Hike!</a></h5>
                <div className="card-text">
                  A project that allows the user to search their location and see
                  three hikes nearby returned to them. This application shows use and understanding of multiple API's,
                  JS, the Bootstrap library, and custom CSS as well.
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-4">
            <div className="card h-100" style={{ width: "25rem" }}>
            <a href="https://lindseychoi.github.io/weather-tracker/"><img src={Weather} className="card-img-top"
                alt="Screenshot of the weather tracking application." /></a>
              <div className="card-body">
              <h5 className="card-title"><a href="https://github.com/lindseychoi/weather-tracker">Weather Tracker</a></h5>
                <div className="card-text">
                  A simple application that allows the user to search for the current weather
                  conditions of a city, as well as the five day forecast. This projects illustrates use of an API and
                  dynamically drawing information to the page with JS.
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-4">
            <div className="card h-100" style={{ width: "25rem" }}>
            <a href="https://accretion2022.herokuapp.com/"><img src={Accretion} className="card-img-top"
                alt="Screenshot of the multiple choice quiz application." /></a>
              <div className="card-body">
              <h5 className="card-title"><a href="https://github.com/lindseychoi?tab=repositories">Accretion</a></h5>
                <div className="card-text">
                  Worked with a team to create an application for the USGS to collect paperwork from the offices he
                  works with.
                  The result is a
                  streamlined,
                  user-friendly approach to accumulating documents and rendering them in PDF form.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
