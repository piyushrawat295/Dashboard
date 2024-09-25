import React from 'react';
import '../profile.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../logo.jpg';

const ProfileCard: React.FC = () => {
  return (
    <div className="card2">
      <div className="cover-photo">
        <img src={logo} alt="Profile" className="profile" />
      </div>
      <h3 className="profile-name text-2xl font-semibold">Piyush Rawat</h3>
      <p className="about gap-3">
        Designer's DashBoard <br /> React Developer
      </p>
      <div className="icons">
        <FontAwesomeIcon icon={faLinkedin} className='icon' />
        <FontAwesomeIcon icon={faGithub} className='icon' />
        <FontAwesomeIcon icon={faYoutube} className='icon' />
        <FontAwesomeIcon icon={faTwitter} className='icon' />
      </div>
    </div>
  );
};

export default ProfileCard;
