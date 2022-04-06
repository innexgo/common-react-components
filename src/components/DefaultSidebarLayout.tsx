import React from 'react';
import { ArrowRight, House, PersonPlus, Gear, FileText } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import BrandedComponentProps from '../components/BrandedComponentProps';

const gradText = {
  background: "linear-gradient(#B7C9D6, #E6D5B8)",
  color: "transparent",
  backgroundClip: "text",
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

const DefaultSidebarLayout: React.FC<BrandedComponentProps> = (props) =>
  <Container fluid>
    <Row style={{ minHeight: "100vh" }}>
      <Col xl="2" className="px-5 py-5" style={{ backgroundColor: '#1C2B2D' }}>
        <a href={props.branding.homeUrl}><img src={props.branding.darkAdaptedIcon} alt={`${props.branding.name} Icon`} /></a>
        <h4 style={gradText} >{props.branding.name}</h4>
        <a href={props.branding.homeUrl} style={linkStyle}>
          <House style={iconStyle} /> Home
        </a>
        <br />
        <a href={props.branding.dashboardUrl} style={linkStyle}>
          <ArrowRight style={iconStyle} /> Log In
        </a>
        <br />
        <a href={props.branding.registerUrl} style={linkStyle}>
          <PersonPlus style={iconStyle} /> Register
        </a>
        <br />
        {props.branding.instructionUrl === undefined ?
          null
          : <>
            <a href={props.branding.instructionUrl} style={linkStyle}>
              <FileText style={iconStyle} /> Instructions
            </a>
            <br />
          </>
        }
        {props.branding.tosUrl === undefined ?
          null
          : <>
            <a href={props.branding.tosUrl} style={linkStyle}>
              <Gear style={iconStyle} /> Terms of Service
            </a>
            <br />
          </>
        }
      </Col>
      <Col className="px-5 py-5">
        {props.children}
      </Col>
    </Row>
  </Container>

export default DefaultSidebarLayout;
