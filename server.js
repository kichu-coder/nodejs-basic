const express = require('express');
const dotenv = require('dotenv');
const oauthRouter = require('./router/oauthroute');
const requestRouter = require('./router/requests');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors('*'))


app.use('/oauth' , oauthRouter);

app.use('/request' , requestRouter);

app.get('/' , (req, res) => {
    res.json({
        message : 'hello world'
    })
})


app.listen(3000 , () => {
    console.log('server is listening in port 3000')
})