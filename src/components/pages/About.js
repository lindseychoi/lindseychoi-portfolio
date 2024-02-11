import { faCss3, faGithub, faGitSquare, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import picProfile from '../../assets/logo-2023-pink-outline-2023.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    return (

        <div className="container">

            <div className="row row-cols-1">

                <div className="col-md-12 pt-4">
                    {/* <div className="card mediaquerycenter">
                        <div className="card-body">
                            <div className="row row-cols-1">
                                <h5 className="card-title text-center">Education and Certifications</h5>
                                <div className="card-text">
                                    <h5 className="text-center">COMPTIA Security+ Certificate, awarded March 2023</h5>
                                    <h5 className="text-center">University of Denver: Full-Stack Coding Bootcamp Certificate</h5>
                                    <h5 className="text-center">Colorado State University: Bachelor of Arts in English Literature</h5>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row row-cols-1">

                        <div className="col-md-7 pt-4">
                            <div className="card mediaquerycenter edHeight">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Exciting news! I've started working on admission to the online Masters of Computer Science Program, through CU Boulder! I'm working on their Software Architecture class. Visit my GitHub to see my progress.</h5>
                                    <div className="card-text card-padding">
                                    I'm a full stack developer with a passion for creating stream-lined, attractive applications. My focus is on the frontend and UI portions of applications, and I work with software and systems engineers as an integral part of a development team to create technical solutions for DoD needs. I can assist your team in building and maintaining resilient, robust applications that provide flawless user experiences and design for your customers. 
                                    </div>
                                    <div className="card-text card-padding">
                                        I have experience developing in an Agile environment, including participating in daily standups,
                                        sprints, and PI planning. I have past experience with the MERN stack as well.
                                        I’m also working on growing my knowledge and skill by looking into Docker
                                        and Kubernetes. 
                                    </div>
                                    <div className="card-text card-padding">
                                        My former career was in education. I have ten years of direct educational experience
                                        and have worked as an instructor at various levels for that time. While in that field, I was data
                                        and results driven, and I regularly worked with large and small groups to ensure that students
                                        understood content. I created online learning content and was engaged actively with the switch
                                        to online learning during the pandemic. My past experience in education has prepared me for
                                        my career as a developer by giving me solid skills for communicating with customers and the
                                        business side of the house. I can easily converse about business needs and convert them into technical
                                        requirements and solutions to provide a great user experience.
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 pt-4">
                            <div className="mediaquerycenter">
                                <img src={picProfile} className="aboutPic" alt="me with a pink hat on" />
                            </div>
                        </div>

                        <div className="row row-cols-1">

                            <div className="col-md-7 pt-4">
                                <div className="card mediaquerycenter">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Skills</h5>
                                        <div className="card-text text-center">
                                            <p>Verbal and written communication, presenting and instructing, coaching, team player, adapts quickly, planning and implementing curriculum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-5 pt-4 text-center resume">
                                <a className="btn btn-success btn-block shadow-none" href={Pdf} download> Download a PDF of my Resumé</a>
                            </div> */}

                            <div className="col-md-5 pt-4">
                                <div className="card h-100 mediaquerycenter">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Programming Languages</h5>
                                        <div className="card-text">
                                            HTML, CSS, JavaScript, TypeScript, Java, Python, Kotlin
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-12 pt-4">

                        <div className="card mediaquerycenter">
                            <div className="card-body">
                                <div className="row row-cols-1">
                                    <h5 className="card-title text-center">Education and Certifications</h5>
                                    <div className="card-text">
                                        <h5 className="text-center">COMPTIA Security+ Certificate, awarded March 2023</h5>
                                        <h5 className="text-center">University of Denver: Full-Stack Coding Bootcamp Certificate</h5>
                                        <h5 className="text-center">Colorado State University: Bachelor of Arts in English Literature</h5>
                                    </div>
                                </div>

                                <div className="row row-cols-1">
                                    <div className="col-md-5 pt-4 text-center resume">
                                        {/* <a className="btn btn-success btn-block shadow-none" href={Pdf} download> Download a PDF of my Resumé</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>


                        <div className="row row-cols-1">

                            <div className="col-md-7 pt-4">
                                <div className="card h-100 card-padding mediaquerycenter">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-center">Technologies</h5>
                                        <div className="card-text down">
                                            Angular, React, NgRx, NodeJS, Git, GitHub, Insomnia, Postman, Sandbox,
                                            Mongoose, Express, MySQL, MongoDB, Heroku, Lighthouse, VS Code, MERN Stack, GraphQL, Webpack,
                                            Jenkins, Spring Boot, Maven
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-4 pt-4">
                                <div className="card h-100 card-padding mediaquerycenter">
                                    <div className="card-body">
                                        <h5 className="card-title text-center down">Programming Languages</h5>
                                        <div className="card-text">
                                            HTML, CSS, JavaScript, TypeScript, Java, Python
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-md-5 pt-4">
                                <div className="card h-100 card-padding mediaquerycenter">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Technical Concepts and Data</h5>
                                        <div className="card-text">
                                            CI/CD Pipelines, OOP, CRUD, RESTful web services, JSON, API, MVC,
                                            Progressive Web Applications, Responsive Design, UX/UI design
                                        </div>
                                    </div>
                                </div>
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
        </div>

    );
}
