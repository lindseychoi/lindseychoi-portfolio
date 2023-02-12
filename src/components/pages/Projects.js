import React from 'react';
import Hike from '../../assets/take-a-hike-screenshot.jpg';
import Weather from '../../assets/weather-tracker-screenshot.jpg';
import Accretion from '../../assets/accretion-screenshot.png';
import Blog from '../../assets/blog-that-stuff.jpg';
import Quiz from '../../assets/multiple-choice-screenshot.jpg';
import encounters from '../../assets/close-encounters-screenshot.jpg';

export default function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 gx-3">

        <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>

              <a href="https://closer-encounters.herokuapp.com/"><img src={encounters} className="card-img-top"
                alt="close encounters application" /></a>

              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/DanielMrva/close_encounters">Highlighted Project: Close Encounters</a></h5>
                <div className="card-text">
                  Disclaimer: Heroku is no longer offering free services! Thanks for your patience while this app finds a new home!
                </div>
                <div className="card-text">
                  My most recent personal project is an app called Close Encounters. Close Encounters aims to connect individuals who have been involved in various encounters. We are not alone -- and neither are you on this application.
                  Close Encounters was created with a variety of technologies, including React, MongoDB, Mongoose, GraphQL, Leaflet, React Router, React Bootstrap, and more!
                  Our programming team was made up of myself, Daniel Mrva, Amber Zimmerman, and Al Garraffa. 
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <a href="https://accretion2022.herokuapp.com/"><img src={Accretion} className="card-img-top"
                alt="usgs accretion application." /></a>
              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/lindseychoi/accretion">Accretion</a></h5>
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

          <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
            <iframe className="card-img-top embed-responsive" src="https://drive.google.com/file/d/1oC29c4dQB4w6W2rDgFDm_JAHG5aGQkMT/preview" width="286" height="200"
                alt="e-commerce backend"></iframe>
              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/lindseychoi/e-commerce-back-end-lec">E-Commerce Backend</a></h5>
                <div className="card-text">
                  This is a command-line application that allows the user to get, post, create, put, and delete categories, tags, and 
                  products in an ecommerce back-end. It utilizes models that show correct associations and routes that incorporate all of the models. 
                </div>
              </div>
            </div>
          </div>


          {/* <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <a href="https://lindseychoi.github.io/weather-tracker/"><img src={Weather} className="card-img-top"
                alt="weather tracking application." /></a>
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
 */}
        </div>

        {/* 2nd row of cards */}

        <div className="row row-cols-1 gx-3">

          <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <a href="https://that-blog.herokuapp.com/"><img src={Blog} className="card-img-top"
                alt="blog that stuff" /></a>
              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/lindseychoi/blog-that-stuff">Blog That Stuff</a></h5>
                <div className="card-text">
                  A simple blog that allows users to sign up and make blog posts. Each user has their own profile that allows them to see their own posts, and the homepage shows all of the posts from every user. Come on over and blog that stuff!
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <a href="https://lindseychoi.github.io/project-1-DU/"><img src={Hike} className="card-img-top"
                alt="hiking application." /></a>
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
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <iframe className="card-img-top embed-responsive" src="https://drive.google.com/file/d/1ZDz6YnTHIwUirYsphWNEMhYyvCAdqe6A/preview" width="286" height="200"
                alt="readme generator"></iframe>
              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/lindseychoi?tab=repositories">ReadMe Generator</a></h5>
                <div className="card-text">
                  This project is to help users create a quality readme file in less time? Simply follow the installation instructions,
                  type in the answers to the questions from Inquirer, and the readme will be generated and ready to go.
                </div>
              </div>
            </div>
          </div>

          {/* third row of cards */}

          <div className="row row-cols-1 gx-3">

            <div className="col-md-4 pt-4">
              <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <iframe className="card-img-top embed-responsive" src="https://drive.google.com/file/d/1KpSLsZqk6RhZN8jA2a7co0WvyJsI_OXg/preview" width="286" height="200"
                  alt="socialize api"></iframe>
                <div className="card-body">
                  <h5 className="card-title"><a href="https://github.com/lindseychoi/socialize-api">Socialize API</a></h5>
                  <div className="card-text">
                  A social media database that can be accessed through Insomnia and MongoDB Compass. To run it 
                  and explore the contents and functionality of routes and schemas/models, simply npm i, npm run seed, and npm start. 
                  You will see that there are users, thoughts, and reactions that have functional CRUD routes.                  
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-4">
            <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
              <a href="https://lindseychoi.github.io/multiple-choice/"><img src={Quiz} className="card-img-top"
                alt="multiple choice application" /></a>
              <div className="card-body">
                <h5 className="card-title"><a href="https://github.com/lindseychoi/multiple-choice">Multiple Choice Quiz</a></h5>
                <div className="card-text">
                  A simple application that asks the user a series of questions and keeps up with their score and the most recent high scores. Created utilizing only JavaScript and CSS.
                </div>
              </div>
            </div>
          </div>

            <div className="col-md-4 pt-4">
              <div className="card h-100 mediaquerycenter" style={{ width: "25rem" }}>
                <iframe className="card-img-top embed-responsive" src="https://drive.google.com/file/d/1JjqkiOplSQIkiboN70meQVpSUBHTizFp/preview" width="286" height="200"
                  alt="employee database"></iframe>
                <div className="card-body">
                  <h5 className="card-title"><a href="https://github.com/lindseychoi/employee-database-lec">Employee Database</a></h5>
                  <div className="card-text">
                    This is a command-line application that allows the user to navigate through a database of employees. It allows the user to view the 
                    departments, roles, and employees, as well as allowing the user to add a new department, new role, new employee, or update an old 
                    employee's role.                  
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  );
}
