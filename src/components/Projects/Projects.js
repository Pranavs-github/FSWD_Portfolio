import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tour from "../../Assets/Projects/tour.png";
import vote from "../../Assets/Projects/vote.png";
import tdp from "../../Assets/Projects/tdp.png";
import vnet from "../../Assets/Projects/vnet.png";

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
              imgPath={tour}
              title="Tours of India"
              description="Designed and implemented a front-end website for tour exploration using HTML, CSS, and basic JavaScript. Focused on creating an intuitive and visually appealing user interface (UI) for a positive user experience."
              tech="HTML, CSS, JavaScript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tdp}
              title="TDP project management system"
              description="Contributed to the full-stack development of a web application for ISRO MCF's R&D department. Built a tiered permission system to manage user roles and ensure secure access."
              tech="HTML, CSS, JavaScript, Node.js, Express, MySQL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              title="Digital Voting System"
              description="Developed a secure digital voting platform allowing users to vote remotely with OTP-based authentication. Created backend logic and a user-friendly interface."
              tech="PHP, XAMPP, MySQL"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vnet}
              title="V-Net for Blood Smear Analysis"
              description="Implemented V-Net, a convolutional neural network, for segmentation of leukemia cells in blood smear images. Applied deep learning and image processing techniques to identify and localize affected regions."
              tech="Python, PyTorch, OpenCV"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
