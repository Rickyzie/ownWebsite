import React from "react";
import {Card,Button} from "react-bootstrap"

function Article(props) {
    const {text}=props
    return (
        <div>
        <Card>
            <Card.Header>{text._id}</Card.Header>
            <Card.Body>
                <Card.Title>{text.title}</Card.Title>
                <Card.Text>
                {text.textarea.split("\n").map((x)=>{
                    if(!x){
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