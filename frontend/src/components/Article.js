import React from "react";
import {Card,Button} from "react-bootstrap"
import Embed from "./Embed";

function Article(props) {
    const {text}=props
    let regex = /<script.+<\/script>/
    return (
        <div>
        <Card>
            <Card.Header>{text._id}</Card.Header>
            <Card.Body style={{height:"auto"}}>
                <Card.Title>{text.title}</Card.Title>
                <Card.Text style={{height:"auto"}}>
                {text.textarea.split("\n").map((x)=>{
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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
  }
  
  export default Article;