import express from "express";

const app = express();
   
app.use(express.json());

app.use(express.urlencoded({extended :true}));

app.listen(4500,()=>{
    console.log('port running on 4500')
})