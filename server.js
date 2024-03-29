// DEPENDENCIES
const methodOverride=require('method-override')
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

// CONFIGURATION
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended : true }))
app.use(methodOverride('_method'))


// ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

// ROUTE
//app.get('/', (req, res) => {
    //res.send('Welcome to an Awesome App about Breads')
  //})
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)

  // 404 Page route
app.get('*', (req, res) => {
  res.render('error404')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
() => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
  
