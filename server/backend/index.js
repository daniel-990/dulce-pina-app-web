const express = require('express');
const morgan = require('morgan');

//init
const app = express();

//middleware
app.use(morgan('dev'));

//settings
app.set('port', 3000);

//start server
app.listen(app.get('port'), () => {
    console.log('server on ports', app.get('port'));
});