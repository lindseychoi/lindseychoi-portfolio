import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../assets/logo-2023-dark.jpg';
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import Pdf from '../assets/Lindsey-Choi-Resume.pdf';

function NavBar({ currentPage, handlePageChange }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Pdf;
    link.download = 'lc-resume.pdf'; // Set the filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ul className="customNav nav justify-content-left">
        <li className="logo nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          
          style={{color:'white'}}>

            <img src={logo} className="card-img-top" alt="Lindsey Choi: Full Stack Developer"/>
        </a>
        </li>
        <li className="nav-item down">
          <a
            className='fa-cog'
            onClick={handleDownload}
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faDownload}/>
          </a>   
        </li>
        <li className="nav-item down">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className='fa-cog'
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li className="nav-item down">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className='fa-cog'
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faCode} />
          </a>
        </li>
        <li className="nav-item down">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className='fa-cog'
            style={{color:'white', padding: '25px'}}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

