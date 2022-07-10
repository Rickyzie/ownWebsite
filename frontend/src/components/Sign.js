import React,{useState} from "react";
import Header from "./Header";
import LoadingBox from "./LoadingBox";
import {Container , Form , Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SHA3 } from 'sha3';

function Sign() {
    const { register, handleSubmit } = useForm();
    const [res,setRes] = useState("");
    const [loading,setLoading] = useState(false);
    const postData = async (data) => {
        setLoading(true)
        const hash = new SHA3(256);
        hash.update(data.password);
        data = {...data,password:hash.digest('hex')};
        await axios.post('/api/sign',data)
        .then( (response) => {
            setRes(response.data);
            setLoading(false);
        })
        .catch( (error) => console.log(error))
    };
    return (
        <div>
            <Header/>
            <Container className="justify-content-center" style={{display:"flex",marginTop:200}}>            
                <Form onSubmit={handleSubmit((data)=>postData(data))} className="w-50  text-white " style={{padding:30,boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.7)",border:"solid"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>暱稱</Form.Label>
                        <Form.Control {...register("name")} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>電子郵件</Form.Label>
                        <Form.Control {...register("email")} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control {...register("password")} placeholder="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div style={{marginBottom:20}}>{loading?<LoadingBox/>:<p></p>}{res}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    提交註冊
                    </Button>
                </Form>              
            </Container>
        </div>
    );
  }
  
  export default Sign;