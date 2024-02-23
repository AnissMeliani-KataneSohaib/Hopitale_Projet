import React from "react";
import style from "./infos.module.css";
import Footer from "./Footer";

const Infos = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ marginTop: "200px" }} className={style.body}>
        <h1
          style={{
            paddingLeft: "200px",
            color: "#26db2b",
            fontFamily: "'Lora', serif",
            fontWeight: "bold",
          }}
        >
          À Propos de Notre Hôpital
        </h1>
        <div style={{ display: "flex", gap: "50PX", margin: "60px" }}>
          <p
            style={{
              padding: "200px",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#334389",
            }}
          >
            Bienvenue à MELKAT, où nous nous engageons à fournir des services de
            santé de haute qualité à notre communauté. Depuis 2023, nous nous
            sommes engagés à offrir des soins compatissants et d'excellents
            résultats médicaux à nos patients.
          </p>
          <img src="./images/hospital.jpg" width="500px" height="200px" />
        </div>

        <h2
          style={{
            paddingLeft: "200px",
            color: "#26db2b",
            fontFamily: "'Lora', serif",
            fontWeight: "bold",
          }}
        >
          Nos Services
        </h2>
        <ul
          style={{ fontWeight: "bold", color: "#334389", paddingLeft: "280px" }}
        >
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>
            Cardiologie
          </li>
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>Orthopédie</li>
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>Oncologie</li>
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>Neurologie</li>
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>
            Chirurgie Générale
          </li>
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>
            Soins Maternels
          </li>
          <li style={{ marginBottom: "20px", fontSize: "26px" }}>Et plus...</li>
        </ul>

        <h2>Nos Installations</h2>
        <p>
          Notre hôpital est équipé de technologies médicales de pointe et
          d'aménagements confortables pour garantir la meilleure expérience
          possible à nos patients. Des outils de diagnostic avancés aux chambres
          spacieuses pour les patients, nous nous efforçons de créer un
          environnement de guérison pour tous ceux qui franchissent nos portes.
        </p>

        <h2>Rencontrez Notre Équipe</h2>
        <p>
          À [Nom de Votre Hôpital], nous avons une équipe de professionnels de
          la santé hautement qualifiés et compatissants dédiés à fournir des
          soins personnalisés à chaque patient. Des médecins certifiés aux
          infirmières expérimentées en passant par le personnel de soutien, nous
          sommes là pour vous soutenir dans votre parcours vers la santé et le
          bien-être.
        </p>

        <h2>Emplacement et Contact</h2>
        <p>
          <strong>Adresse :</strong> [Adresse de Votre Hôpital]
          <br />
          <strong>Téléphone :</strong> [Numéro de Téléphone de Votre Hôpital]
          <br />
          <strong>Email :</strong> [Adresse Email de Votre Hôpital]
          <br />
          <strong>Horaires :</strong> [Horaires d'ouverture de l'hôpital]
          <br />
        </p>

        <h2>Assurance et Paiement</h2>
        <p>
          Nous acceptons la plupart des principaux plans d'assurance, y compris
          [Liste des Plans d'Assurance Acceptés]. Pour les patients sans
          assurance, nous proposons des options de paiement flexibles et des
          programmes d'aide financière. Notre objectif est de garantir que tout
          le monde ait accès aux soins dont il a besoin, quelles que soient ses
          circonstances financières.
        </p>

        <h2>Ressources pour les Patients</h2>
        <p>
          Pour votre commodité, nous offrons un accès en ligne aux formulaires
          de patients, aux documents d'éducation sur la santé et à d'autres
          ressources. Veuillez visiter notre site Web pour en savoir plus et
          accéder à ces ressources précieuses.
        </p>

        <h2>FAQ</h2>
        <p>
          Vous avez des questions sur notre hôpital ou nos services ? Consultez
          notre section FAQ pour obtenir des réponses aux questions fréquemment
          posées. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à
          nous contacter directement - nous sommes là pour vous aider !
        </p>
      </div>
      <Footer />
    </>
  );
};

export { Infos };
