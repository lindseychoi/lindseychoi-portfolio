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
