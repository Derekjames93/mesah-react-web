var express = require('express');
var path = require('path');
const models = require('./models')
const session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const store = new SequelizeStore({db: models.sequelize})
store.sync();

//routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api-users');
const loginRouter = require('./routes/login')
//todo CHECK HUB ROUTE PAGE TO MAKE SURE IT GETS USER LOGIN TO FETCH USERNAME TO HUB JS FRONT END
const hubRouter = require('./routes/hubroute')

var app = express();

// Get Images
app.use('/uploads', express.static('uploads'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(
    session({
      secret: 'Deejay', // used to sign the cookie
      resave: false, // update session even w/ no changes
      saveUninitialized: false, // always create a session
      store: store,
    }))

//middleware
// app.use((req,res, next)=>{
//     console.log('====USER=====')
//     console.log(req.session.user)
//     console.log('=============')
//     next();
// } )

//Check Auth
function checkAuth(req, res, next) {
  if(req.session.user){
    next()
  }else{
    res.status(401).json({
      error: 'Please Login to View'
    })
  }
}

// Routes

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter)
//TODO DOUBLE CHECK
app.use('/api/hub', hubRouter )

module.exports = app;
