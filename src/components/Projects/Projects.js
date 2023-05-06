import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/restaurent.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/ecomm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Serve-u"
              description="Serve-u est une application de gestion de restaurant innovante qui permet aux consommateurs de scanner les QR codes, de gérer les menus et les catégories, et de passer facilement des commandes. Proposant une expérience personnalisée, l'application recommande les menus, les commandes et les tables selon les préférences du propriétaire du restaurant. Simplifiez votre expérience de restauration avec Serve-u."
              ghLink="https://github.com/aziz-jenhani/aziz-serve-u"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Super Shop"
              description="Super Shop, l'application ultime de vente en ligne de vêtements. Explorez notre large gamme de vêtements tendance, créez votre panier et profitez d'un processus de paiement sécurisé et pratique. De plus, notre interface administrative intuitive vous permet de gérer facilement les stocks, les commandes et les promotions. Faites du shopping avec facilité et gérez votre entreprise avec succès grâce à Super Shop."
              ghLink="https://github.com/aziz-jenhani/supershop-master.com"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
