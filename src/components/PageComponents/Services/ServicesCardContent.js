import React from "react";

import Card from "react-bootstrap/Card";
import servicescardcontentStyles from "./ServicesCardContent.module.css";
import Button from "../../button";

import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSnapchat } from "@fortawesome/free-brands-svg-icons"

class ServicesCardContent extends React.Component {
  render() {
    return (
      <>
        <Card.Title className={servicescardcontentStyles.cardTitle}>
          <h1>Services I Offer</h1>
        </Card.Title>
        <Card.Body className={servicescardcontentStyles.cardBody}>
          <Container>
              <Row>
                <Col>
                    <div style={{display: 'inline-block', height: '10em', width: '10em', outline: '2px solid', outlineColor: 'white'}} />
                </Col>

                <Col>
                <div style={{display: 'inline-block', height: '10em', width: '10em', outline: '2px solid', outlineColor: 'white'}} />
                </Col>

                <Col>
                <div style={{display: 'inline-block', height: '10em', width: '10em', outline: '2px solid', outlineColor: 'white'}} />
                </Col>
              </Row>
            <Card.Text>
              <ul>
                <li>Website Design, Development, and Maintenance</li>
                <li>
                  Mautic Marketing Automation -Shared Accounts -Personal
                  Installs
                </li>
                <li>
                  Video Conferencing Server Installs -Embed in your website
                </li>
              </ul>
              {/*<div style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                }}>
              {/ **<Button primary prefetch href="/gallery">Gallery display</Button>** /}
              <Button primary prefetch as={Link} to="/services">My Services</Button>

              <Button primary prefetch href="https://behance.net/codestaff-salem">Portfolio on Behance</Button>
              
              <Button primary prefetch href="https://codestaff-salem.appointlet.com/s/1-hour-consultation/salem">Book Consultation</Button>
            </div>*/}
            </Card.Text>
          </Container>
        </Card.Body>
      </>
    );
  }
}

export default ServicesCardContent;
