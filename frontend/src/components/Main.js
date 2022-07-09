import React, { useState, useEffect,useCallback }  from "react";
import axios from "axios"
import Intro from "./Intro";
import {Container,Row,Col,ButtonToolbar,ButtonGroup,Button,Form} from "react-bootstrap"
import Article from "./Article";
import { useForm } from "react-hook-form";
import LoadingBox from "./LoadingBox";

function Main() {
    const [numbers, setNumbers]=useState([]);
    const [pages, setPages]=useState([]);
    const [page, setPage]=useState(0);
    const [tag, setTage]=useState("");
    const [loading,setLoading] = useState(true); //Rendering componenent before implement useEffect , use loadingBox to avoiding mapping blank array.
    const [resizeTwo, setResizeTwo] = useState(false);
    const [resizeOne, setResizeOne] = useState(false);
    const {register, handleSubmit } = useForm();

    const handleRWD=()=>{
        if(window.innerWidth>1400){
            setResizeTwo(true);
        }else{
            setResizeTwo(false);
        };
        if(window.innerWidth>576){
            setResizeOne(true);
        }else{
            setResizeOne(false);
        };
    };
    //[{.},{.},{.},{.},{.},{.}] to [ [{.},{.},{.}] , [{.},{.},{.}] ]
    const slicePage = (data) => {
        let dataPages = [];
        console.log(data)
        for(let i=0,len=data.length;i<len;i+=6){
            dataPages.push(data.slice(i,i+6));
         };
         console.log(dataPages)
         setPages(dataPages);
        const numbers = [];
        for (let i = 0; i <Math.ceil(data.length/6); i += 1) {
          numbers.push(i);
        };
        setNumbers(numbers)
    };

    const selectTag = async (obj) => {
        setLoading(true)
        const {data}=await axios.get('/api/select',{ params: obj});
        slicePage(data);
        setTage(obj.select)
        setLoading(false)
    };  

    const searchData = async (obj) => {
      try{
        setLoading(true)
        const {data}=await axios.get('/api/search',{params:obj})
        slicePage(data);
        setLoading(false)
      }catch(err){console.log(err)}  
    };

    useEffect(()=>{ 
        selectTag({select:"all"}); //mongoDB seaching undefined will return all data in database
        window.onresize = handleRWD;
        handleRWD();
    },[]);
    
    return (
        <Container  fluid style={{marginRight:"0px",marginLeft:"0px",padding:0}}>
            <Row style={{height:"100vh",marginTop:"20px"}} >

            {resizeOne?<Col xs={0} sm={1} xxl={1}></Col>:<Col style={{position:"absolute" }}></Col>}

                <Col xs={12} sm={10} xxl={9} style={{padding:0}}>
                    <Form style ={{display:"flex"}} onSubmit={handleSubmit(data=>searchData(data))}>
                        <Form.Select style ={{width:"120px"}} {...register("select")} aria-label="Default select example">
                            <option value="all">all</option>
                            <option value="owner">owner</option>
                            <option value="html">html</option>
                            <option value="css"> css</option>
                            <option value="javascript">javascript</option>
                            <option value="nodejs">nodejs</option>
                            <option value="react">react</option>
                            <option value="mongodb">mongodb</option>
                        </Form.Select>
                        <Form.Control {...register("search")} type="text" placeholder="Search" />
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        <div style={{width:"200%"}}></div>
                    </Form>

                    {loading?<LoadingBox />:
                        pages[page].map((text)=>{
                            return <Article key={text._id} text={text} />
                        })
                    }

                    {loading?<LoadingBox />:
                        <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            {numbers.map((x)=>{
                                return <Button onClick={()=>setPage(x)} key={x+1}>{x+1}</Button> 
                            })}
                        </ButtonGroup>
                        </ButtonToolbar>
                    }
                </Col>

                {resizeTwo?<Col xxl={2}><Intro /></Col>:<Col xs={1} sm={1}></Col>}

            </Row>
            </Container>
    );
  }
  
  export default Main;