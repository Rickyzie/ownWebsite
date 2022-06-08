import React, { useState, useEffect }  from "react";
import axios from "axios"
import Intro from "./Intro";
import {Container,Row,Col} from "react-bootstrap"
import Article from "./Article";

function Main() {
    const [texts , setTexts]=useState([])
    
    const getData = async () => {
        const {data}=await axios.get('/api/data')
        setTexts(data)
    }
    const [resize , setResize] = useState(false)
        
    const handleRWD=()=>{
        if(window.innerWidth>1400){
            setResize(true);
        }else{
            setResize(false);
        };
    }
    useEffect(()=>{ 
        window.onresize = handleRWD;
        getData()
        handleRWD();
    },[]);
    
    return (
        <Container  fluid style={{marginRight:"0px",marginLeft:"0px",padding:0}}>
            <Row style={{height:"100vh",marginTop:"20px"}} >
                <Col xs={1} sm={1} xxl={1}></Col>
                <Col xs={10} sm={10} xxl={9}>
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