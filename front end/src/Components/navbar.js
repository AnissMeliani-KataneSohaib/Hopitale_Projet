import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'; 

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} style={{height:'70px'}}>
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <img src="./images/logo.png" alt="hospitalLogo" className={styles.img_logo} />
        </div>
        <ul className={styles.nav_links}>
          <li className={styles.link}><Link to="/">Acceuil</Link></li>
          <li className={styles.link}><Link to="/contact">Contact</Link></li>
          <li className={styles.link}><Link to="/Recrutement">Recrutement</Link></li>
          <li className={styles.link}><Link to="/infos">Infos</Link></li>
          <li className={styles.link}><Link to="/login">Login</Link></li>
        </ul>
        <button className={styles.appointment_button}>Prendre un rendez-vous</button>
      </div>
    </nav>
  );
};
