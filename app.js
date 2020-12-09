const express = require('express');


const app = express();

app.use((req, res)=>{
  res.json({message:"Your message received"})
})


module.exports = app;