import { faCss3, faGithub, faGitSquare, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import picProfile from '../../assets/cropped-picprofile-bw.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pdf from '../../assets/LINDSEY_CHOI_RESUME.pdf';

export default function About() {
    return (
        <div>

            <div className="container">

                <div className="row row-cols-1">

                    <div className="col-md-8 pt-4">
                        <div className="card mediaquerycenter">
                            <div className="card-body">
                                <h5 className="card-title text-center">Summary</h5>
                                <div className="card-text card-padding">
                                        I’m a full stack developer contracting with TEKsystems for FedEx. I'm currently
                                    implementing functionality in the UX/UI and front end of one of their applications utilizing Angular,
                                    Ngrx, and Typescript. I've been enjoying my focus on the front-end but have recently been doing work
                                    with CI/CD, Jenkins, Java, and Spring Boot as well. I work directly with the business architects, our
                                    technical advisor, and the rest of the team to provide modernization and new functionality for
                                    applications. 
                                </div>
                                <div className="card-text card-padding">
                                        My team develops in an Agile environment, and I have experience with daily standups,
                                    sprints, and PI planning. I have past experience with the MERN stack as well.
                                    I am studying to obtain my COMPTIA Security+ certification and will be sitting for that
                                    exam in April 2023. I’m also working on growing my knowledge and skill by looking into Docker
                                    and Kubernetes. I might be new to the industry, but I’m great at solving problems and learning
                                    new technologies.
                                </div>
                                <div className="card-text card-padding">
                                        My former career was in education. I have ten years of direct educational experience
                                    and have worked as an instructor at various levels for that time. While in that field, I was data
                                    and results driven, and I regularly worked with large and small groups to ensure that students
                                    understood content. I created online learning content and was engaged actively with the switch
                                    to online learning during the pandemic. My past experience in education has prepared me for
                                    my career as a developer by giving me solid skills for communicating with customers and the
                                    business side. I can easily converse about business needs and convert them into technical
                                    requirements and solutions to provide a great user experience.
                                </div>
                                <div className="card-text card-padding">
                                    I appreciate the opportunity to work with you, and I hope to hear from you soon!
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pt-4">
                            <div className="card mediaquerycenter">
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
                            <div className="card mediaquerycenter">
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
                        <div className="mediaquerycenter">
                            <img src={picProfile} className="aboutPic" alt="me on a mountain" />
                        </div>
                    </div>

                    <div className="row row-cols-1">

                        <div className="col-md-4 pt-4">
                            <div className="card h-100 card-padding mediaquerycenter">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center">Technologies</h5>
                                    <div className="card-text">
                                        Angular, React, NgRx, NodeJS, Git, GitHub, Insomnia, Postman, Sandbox,
                                        Mongoose, Express, MySQL, MongoDB, Heroku, Lighthouse, VS Code, MERN Stack, GraphQL, Webpack,
                                        Jenkins, Spring Boot, Maven                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-4">
                            <div className="card h-100 card-padding mediaquerycenter">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Programming Languages</h5>
                                    <div className="card-text">
                                        HTML, CSS, JavaScript, TypeScript, Java, Python
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-4">
                            <div className="card h-100 card-padding mediaquerycenter">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Technical Concepts and Data</h5>
                                    <div className="card-text">
                                        CI/CD Pipelines, OOP, CRUD, RESTful web services, JSON, API, MVC,
                                        Progressive Web Applications, Responsive Design, UX/UI design                                    </div>
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
                                    <h5 className="text-center bigger-bolder mediaquerycenter">
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
