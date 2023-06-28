import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/restaurent.png";
import suicide from "../../Assets/Projects/Task.png";
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
              description="Serve-u is an innovative restaurant management application that enables consumers to scan QR codes, manage menus and categories, and place orders with ease. Offering a personalized experience, the app recommends menus, orders and tables according to the restaurant owner's preferences. Simplify your dining experience with Serve-u."
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
              description="Super Shop, the ultimate online clothing sales application. Explore our wide range of trendy clothing, create your shopping cart and take advantage of a secure and convenient payment process. What's more, our intuitive administrative interface lets you easily manage inventory, orders and promotions. Shop with ease and manage your business successfully with Super Shop."
              ghLink="https://github.com/aziz-jenhani/supershop-master.com"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Taskify"
              description="Taskify is a task management application that helps you stay organized and productive. Create tasks, add labels,  and track their progress. You can easily rearrange tasks using drag and drop and mark completed tasks. Taskify simplifies task management, whether it's for personal to-do lists or collaborative projects. Stay organized and achieve your goals with Taskify."
              ghLink="https://github.com/aziz-jenhani/Taskify"
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
