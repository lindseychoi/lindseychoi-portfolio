import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../assets/logo-2023-dark.jpg';
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
function NavBar({ currentPage, handlePageChange }) {

  return (
    <div>
      <ul className="customNav nav justify-content-left">
        <li className="logo nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
          style={{color:'white'}}>

            <img src={logo} className="card-img-top" alt="Lindsey Choi: Full Stack Developer"/>
        </a>
        </li>
        <li className="nav-item down">
          <a
            href="#about"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'About' ? 'fa-cog:hover' : 'fa-cog'}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </li>
        <li className="nav-item down">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'fa-cog:hover' : 'fa-cog'}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li className="nav-item down">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'fa-cog:hover' : 'fa-cog'}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faCode} />
          </a>
        </li>
        <li className="nav-item down">
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
