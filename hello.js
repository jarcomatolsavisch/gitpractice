const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
app.get("/",(req,res)=>{
    res.end("Hello World.");
});
app.get("/test",(req,res)=>{
    res.end("Testing");
});
app.listen(port,()=>{
    console.log(`Server listens on port =${port}`);
});