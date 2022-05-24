import React from 'react';
import picProfile from '../../assets/cropped-picprofile-bw.JPEG'

export default function About() {
    return (
        <div>


            <div className="container">

                <div className="row">

                    <div className="col-md-8 pt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    I am an aspiring developer currently enrolled in the DU Programming Bootcamp. I am
                                    excited to
                                    learn
                                    new
                                    skills
                                    during my time in the program and look forward to receiving my certificate on June 13, 2022. My
                                    programming
                                    skills include experience with: HTML, CSS, JavaScript, API's, and Node. My professional
                                    history includes a decade of experience in education. My time in that field helped me develop
                                    skills
                                    such as
                                    communication, teamwork, crisis management, flexibility, and professionalism. I look forward to
                                    hearing
                                    from you!
                                </div>
                            </div>
                        </div>
                        <div className="card card-padding">
                            <div className="card-body">
                                <div className="card-text">
                                    Front End Skills: HTML 5, CSS 3, JavaScript, React, MVC, Webpack, JSX

                                    Back End Skills:  NodeJS, JavaScript, MySQL, JSON, OOP, MongoDB, Mongoose, MERN Stack, Express, CRUD, GraphQL, Apollo, RESTful web services, API's, MySQL
                                    
                                    Technologies: Git, GitHub, Insomnia, MongoDB Compass, Sandbox, Heroku, Lighthouse, VS Code                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 pt-4">
                        <img src={picProfile} className="aboutPic" alt="picture of me on a mountain" />
                    </div>

                </div>
            </div>
        </div>
    );
}
