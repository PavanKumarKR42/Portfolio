import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import socialapp from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialapp}
              isBlog={false}
              title="MERN Social Media App"
              description="A full-stack social media application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Integrated Docker for containerization and Jenkins for CI/CD automation. Includes features like user authentication, posts, likes, comments, and real-time updates."
              ghLink="https://github.com/PavanKumarKR42/mern-social-media-app"
              // demoLink="your-demo-link-here" // Optional: Add if you deploy it
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
