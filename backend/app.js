require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session')
const passport     = require('./helpers/passport')
const MongoStore   = require('connect-mongo')(session) 
const cors         = require('cors')


mongoose
  .connect(process.env.DB, {useCreateIndex:true, useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].db.databaseName}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


//cors config
app.use(cors({
  origin: '*',
  credentials: true
}))

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




//Session config
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  // httpOnly: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
 }));


 //passport config
app.use(passport.initialize())
app.use(passport.session())



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
