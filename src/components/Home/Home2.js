import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
} from "react-icons/ai";
import { } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an aspiring Software Developer <br />
              currently pursuing a Bachelor's degree in Computer Science.<br />
              <br />
              Throughout my academic journey, I have gained strong foundational knowledge and practical experience in programming languages like Python and C.<br />
              I have also explored various areas of web development, working with technologies such as HTML, CSS, JavaScript, Node.js, React, and PHP.<br />
              <br />
              To further enhance my skills,<br />
              I completed an internship at ISRO's Master Control Facility (MCF), where I had the valuable opportunity to work collaboratively with a team on a full-stack web development project.<br />
              This hands-on experience helped me apply my learning in real-world scenarios and strengthened my interest in building efficient and scalable software solutions.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
