import {Container, Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import axios from "axios"
import Header from "./components/Header";
import Footer from "./components/Footer";

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
                <Form.Select {...register("select")} aria-label="Default select example">
                    <option>select category</option>
                    <option value="html">Html</option>
                    <option value="css">Css</option>
                    <option value="javascript">Javascript</option>
                    <option value="nodejs">Nodejs</option>
                    <option value="react">React</option>
                    <option value="mongodb">Mongodb</option>
                </Form.Select>
                <Form.Group className="mb-3" >
                    <Form.Label>title</Form.Label>
                    <Form.Control {...register("title")}  placeholder="title" />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>textarea</Form.Label>
                    <Form.Control style={{height:"960px"}} {...register("textarea")} as="textarea" rows={3}  placeholder="textarea" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
        <Footer />
        </>
    );
  }
  
  export default Feature;