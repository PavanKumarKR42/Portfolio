import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple"><b>Pavan Kumar K R</b></span>, a Computer Science Engineering student at BNM Institute of Technology.
            <br />
            I'm passionate about solving real-world problems through technology, with a focus on software and web development.
            <br />
            I enjoy participating in hackathons and coding contests, and value communication and teamwork for project success.
            <br /><br />
            Outside of tech, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
  
          <p style={{ color: "rgb(155 126 172)" }}>
            "Build, learn, and grow through every challenge!"
          </p>
          <footer className="blockquote-footer">Pavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
  
}

export default AboutCard;
