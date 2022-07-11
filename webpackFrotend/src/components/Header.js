import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {Navbar , Nav , Container ,Button} from "react-bootstrap"

function Header() {
  const [status,setStatus] = useState("")
  const [logoutButton,setlogoutButton] = useState(false)
  const getMember = async () => {
    await axios.get('/api/feature')
    .then( (response) => {
          if(response.data.status==='connect'){
            setStatus(response.data.name);
            setlogoutButton(true);
          }else{
            setlogoutButton(false);
          };
        })
    .catch( (error) => console.log(error))}

    const logOut = async () => {
      await axios.get('/api/logout')
      .then( (response) => {
            if(response.data.status==='connect'){
              setStatus(response.data.name);
              window.location.href = "/"
              setlogoutButton(false);
            }else{
              setlogoutButton(true);
            };
          })
      .catch( (error) => console.log(error))}

    useEffect(()=>{
      getMember()
    },[]);
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">無名程式站</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/feature">Submit</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/Sign">Sign up</Nav.Link>
        </Nav>
        歡迎登入 {status}
        {logoutButton?<Button onClick = {()=>{logOut()}}>Logout</Button>:<div></div>}
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default Header;