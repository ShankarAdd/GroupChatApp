const expess = require('express');

const loginRoute = require('./routes/loginPage');

const message = require('./routes/message')

const bodyParser=require('body-parser');

const app=expess();

app.use(bodyParser.urlencoded({extended : false}))

app.use(loginRoute);

app.use(message);

app.listen(3000);
