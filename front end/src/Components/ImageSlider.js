import Carousel from 'react-bootstrap/Carousel';
import aniss from './imageSlider.module.css'

function DarkVariant() {
  const styleimageslide={
    height: '88vh'
  }
 
  
  return (
    <>
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100 " style={styleimageslide}
          src='./images/image1.jpg'
          alt="First slide"

        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"style={styleimageslide}
          src='./images/image2.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={styleimageslide}
          src='./images/image3.jpg'
          alt="Third slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={styleimageslide}
          src='./images/image4.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  <div className={aniss.body_for}>
    <div >
       <p style={{fontSize:'2rem'}}>L'hôpital MELKAT incarne un pilier essentiel dans le domaine de la santé, offrant des soins de premier plan et des services de qualité. En tant que référence incontournable dans le secteur de la santé privée, MELKAT se distingue par sa capacité à répondre aux besoins médicaux les plus exigeants. Fort de son engagement envers l'excellence, l'hôpital MELKAT représente un établissement moderne et dévoué, contribuant de manière
        significative au bien-être de ses patients et à l'innovation dans le domaine de la santé</p>
    </div>

  </div>

    </>
  );
}

export default DarkVariant;