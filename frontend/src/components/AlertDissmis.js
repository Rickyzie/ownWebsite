import React from "react";
import {Alert, Button, Container} from "react-bootstrap"
import Header from "./Header";

function AlertDissmis() {
    return (
      <>
      <Header />
      <Container>
        <Alert >
          <Alert.Heading>Please Login!</Alert.Heading>
          <Button variant="danger"  href="/Login">Login</Button>
        </Alert>
      </Container>
      </>
    );
}
  export default AlertDissmis;