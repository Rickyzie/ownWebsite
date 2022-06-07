import React from "react";
import {Container,Row,Col,Image,Card,ListGroup,ListGroupItem } from "react-bootstrap"

function Slider() {
    return (
        <Container  fluid style={{marginRight:"0px",marginLeft:"0px"}}>
            <Row style={{height:"100vh"}} >
                <Col xs={1}>
                </Col>
                <Col xs={8}>2 of 3 </Col>
                <Col xs={3}>
                    <Row style={{display:"flex",marginTop:"60px"}}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://miro.medium.com/fit/c/112/112/1*Vs6Y6oeVrBnFXZ_przcs4Q.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                    </Row>
                </Col>
            </Row>
            <div ></div>
            </Container>
    );
  }
  
  export default Slider;