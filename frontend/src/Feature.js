import {Container, Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import axios from "axios"
import Header from "./components/Header";
function Feature() {
    const { register, handleSubmit } = useForm();
    const postSubmit = async (data) => {
        await axios.post('/api/store',data)
        .then( (response) => {
              response.data.status==='connect'?console.log("done"):console.log("bad");
            })
        .catch( (error) => console.log(error))}
    return (
        <>
        <Header />
        <Container>
            <Form onSubmit={handleSubmit(data=>postSubmit(data))}>
                <Form.Group className="mb-3" >
                    <Form.Label>title</Form.Label>
                    <Form.Control {...register("title")}  placeholder="title" />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>textarea</Form.Label>
                    <Form.Control {...register("textarea")} as="textarea" rows={3}  placeholder="textarea" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
        </>
    );
  }
  
  export default Feature;