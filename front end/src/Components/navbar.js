import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'; 
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <li className={styles.link}><Link to="/login">se connecter</Link></li>
        </ul>
        <button className={styles.appointment_button} onClick={handleShow}>Prendre un rendez-vous</button>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rendez-vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="px-4 py-3">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control placeholder="Prénom" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control placeholder="Nom" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCIN">
                <Form.Label>CIN</Form.Label>
                <Form.Control placeholder="CIN" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridPhone">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control placeholder="+212 " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridPhone">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridDate">
              <Form.Label>Date de rendez-vous</Form.Label>
              <Form.Control type='date' />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDepartment">
                <Form.Label>Département</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Selectionnez</option>
                  <option>Cardiologie</option>
                  <option>Orthopédie</option>
                  <option>Oncologie</option>
                  <option>Neurologie</option>
                  <option>Soins Maternels</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ville</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-primary' onClick={handleClose}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </nav>
  );
};
