const express = require('express');
const app = express();
const morgan = require('morgan');


const port = 5000;





app.use(morgan('combined'));

app.get("/",(request,response) => {
    response.send("Ciao One!");
});

app.listen(port, () => {
    console.log("SERVER STARTED");
});