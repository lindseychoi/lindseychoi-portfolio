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

        <div className="col-md-4 pt-4"></div>
          <div className="col-md-4 text-center pt-4">
            <img src={picIzzy} className="dogPic" alt="picture of izzy the dog" />
          </div>

          <div className="col-md-12 pt-4 text-center bigger-bolder">
              <a href="https://github.com/lindseychoi" className="fa-2xl fa-cog fa-flag logo-padding"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://linkedin.com/in/lindseychoi/" className="fa-2xl fa-cog fa-flag logo-padding"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://instagram.com/_lindseychoi_/" className="fa-2xl fa-cog fa-flag logo-padding"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        
        <div className="col-md-12 text-center pt-4">lindsey.e.choi@gmail.com</div>

        </div>

      </div>
    </div>
  );
}
