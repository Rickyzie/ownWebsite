import express from "express"
import session from "express-session"
import {MongoClient } from "mongodb"
// Replace the uri string with your MongoDB deployment's connection string.
const uri ="mongodb+srv://a0935640996:aa24572880@nodejscluster.2uhcg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const app = express();

app.use(express.json())

async function dataCursor() {
  try {
    await client.connect();
    const database = client.db('myWebsite');
    const data = database.collection('text');
    const cursor = data.find()
    const allValues = await cursor.toArray()
    return allValues
  }catch(err){console.log(err)} 
}

app.post('/api/store',async (req, res) => {
  try{
    await client.connect();
    const database = client.db('myWebsite');
    const text = database.collection('text');
    text.insertOne(req.body);
    res.send({status:"connect"})
  }catch(err){console.log(err)}

})

app.get("/api/data", (req,res) => {
  try {
    dataCursor().then(x=>res.send(x))
  }catch(err){console.log(err)} 
})

app.get("/api/Detail/:id",(req,res)=>{
  dataCursor().then(val=>{
    const found = val.find(x=>x._id.toString()===req.params.id);
    found?res.send(found):res.send("not found");
  });

});


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
});



  