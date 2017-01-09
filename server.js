const express = require('express');
const app = express();


app.listen(3001, function()
{
    console.log('listening on 3001');
});

app.get('/', (request, response) => {
    //do get for localhost:3000 here.
    console.log(__dirname);
    //response.send('Hello World');
    response.sendFile(__dirname + '/views/index.html');
});