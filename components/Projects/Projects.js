import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

/*import chatify from "../../Assets/Projects/restaurent.png";
import suicide from "../../Assets/Projects/Task.png";
import bitsOfCode from "../../Assets/Projects/ecomm.png";
*/
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
              imgPath="/Projects/restaurent.png"
              isBlog={false}
              title="SERVE-U"
              description="Serve-u is an innovative restaurant management application that enables consumers to scan QR codes, manage menus and categories, and place orders with ease. Offering a personalized experience, the app recommends menus, orders and tables according to the restaurant owner's preferences. Simplify your dining experience with Serve-u."
              ghLink="https://github.com/aziz-jenhani/aziz-serve-u"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/ecomm.png"
              isBlog={false}
              title="SUPER SHOP"
              description="Super Shop, the ultimate online clothing sales application. Explore our wide range of trendy clothing, create your shopping cart and take advantage of a secure and convenient payment process. What's more, our intuitive administrative interface lets you easily manage inventory, orders and promotions. Shop with ease and manage your business successfully with Super Shop."
              ghLink="https://github.com/aziz-jenhani/supershop-master.com"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/prompt.png"
              isBlog={false}
              title="PROMPT AI CHATGPT"
              description="PROMPT AI CHATGPT, A platform suggestion generator based on OpenAI for a web
              platform that allows to keep prompts andchange prompts from
              dynamic variables. This platform is being developed as part of an
              internship thatwill enable me to develop my skills in NEXTJS,
              TypeScript, Supabase, TailwindCss, Postman and also theproper use
              of openAi Key"
              ghLink="https://github.com/aziz-jenhani/horizon"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/mobile.jpg"
              isBlog={false}
              title="COURSEME"
              description="COURSEME, A mobile app for education courses built with React Native and Firebase offers a seamless learning experience on smartphones. It combines the cross-platform flexibility of React Native with the real-time data synchronization and authentication capabilities of Firebase, enabling interactive and accessible educational content for students on the go."
              ghLink="https://github.com/aziz-jenhani/"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/logify.png"
              isBlog={false}
              title="LOGIFY"
              description="LOGIFY, Develop a backend-as-a-service platform that provides users with
              access to a secure REST API for saving logs. The service will include
              a user dashboard for log management, comprehensive
              documentation for integration
              Languages and Frameworks TypeScript, PostgreSQL , NestJS,
              TypeORM, Bcrypt, jsonwebtoken,ReactJS, TailwindCSS"
              ghLink="https://github.com/aziz-jenhani/Logifys"
              demoLink=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/Task.png"
              isBlog={false}
              title="TASKIFY"
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
