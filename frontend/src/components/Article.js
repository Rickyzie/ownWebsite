import React from "react";
import {Card,Button} from "react-bootstrap"

function Article(props) {
    const {text}=props
    return (
        <div>
        <Card>
            <Card.Header>{text.select}</Card.Header>
            <Card.Body style={{height:"auto"}}>
                <Card.Title>{text.title}</Card.Title>
                <Button href ={`/Article/${text._id}`} variant="primary">More...</Button>
            </Card.Body>
        </Card>
        </div>
    );
  }
  
  export default Article;