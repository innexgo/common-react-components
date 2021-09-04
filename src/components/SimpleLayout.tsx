import React from 'react';
import { ArrowRight, House, PersonPlus, Gear, FileText } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import BrandedComponentProps from '../components/BrandedComponentProps';

const gradText = {
  background: "linear-gradient(#B7C9D6, #E6D5B8)",
  color: "transparent",
  backgroundClip: "text",
  webkitBackgroundClip: "text",
  fontWeight: "bold" as "bold",
  marginBottom: "50px"
}

const iconStyle = {
  color: "#E6D5B8",
  minHeight: "2rem",
  minWidth: "2rem",
  marginRight: "10px",
  marginLeft: "-20px"
}

const linkStyle = {
  color: "white",
  fontWeight: 550,
  display: "flex",
  marginTop: "15px",
  alignItems: "center"
}

const SimpleLayout: React.FC<BrandedComponentProps> = (props) =>
  <Container fluid>
    <Row style={{ minHeight: "100vh" }}>
      <Col xl="2" className="px-5 py-5" style={{ backgroundColor: '#1C2B2D' }}>
        <a href="/"><img src={props.branding.darkAdaptedIcon} alt="Application Icon" /></a>
        <h4 style={gradText} >{props.branding.name}</h4>
        <a href="/" style={linkStyle}>
          <House style={iconStyle} /> Home
        </a>
        <br />
        <a href="/dashboard" style={linkStyle}>
          <ArrowRight style={iconStyle} /> Log In
        </a>
        <br />
        <a href="/register" style={linkStyle}>
          <PersonPlus style={iconStyle} /> Register
        </a>
        <br />
        <a href="/instructions" style={linkStyle}>
          <FileText style={iconStyle} /> Instructions
        </a>
        <br />
        <a href="/terms_of_service" style={linkStyle}>
          <Gear style={iconStyle} /> Terms of Service
        </a>
        <br />
      </Col>
      <Col className="px-5 py-5">
        {props.children}
      </Col>
    </Row>
  </Container>

export default SimpleLayout;
