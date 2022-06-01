import { faCss3, faGithub, faGitSquare, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import picProfile from '../../assets/cropped-picprofile-bw.JPEG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    return (
        <div>


            <div className="container">

                <div className="row row-cols-1">

                    <div className="col-md-8 pt-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title text-center">Summary</h5>
                                <div className="card-text">
                                    I am an aspiring developer currently enrolled in the DU Programming Bootcamp. I am excited to
                                    learn new skills
                                    during my time in the program and look forward to receiving my certificate on June 14, 2022. I have always enjoyed gaming and technology, and coding is refreshing, technical and fun.
                                    This career allows me to continue learning, and I particularly like working hard to stay on top of the latest technologies and procedures.
                                    Before programming, I spent most of my career in education. I graduated from Colorado State University in 2011 with a Bachelor's in English Literature and was a teacher for nine years.
                                    Most recently, I tailored technology for individual students, other teachers, and myself to help with the difficult transition back and forth from e-learning to in-person learning.
                                    I had a lot of responsibility for structuring online learning
                                    for students with various platforms and applications because of the COVID pandemic.
                                    That really helped me find my passion in programming, and I'm loving the switch to the technical side!
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-1">
                            <div className="col-md-4 pt-4">
                                <div className="card h-100 card-padding">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Front End</h5>
                                        <div className="card-text">
                                            HTML 5, CSS 3, JavaScript, React, MVC, Webpack, JSX
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 pt-4">
                                <div className="card h-100 card-padding">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Back End</h5>
                                        <div className="card-text">
                                            NodeJS, JavaScript, MySQL, JSON, OOP, MongoDB, Mongoose, MERN Stack, Express, CRUD, GraphQL, Apollo, RESTful web services, API's, MySQL
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 pt-4">
                                <div className="card h-100 card-padding">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-center">Technologies</h5>
                                        <div className="card-text">
                                            Git, GitHub, Insomnia, MongoDB Compass, Sandbox, Heroku, Lighthouse, VS Code
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row row-cols-1">
                            <div className="col-md-12 pt-4">
                                <h5 className="text-center bigger-bolder">
                                <div className="col-md-12 pt-4 text-center">
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faHtml5} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faCss3} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faJs} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faReact} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faNodeJs} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faGitSquare} /></a>
                                </div>
                                </h5>
                            </div>
                        </div> */}

                    </div>

                    <div className="col-md-4 pt-4">
                        <img src={picProfile} className="aboutPic" alt="me on a mountain" />
                    </div>

                    <div className="col-md-11 pt-4">
                    <div className="row row-cols-1">
                            <div className="col-md-12 pt-4">
                                <h5 className="text-center bigger-bolder">
                                <div className="col-md-12 pt-4 text-center">
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faHtml5} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faCss3} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faJs} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faReact} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faNodeJs} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a className="fa-2xl fa-cog fa-flag fa-brands logo-padding-2"><FontAwesomeIcon icon={faGitSquare} /></a>
                                </div>
                                </h5>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}
