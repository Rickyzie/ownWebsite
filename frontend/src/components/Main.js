import React, { useState, useEffect }  from "react";
import axios from "axios"
import Intro from "./Intro";
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import Article from "./Article";
import { useForm } from "react-hook-form";

function Main() {
    const [texts , setTexts]=useState([]);
    const { register, handleSubmit } = useForm();

    
    const getData = async () => {
        const {data}=await axios.get('/api/data');
        setTexts(data);
    };
    const [resize , setResize] = useState(false);
        
    const handleRWD=()=>{
        if(window.innerWidth>1400){
            setResize(true);
        }else{
            setResize(false);
        };
    };

    const searchData = async (obj) => {
      try{
        const {data}=await axios.get('/api/search',{params:obj})
        console.log(data)
      }catch(err){console.log(err)}  
    };

    useEffect(()=>{ 
        window.onresize = handleRWD;
        getData()
        handleRWD();
    },[]);
    
    return (
        <Container  fluid style={{marginRight:"0px",marginLeft:"0px",padding:0}}>
            <Row style={{height:"100vh",marginTop:"20px"}} >
                <Col xs={1} sm={1} xxl={1}></Col>
                <Col xs={12} sm={10} xxl={9} style={{padding:0}}>
                    <Form style ={{display:"flex"}} onSubmit={handleSubmit(data=>searchData(data))}>
                        <Form.Control {...register("search")} type="text" placeholder="Search" />
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        <div style={{width:"200%"}}></div>
                    </Form>
                    {texts.map((text)=>{
                        return <Article key={text._id} text={text} />
                    })}
                </Col>
                {resize?<Col xxl={2}><Intro /></Col>:<Col xs={1} sm={1}></Col>}
            </Row>
            <div ></div>
            </Container>
    );
  }
  
  export default Main;