import React from 'react';
import Hike from '../../assets/take-a-hike-screenshot.jpg';
import Weather from '../../assets/weather-tracker-screenshot.jpg';
import Accretion from '../../assets/accretion-screenshot.png';

export default function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-2">

          <div className="col-4">
            <div className="card h-100" style={{ width: "25rem" }}>
              <img src={Hike} className="card-img-top"
                alt="Screenshot of the hiking application." />
              <div className="card-body">
                <h5 className="card-title">Take A Hike!</h5>
                <div className="card-text">
                  A project that allows the user to search their location and see
                  three hikes nearby returned to them. This application shows use and understanding of multiple API's,
                  JS, the Bootstrap library, and custom CSS as well.
                </div>
                {/* <div id="button-bottom" className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="project-buttons btn btn-success"
                onClick="window.location.href='https://github.com/lindseychoi/project-1-DU';">Repository</button>
              <button type="button" className="project-buttons btn btn-success"
                onClick="window.location.href='https://lindseychoi.github.io/project-1-DU/';">Website</button>
            </div> */}
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card h-100" style={{ width: "25rem" }}>
              <img src={Weather} className="card-img-top"
                alt="Screenshot of the weather tracking application." />
              <div className="card-body">
                <h5 className="card-title">Weather Tracker</h5>
                <div className="card-text">
                  A simple application that allows the user to search for the current weather
                  conditions of a city, as well as the five day forecast. This projects illustrates use of an API and
                  dynamically drawing information to the page with JS.
                </div>
                {/* <div id="button-bottom" className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="project-buttons btn btn-success"
                    onclick="window.location.href='https://github.com/lindseychoi/weather-tracker';">Repository</button>
                  <button type="button" className="project-buttons btn btn-success"
                    onclick="window.location.href='https://lindseychoi.github.io/weather-tracker/';">Website</button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card h-100" style={{ width: "25rem" }}>
              <img src={Accretion} className="card-img-top"
                alt="Screenshot of the multiple choice quiz application." />
              <div className="card-body">
                <h5 className="card-title">Accretion</h5>
                <div className="card-text">
                  Worked with a team to create an application for the USGS to collect paperwork from the offices he
                  works with.
                  The result is a
                  streamlined,
                  user-friendly approach to accumulating documents and rendering them in PDF form.
                </div>
                {/* <div id="button-bottom" className="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" className="project-buttons btn btn-success"
                    onclick="window.location.href='https://github.com/lindseychoi/accretion">Repository</button>
                  <button type="button" className="project-buttons btn btn-success"
                    onclick="window.location.href='https://accretion2022.herokuapp.com/">Website</button>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
