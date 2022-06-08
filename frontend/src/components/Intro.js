import {Row,Image,Card,ListGroup,ListGroupItem } from "react-bootstrap"

function Intro() {
    return (
        <>
        <Row style={{display:"flex",justifyContent: "center"}}>
            <Card style={{ width: '18rem' }}>
                <div style={{display:"flex",justifyContent: "center"}}>
                <Image style={{ width: '50%' }} roundedCircle variant="top" src="https://media.gq.com.tw/photos/628b2ec34824d010bb0b3cd4/1:1/w_360,h_360,c_limit/165306325038.jpeg" />
                </div>
            <Card.Body >
                <Card.Title style={{display:"flex", justifyContent: "center"}}>黃柏翔</Card.Title>
                <Card.Title style={{display:"flex", justifyContent: "center", fontSize:"14px", marginBottom:"1px"}}>畢業於海洋大學水產養殖系</Card.Title>
                <Card.Title style={{display:"flex", justifyContent: "center", fontSize:"14px", marginBottom:"1px"}}>經歷過太多與魚魚生離死別</Card.Title>
                <Card.Title style={{display:"flex", justifyContent: "center", fontSize:"14px", marginBottom:"1px"}}>立志用程式碼寫一隻永生魚</Card.Title>
            </Card.Body>
            <ListGroup  className="list-group-flush">
                <ListGroupItem style={{display:"flex",justifyContent: "center",fontSize:"15px"}}>Frontend Developer</ListGroupItem>
                <ListGroupItem style={{display:"flex",justifyContent: "center",fontSize:"15px"}}> Keelung City ,Taiwan</ListGroupItem>
                <ListGroupItem style={{display:"flex",justifyContent: "center",fontSize:"15px"}}>a0935640996@gmail.com</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Facebook</Card.Link>
                <Card.Link href="#">Instagram</Card.Link>
                <Card.Link href="#">Linkin</Card.Link>
            </Card.Body>
            </Card>
        </Row>
        </>        
    );
};
export default Intro;