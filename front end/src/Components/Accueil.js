import ImageSlider from "./ImageSlider";
import './about.css'
const Acceuil = () => {
  const slides = [
    { url: "./images/image1.jpg", },
    { url: "./images/image2.jpg", },
    { url: "./images/image3.jpg",  },
    { url: "./images/image4.jpg",  },
    { url: "./images/image5.jpg",  },
    { url: "./images/image6.jpg",  },
    { url: "./images/image7.jpg",  },

  ];
  const containerStyles = {
    width: "1920px",
    height: "800px",
    margin: "0 auto",
  };
  return (
    <div>
   
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div className='container' style={{textAlign:'center'}}>
        <p>
          L'Hôpital MELKAT représente un joyau dans le paysage de la santé au Maroc. Constituant une part importante, avec plus de 15 % de la capacité totale en lits du pays, cet établissement incarne l'excellence des soins médicaux. Situé dans une ville clé du royaume, il se positionne en tant que centre médical multidisciplinaire de premier plan. Offrant une gamme complète de services de santé, l'Hôpital MELKAT est un pilier essentiel dans la prestation de soins de qualité à sa communauté locale.
        </p>
    </div>
    </div>
  );
};

export {Acceuil};