import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../assets/lindsey-choi-logo-trimmed.png';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
function NavBar({ currentPage, handlePageChange }) {

  return (
    <div>
      <div className="logo">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
          style={{color:'white'}}>

            <img src={logo} className="card-img-top" alt="Lindsey Choi: Full Stack Developer"/>
        </a>
      </div>
      <ul className="customNav nav justify-content-center">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'fa-cog:hover' : 'fa-cog'}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'fa-cog:hover' : 'fa-cog'}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faCode} />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'fa-cog:hover' : 'fa-cog'}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
