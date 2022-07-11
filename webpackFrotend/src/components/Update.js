import React, { useState, useEffect }  from "react";
import {Container, Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom";
import axios from "axios"
import Header from "./Header";
import Footer from "./Footer";
import LoadingBox from "./LoadingBox";
import Popup from "./Popup";



function Update() {
    const { id } = useParams();
    const [loading,setLoading] = useState(true); //Rendering componenent before implement useEffect , use loadingBox to avoiding map() blank array.
    const { register, handleSubmit } = useForm();
    const [login , setLogin] = useState(false);
    const [defaultValue, setDefaultValue] =  useState({});

    const postSubmit = async (data) => {
        await axios.post(`/api/replace/${id}`,data)
        .then( (response) => {
            response.data.status==='connect'?alert("Your text is being uploaded!"):alert("Error");
            window.location.href = "/";
            })
        .catch( (error) => console.log(error))
    };

    const deleteContext = async () => {
        
        await axios.get(`/api/delete/${id}`)
        .then( (response) => {
                response.data.status==='connect'?alert("Your text is being deleted!"):alert("Error");
                window.location.href = "/";
            })
        .catch( (error) => console.log(error))
    };

    useEffect(()=>{
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
            .catch((error) => console.log(error))
        };
        getMember();
        searchData()
    },[])
        return (
            <>
            <Header />
            {loading?<LoadingBox />:
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
                        <Form.Control {...register("title")}  defaultValue={defaultValue.title} placeholder="title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>textarea</Form.Label>
                        <Form.Control style={{height:"960px"}} {...register("textarea")} as="textarea" rows={3}  placeholder="textarea" defaultValue={defaultValue.textarea}></Form.Control>
                    </Form.Group>
                    {login?
                        <>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </>
                        :""
                    }
                </Form>
                {login?<Button onClick={()=>{deleteContext()}} style={{position:"relative",bottom:"38px",left:"100px",width:"75px"}} variant="primary" type="submit" >
                    delete
                </Button>:""}
            </Container>
            }
            <Footer />
            <Popup login={login} />
            </>
        );
    }
export default Update;