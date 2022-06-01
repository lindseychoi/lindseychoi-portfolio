import React from 'react';
import picIzzy from '../../assets/izzy-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div>
      <div className="container">

        <div className="row">

        <div className="col-md-2 pt-4"></div>

          <div className="col-md-5 pt-4">
            <div className="card card-padding-2 height-100">
              <div className="row">

                <div className="col-md-12 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                    <div className="row">

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input type="text" id="name" name="name" className="form-control"></input>
                          <label for="name" className="">name</label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input type="text" id="email" name="email" className="form-control"></input>
                          <label for="email" className="">email</label>
                        </div>
                      </div>

                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input type="text" id="subject" name="subject" className="form-control"></input>
                          <label for="subject" className="">subject</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-md-12">

                        <div className="md-form">
                          <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                          <label for="message">message</label>
                        </div>

                      </div>
                    </div>

                  </form>

                  <div className="text-center text-md-left">
                    <a className="btn btn-success" onclick="document.getElementById('contact-form').submit();">Send</a>
                  </div>
                  <div className="status"></div>
                </div>

              </div>
            </div>
            <div className="col-md-12 pt-4 text-center bigger-bolder">
              <a href="https://github.com/lindseychoi" className="fa-2xl fa-cog fa-flag logo-padding"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://linkedin.com/in/lindseychoi/" className="fa-2xl fa-cog fa-flag logo-padding"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://instagram.com/_lindseychoi_/" className="fa-2xl fa-cog fa-flag logo-padding"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>

          </div>

          <div className="col-md-4 pt-4">
            <img src={picIzzy} className="aboutPic" alt="picture of izzy the dog" />
          </div>

        </div>

      </div>
    </div>
  );
}
