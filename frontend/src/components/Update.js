import React, { useState, useEffect }  from "react";
import {Container, Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom";
import axios from "axios"
import Header from "./Header";
import Footer from "./Footer";
import AlertDissmis from "./AlertDissmis";
import LoadingBox from "./LoadingBox";
import Popup from "./Popup";



function Update() {
    const { id } = useParams();
    const [loading,setLoading] = useState(true); //Rendering componenent before implement useEffect , use loadingBox to avoiding map() blank array.
    const { register, handleSubmit } = useForm();
    const [login , setLogin] = useState(false);
    const [defaultValue, setDefaultValue] =  useState({});
    const searchData = async () => {
        try{
          setLoading(true)
          const {data}=await axios.get(`/api/search/${id}`)
          setDefaultValue(data[0])
          setLoading(false)
        }catch(err){console.log(err)}  
      };
    const getMember = async () => {
        await axios.get('/api/feature')
        .then( (response) => {
              response.data.status==='connect'?setLogin(true):console.log(response);
            })
        .catch( (error) => console.log(error))}
      
    const postSubmit = async (data) => {
        await axios.post(`/api/replace/${id}`,data)
        .then( (response) => {
              response.data.status==='connect'?console.log("done"):console.log("bad");
            })
        .catch( (error) => console.log(error))}

    const deleteContext = async () => {
        await axios.get(`/api/delete/${id}`)
        .then( (response) => {
                response.data.status==='connect'?console.log("done"):console.log("bad");
            })
        .catch( (error) => console.log(error))}
    useEffect(()=>{
        getMember();
        searchData()
        console.log(defaultValue)
    },[])
        return (
            <>
            <Header />
            {loading?<LoadingBox />:
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
                        <Form.Control {...register("title")}  defaultValue={defaultValue.title} placeholder="title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>textarea</Form.Label>
                        <Form.Control style={{height:"960px"}} {...register("textarea")} as="textarea" rows={3}  placeholder="textarea" defaultValue={defaultValue.textarea}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    <Button onClick={()=>{deleteContext()}} variant="primary" type="submit" >
                        delete
                    </Button>
                </Form>
            </Container>
             }
            <Footer />
            <Popup login={login} />
            </>
        );
    }
  
  
  export default Update;