const express = require('express');
const app = express();

const port = 3000;

// run code inside when client get a request on this specific route
app.get('/', (req, res) => {
    
    console.log('Test');
    res.send('My blog Server');
});


// listen the port 3000
app.listen(port, () => {

    console.log(`Listen on port ${port}`);
});