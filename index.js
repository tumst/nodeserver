
const express = require('express');

const app = express();

// define env
const PORT = process.env.PORT || 5000




app.get("/", function(req, res){
    res.send("Hello world.");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }.`) );
