import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Card, Container, Button} from "react-bootstrap"
import {useParams} from "react-router-dom";
import Embed from "./Embed";
import Header from "./Header"
import LoadingBox from "./LoadingBox";

function Detail() {
    const { id } = useParams();
    const [ texts , setTexts ] = useState({});
    const [loading,setLoading] = useState(true);
    const regex = /Rickyzie.+/;
    
    useEffect(()=>{
      const getData = async () => {
        try{
        const {data}=await axios.get(`/api/Detail/${id}`);
        console.log(data);
        setTexts(data);
        setLoading(false);
        }catch(err){console.log(err)};
      };
      getData();
    },[]);
    return (
      <Container>
      <Header />
      <Card>
        <Card.Header style={{display:"flex",justifyContent:"space-between", alignItems:"center", width:"auto", padding:"0px 10px"}}>
            <p style={{marginTop:"12px"}} >{texts.select}</p>
            <Button  href ={`/Update/${id}`} variant="primary">Edit...</Button>
        </Card.Header>
          <Card.Body style={{height:"auto"}}>
              <Card.Title>{texts.title}</Card.Title>
              <Card.Text style={{height:"auto"}}>
              {loading?<LoadingBox />
              :texts.textarea.split("\n").map((x)=>{
                if(regex.test(x)){
                    console.log(x)
                    return <Embed src={x}/>

                }else if(!x){
                    return <p style={{marginBottom:"1px"}}>&nbsp;</p>
                }else{
                    const newX = x.replace(/\s/g,"\u00A0")
                    return <p style={{marginBottom:"1px"}}>{newX}</p>
                }
            })}
              </Card.Text>
          </Card.Body>
      </Card>
      </Container>
  );}

  export default Detail;