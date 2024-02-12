import express from "express";
import users from "./user.js";


// listen() in Express is like telling your app to start listening for visitors on a specific address and port, much like how Node listens for connections. 

const app = express();


app.get('/', (req, res) =>{
    res.send('Server is ready');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`)
})

// const express = require('express');



