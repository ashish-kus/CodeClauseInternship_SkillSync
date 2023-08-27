import React, { useState } from 'react';
import './styles/landing.css';


export const Landing = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prevMenuActive => !prevMenuActive);
  };
  return (
    <>
      <section className={`showcase ${menuActive ? 'active' : ''}`}>
        <header>
          <h2 className="logo">SkillSync_</h2>
          <div className={`toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          </div>
        </header>
        <video src="https://traversymedia.com/downloads/videos/explore.mp4" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2 className=''>SkillSync </h2>
          <h3>Exploring The World Of Tech</h3>
          <p> This is a cloud-based software platform designed to help individuals and organizations manage and develop their skills effectively. The core idea behind SkillSync is to bridge the gap between learning and application, ensuring that acquired skills are put to practical use in both personal and professional contexts.</p>
          <a href="#">Explore</a>
        </div>
      </section>
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  );
};
