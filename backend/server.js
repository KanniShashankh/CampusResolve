var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var logger = require('./utils/logger').getLogger();
var dbconnect = require('./db/connect');
const apiRouter = require('./router/api');
// var config = require('./config');

const bodyParser = require('body-parser');

console.log("SETTING LOG LEVEL TO " + process.env.LOG_LEVEL);
logger.info("Logger Loaded Successfully");
dbconnect.connect(true);

var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static( path.join(__dirname, '../frontend/build') ));


// app.use('/', indexRouter);
// app.use('/ui', uiRouter);
// app.use('/api/auth', auth);
app.use('/api', apiRouter);

app.get("/*", async (req, res) => {
	res.sendFile( path.join(__dirname, "../frontend/build/index.html") );
});

module.exports = app;
