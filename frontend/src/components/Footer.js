import React from "react";
import {Container , Row , Col ,Image } from "react-bootstrap"

function Footer() {
    return (
      <Container>
        <Row>
          <Col xs={3} >
          <Image style={{ width: '50%' }} roundedCircle variant="top" src="https://media.gq.com.tw/photos/628b2ec34824d010bb0b3cd4/1:1/w_360,h_360,c_limit/165306325038.jpeg" />
          </Col>
          <Col xs={3}>
            <Col>畢業於海洋大學水產養殖系</Col>
            <Col>經歷過太多與魚魚生離死別</Col>
            <Col>立志用程式碼寫一隻永生魚</Col>
          </Col>
          <Col xs={3} >
            Coyright by Rickyzie
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Footer;