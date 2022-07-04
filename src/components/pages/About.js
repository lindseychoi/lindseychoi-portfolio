import { faCss3, faGithub, faGitSquare, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import picProfile from '../../assets/cropped-picprofile-bw.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pdf from '../../assets/lindsey-e-choi-resume-2022.pdf';

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
                                    I am a full-stack developer that has recently graduated from the University of Denver Full Stack Bootcamp. I am excited to
                                    learn and apply my skills to a variety of projects and technologies.
                                    I have always enjoyed gaming and technology, and coding is refreshing, technical and fun.
                                    This career allows me to continue learning, and I particularly like working hard to stay on top of the latest technologies and procedures.
                                    Before coding, I spent most of my career in education. I graduated from Colorado State University in 2011 with a Bachelor's in English Literature and was a teacher for nine years.
                                    Most recently, I tailored technology for individual students, other teachers, and myself to help with the difficult transition back and forth from e-learning to in-person learning.
                                    I had a lot of responsibility for structuring online learning
                                    for students with various platforms and applications because of the COVID pandemic.
                                    That really helped me find my passion in programming, and I'm loving the switch to the technical side!
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Education</h5>
                                    <div className="card-text">
                                        <h5 className="text-center">University of Denver: Full-Stack Coding Bootcamp Certificate</h5>
                                        <h5 className="text-center">Colorado State University: Bachelor of Arts in English Literature</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Skills</h5>
                                    <div className="card-text text-center">
                                        <p>Verbal and written communication, presenting and instructing, coaching, team player, adapts quickly, planning and implementing curriculum</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 pt-4">
                        <img src={picProfile} className="aboutPic" alt="me on a mountain" />
                    </div>

                    <div className="row row-cols-1">

                        <div className="col-md-4 pt-4">
                            <div className="card h-100 card-padding">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center">Technologies</h5>
                                    <div className="card-text">
                                        Mongoose, Express, MySQL, MongoDB, MySQL, NodeJS, Git, GitHub, Insomnia, MongoDB Compass, Sandbox, Heroku, Lighthouse, VS Code, MERN Stack, GraphQL, Apollo
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-4">
                            <div className="card h-100 card-padding">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Programming Languages</h5>
                                    <div className="card-text">
                                        HTML 5, CSS 3, JavaScript, React, MVC, Webpack, JSX
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-4">
                            <div className="card h-100 card-padding">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Technical Concepts and Data</h5>
                                    <div className="card-text">
                                        JSON, OOP, CRUD, RESTful web services, API, Progressive Web Applications
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row row-cols-1">
                        <div className="col-md-12 pt-4 text-center resume">
                            <a className="btn btn-success btn-block shadow-none" href={Pdf} download> Download a PDF of my Resumé</a>
                        </div>
                    </div>


                    <div className="row row-cols-1">
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
        </div>

    );
}
