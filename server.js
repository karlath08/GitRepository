const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("Repositorio Git Act");
});

app.listen(8000, ()=>{
    console.log("Port running", 8000);
})