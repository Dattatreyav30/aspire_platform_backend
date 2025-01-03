const express = require('express')
const programRoute =require("./routes/programRoute");

const app = express();
   
app.use(express.json());

app.use(express.urlencoded({extended :true}));

//ROUTER
app.use('/program',programRoute);


app.listen(4500,()=>{
    console.log('port running on 4500')
})