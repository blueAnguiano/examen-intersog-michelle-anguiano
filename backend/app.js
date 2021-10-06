const express =  require('express');
const body = require('body-parser');
const context = require('express-http-context');
const cors = require('cors');

const routers = require('./routes/routes');

const app = express();

app.use(body.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(body.json({limit: '50mb'}));
app.use(context.middleware);
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); 
});

app.use('api/v1', routers);

module.exports = app;