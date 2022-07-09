import React, { useState, useEffect }  from "react";
import {Container, Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import axios from "axios"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function Feature() {
    const { register, handleSubmit } = useForm();
    const [login , setLogin] = useState(false);
    const [status , setStatus] = useState(false);
    const getMember = async () => {
        await axios.get('/api/feature')
        .then( (response) => {
              response.data.status==='connect'?setLogin(true):console.log(response);
            })
        .catch( (error) => console.log(error))}
      
    const postSubmit = async (data) => {
        await axios.post('/api/store',data)
        .then( (response) => {
              response.data.status==='connect'?alert("Your text is being uploaded!"):alert("Error");
            })
        .catch( (error) => console.log(error))}
    useEffect(()=>{
        getMember();
    })
        return (
            <>
            <Header />
            <Container>
                <Form onSubmit={handleSubmit(data=>postSubmit(data))}>
                    <Form.Select {...register("select")} aria-label="Default select example">
                        <option>select category</option>
                        <option value="owner">owner</option>
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="javascript">javascript</option>
                        <option value="nodejs">nodejs</option>
                        <option value="react">react</option>
                        <option value="mongodb">mongodb</option>
                    </Form.Select>
                    <Form.Group className="mb-3" >
                        <Form.Label>title</Form.Label>
                        <Form.Control {...register("title")}  placeholder="title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>textarea</Form.Label>
                        <Form.Control style={{height:"960px"}} {...register("textarea")} as="textarea" rows={3}  placeholder="textarea" ></Form.Control>
                    </Form.Group>
                    {login?(<Button variant="primary" type="submit" >submit</Button>):""}
                </Form>
            </Container>
            <Footer />
            <Popup login={login} />
            </>
        );
    }
  
  export default Feature;