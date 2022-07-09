import express from "express"
import session from "express-session"
import {MongoClient,ObjectId } from "mongodb"

const uri ="mongodb+srv://a0935640996:aa24572880@nodejscluster.2uhcg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const app = express();
app.use(express.json());

const notFoundList = [
  {
    _id: "notFound",
    select: 'notFound',
    title: 'notFound',
    textarea: 'notFound'
  }
];



app.use(session({
  secret: 'mySecret',
  name: 'name', // optional
  saveUninitialized: false,
  resave: true, 
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}));

function auth(req, res, next) {
  if (req.session.name) {
    next()
  } else {
  return res.send({name:'unconnect'})
  }
}

// Replace the uri string with your MongoDB deployment's connection string.


async function userCheck(req, res, next) {
  try {
    await client.connect();
    const database = client.db('myWebsite');
    const member = database.collection('member');
    const query = req.body;
    const customer = await member.findOne(query);
    customer?res.send("此帳號或密碼已使用過"):next()
  }catch(err){console.log(err)} 
};

async function dataCursor() {
  try {
    await client.connect();
    const database = client.db('myWebsite');
    const data = database.collection('text');
    const cursor = data.find();
    const allValues = await cursor.toArray();
    return allValues;
  }catch(err){console.log(err);}; 
};

async function dataSearch(obj) {
  try {
    await client.connect();
    let regex = new RegExp(obj.search, 'g');
    const database = client.db('myWebsite');
    const data = database.collection('text');
    let cursor = {};
    if(obj.select==="all"){
      cursor = data.find({textarea : regex });
    }else{
      cursor = data.find({select:obj.select,textarea : regex });
    };
    const allValues = await cursor.toArray();
    return allValues;
  }catch(err){console.log(err);}; 
};

async function selectTag(obj) {
  try {
    await client.connect();
    const database = client.db('myWebsite');
    const data = database.collection('text');
    const cursor = data.find(obj)
    const allValues = await cursor.toArray()
    return allValues
  }catch(err){console.log(err)} 
}

app.post('/api/store',auth ,async (req, res) => {
  try{
    await client.connect();
    const database = client.db('myWebsite');
    const text = database.collection('text');
    text.insertOne(req.body);
    res.send({status:"connect"})
  }catch(err){console.log(err)}

})

app.post('/api/replace/:id',auth ,async (req, res) => {
  try{
    console.log(1)
    await client.connect();
    const database = client.db('myWebsite');
    const text = database.collection('text');
    const objId = new ObjectId(req.params.id)
    // create a query for a movie to update
    const query = { _id: objId };
    // create a new document that will be used to replace the existing document
    const replacement = req.body;
    const result = await text.replaceOne(query, replacement);
    console.log(result)
    res.send({status:"connect"})
  }catch(err){console.log(err)}

})

app.get("/api/select", (req,res) => {
  try {
    if(req.query.select==="all"){
      selectTag({}).then(val=>{
        val.length>0?res.send(val):res.send(notFoundList)});
    }else{
      selectTag(req.query).then(val=>{
        val.length>0?res.send(val):res.send(notFoundList)})
    };
  }catch(err){console.log(err)} ;
});

app.get("/api/Detail/:id",(req,res)=>{
  dataCursor().then(val=>{
    const found = val.find(x=>x._id.toString()===req.params.id);
    found?res.send(found):res.send("not found");
  });

});

app.get("/api/search/",(req,res)=>{
  console.log(req.query);
  dataSearch(req.query).then(val=>{
    val.length>0?res.send(val):res.send(notFoundList)
  });
});

app.get("/api/search/:id",(req,res)=>{
  console.log(req.params.id)
  const objId = new ObjectId(req.params.id)
  selectTag({_id:objId}).then(val=>{
    val.length>0?res.send(val):res.send(notFoundList)
  });
});

app.get("/api/delete/:id",async (req,res)=>{
  try{
    await client.connect();
    const database = client.db('myWebsite');
    const text = database.collection('text');
    const objId = new ObjectId(req.params.id)
    const query = { _id: objId };
    const result = await text.deleteOne(query);
    console.log(result)
    res.send({status:"connect"})
  }catch(err){console.log(err)}
});
//login sign

app.get('/api/logout', auth, (req, res) => {
  try{
    req.session.destroy();
    return res.send({status:'connect'});
  }catch(err){console.log(err)}
})

app.get('/api/feature', auth, (req, res) => {
  try{
  const userStatus = {name:req.session.name,status:'connect'}
  console.log(req.sessionID)
  return res.send(userStatus)
  }catch(err){console.log(err)}
})

app.post('/api/sign', userCheck,async (req, res) => {
  try{
    await client.connect(()=>console.log("/api/sign/connect"));
    const database = client.db('myWebsite');
    const member = database.collection('member');
    member.insertOne(req.body,()=>console.log("successful insert"+req.body));
    res.send("帳號密碼已新增成功")
  }catch(err){console.log(err)}
})

app.post('/api/login', async (req, res) => {
  try{
    await client.connect();
    const database = client.db('myWebsite');
    const member = database.collection('member');
    const query ={email:req.body.email , password:req.body.password} ;
    const customer = await member.findOne(query);
    if(customer){
      req.session.name = customer.name;
      return res.send({name:customer.name,status:"connect"});
    }else{
      return res.send("帳號密碼輸入錯誤")
    }
  }catch(err){console.log(err)}
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
});



  